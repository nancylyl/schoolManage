// 定义全局变量
var str= sessionStorage.getItem("key");
let info = JSON.parse(str);
let author = info.Name;
let titleVal, contentVal, objStr, info1, newBulletinList ,addObj;
let newList; // 发布公告需要添加进的对象

// 获取当前日期
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dates = date.getDate();
let nowDate = year+"-"+month+"-"+dates;

$(function() {
    init();
    function init() {
        loadTable();
    }
    /*-------------------------- 公告管理页面数据获取 ------------------------------*/
    function loadTable() {
        $("#tb-bulletin").html("");
        //localStorage里得不到数据 证明之前没有发布公告，所以直接用date.js里的数据
        if (localStorage.getItem("k")==null) {
            info1 = BulletinList;
            //localStorage里面有，证明已经经历了发布操作，所以就用localStorage里面的数据
        }else{
            objStr= localStorage.getItem("k");
            info1 = JSON.parse(objStr);
        }
        newBulletinList = info1;
        let bulletinList = [];
        for (let i = 0; i< newBulletinList.length; i++) {
            // addId = newBulletinList.length + 1;
            let bulletin = newBulletinList[i];
            bulletinList.push(" <tr>");
            bulletinList.push(" <td>" + (i + 1) + "</td>");
            bulletinList.push(" <td class='sTitle'>" + bulletin.Title + "</td>");
            bulletinList.push(" <td class='sAuthor'>" + bulletin.Author + "</td>");
            bulletinList.push(" <td class='sTime'>" + bulletin.Time + "</td>");
            bulletinList.push(" <td>");
            bulletinList.push(" <button type='button' class='btn btn-xs btn-primary look'>查看</button>");
            bulletinList.push(" <button type='button' class='btn btn-xs btn-danger deleted'>删除</button>");
            bulletinList.push(" </td>");
            bulletinList.push("</tr>");
        }
        $("#tb-bulletin").html(bulletinList.join(''));
    }

    /*-------------------------- 发布公告 ------------------------------*/

    // 定义一个发布公告需要的内容对象，以及对应的值
    addObj = {
        Title: "",
        Content: "",
        Author: author,
        Time: nowDate
    };

    newList = newBulletinList;
    $("#refer").on("click", function () {
        titleVal = $(".title").val();
        contentVal = $(".content").val();
        // console.log(titleVal);
        // console.log(contentVal);
        addObj['Title'] = titleVal;
        addObj['Content'] = contentVal;
        if (titleVal === "" || contentVal === ""){
            $(".warn").show();
        }else{
            $(".warn").hide();
            $.confirm({
                text: "是否确定发布",
                confirmButton: "确定",
                cancelButton: "取消",
                confirm: function() {
                    $(".title").val("");
                    $(".content").val("");
                    newList.push(addObj);
                    localStorage.setItem("k",JSON.stringify(newList));
                    $('#main').load("announcement/announcement.html");
                    showMsg("发布成功");
                }
            });
        }
    });

    //  取消发布  内容清空
    $("#cancel").on("click", function () {
        $(".title").val("");
        $(".content").val("");
    });

    /*-------------------------- 查找公告内容 ------------------------------*/
    $('#search').click(function(){
        var txt=$('#input-search').val();
        $(".aHide").hide();
        if (txt === ""){
            $(".aHide").show();
            $('#main').load("announcement/announcement.html");
        }else{
            $("table tbody tr").hide().filter(":contains('"+txt+"')").show();
            $('#input-search').val("");

        }

    });

    /*-------------------------- 操作列表 查看 删除 ------------------------------*/
    function showMsg(msg = '操作成功！') {
        bootoast.toast({
            message: msg,
            type: 'success',
            timeoutProgress: 200,
            animationDuration: 300,
        });
    }
    // 查看公告
    $(".look").on("click", function() {
        let index = $(this).parent().parent().index();
        // console.log(index)
        $(".bulletin_title").text(info1[index].Title);
        $(".bulletinAuthor").text(info1[index].Author);
        $(".bulletinTime").text(info1[index].Time);
        $(".bulletinContent").html(info1[index].Content);
        $('#lookBulletin').modal('show');
    });

    // 删除公告
    $(".deleted").on("click", function() {
        let index1 = $(this).parent().parent().index();
        console.log(index1);
        // let list = info1;
        $.each(info1, function(i, ele) {
            // console.log( ele);
            if ( index1 === i ) {
                $.confirm({
                    text: "是否确定删除",
                    confirmButton: "确定",
                    cancelButton: "取消",
                    confirm: function () {
                        info1.splice(i, 1);
                        localStorage.setItem("k", JSON.stringify(info1));
                        showMsg();
                        $('#main').load("announcement/announcement.html");
                    },
                    dialogClass: 'confirm-dialog'
                });
            }
        });
    });

    /*退出模态框*/
    $("#withdrawBulletin").click(function(){
        $('#lookBulletin').modal('hide');
    })
});

