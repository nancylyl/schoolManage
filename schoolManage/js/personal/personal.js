// 定义全局变量
var str= sessionStorage.getItem("key");
let info = JSON.parse(str);
let psw = info.PassWord;
let password = $(".userPassword").val(),
    password1 = $(".changePassword").val(),
    password2 = $(".confirmPassword").val();
let a= $(".changePassword").val().length;

$(function(){
    initInfo1();
    //==================分割线===================
    // 菜单栏切换效果
        var $tab_li = $('#tab ul li');
        $tab_li.click(function(){
            $(this).addClass('selected').siblings().removeClass('selected');
            var index = $tab_li.index(this);
            $('div.tab_box > div').eq(index).show().siblings().hide();
        });

    //==================分割线===================
    // 个人中心数据获取
    function initInfo1(){
        $(".userDuty").text(info.Duty);
        $(".userImg").attr("src",info.Url);
        $(".userName").text(info.Name);
        $(".userName").attr("value",info.Name);
        $(".userSex").attr("value",info.Sex);
        $(".userId").attr("value",info.Id);
        /*性别*/
        if (info.Sex == "男"){
            $('input:radio').eq(0).prop('checked', 'true');
        }
        if(info.Sex == "女"){
            $('input:radio').eq(1).attr('checked', 'true');
        }
        $(".userAge").attr("value",info.Age);
        $(".userDuty").attr("value",info.Duty);
        $(".userGrade").attr("value",info.Grade);
        $(".userTel").attr("value",info.Tel);
        $(".userEmail").attr("value",info.Email);
        $(".userDepName").attr("value",info.DepName);
        $(".userState").attr("value",info.State);
        $(".userFamily").attr("value",info.EContact);
        $(".userFamilyTel").attr("value",info.ETel);
        $(".userAddress").attr("value",info.Addr);
    }
    //==================个人信息修改===================

    // 确定修改
    let lists = AllStaffList;
    $("#change").on("click", function() {
            $.confirm({
                text: "是否确定修改？",
                confirmButton: "确定",
                cancelButton: "取消",
                confirm: function() {
                    info["role"] = info.role;
                    info["Id"] = info.Id;
                    info["Name"] = info.Name;
                    info["Age"] = info.Age;
                    info["Sex"] = info.Sex;
                    info["Tel"] = $("#userTel").val();
                    info["DepName"] = info.DepName;
                    info["Duty"] = info.Duty;
                    info["Grade"] = info.Grade;
                    info["arrive"] = info.arrive;
                    info["LeaveSchool"] = info.LeaveSchool;
                    info["attendance"] = info.attendance;
                    info["StateName"] = info.StateName;
                    info["Email"] = $("#userEmail").val();
                    info["Account"] = info.Account;
                    info["PassWord"] = info.PassWord;
                    info["State"] = info.State;
                    info["Account"] = info.Account;
                    info["DepID"] = info.DepID;
                    info["Birthday"] = info.Birthday;
                    info["EContact"] = $("#userFamily").val();
                    info["ETel"] = $("#userFamilyTel").val();
                    info["Addr"] = $("#userAddress").val();
                    info["Url"] = info.Url;
                    $.each(lists, function (i, ele) {
                        if (ele.Id === info.Id) {
                            let a = lists.indexOf(ele);
                            lists.splice(a, 1);
                            lists.push(info);
                            initInfo1();
                        }
                    });
                    showMsg("修改成功");
                },
                dialogClass: 'confirm-dialog'
            });
        });
    //==================密码修改页面===================

    // 原始密码判断
    $(".userPassword").blur(function(){
        password = $(this).val();
        if (password !== psw){
            $(".aHide").show();
        }else{
            $(".aHide").hide();
        }
    });
    // 新密码字符判断
    $(".changePassword").blur(function(){
        password1 = $(this).val();
        a= $(this).val().length;
        if (a < 6 || a>12){
            $(".bHide").show();
        }else{
            $(".bHide").hide();
        }
        if (password1 === psw){
            $(".cHide").show();
        }else{
            $(".cHide").hide();
        }
    });
    // 确认新密码
    $(".confirmPassword").blur(function(){
        password2 = $(this).val();
        if (password1 !== password2){
            $(".dHide").show();
        }else{
            $(".dHide").hide();
        }
    });
    // 修改密码函数
    function change() {
        $.confirm({
            text: "是否确定修改？",
            confirmButton: "确定",
            cancelButton: "取消",
            confirm: function () {
                info["role"] = info.role;
                info["Id"] = info.Id;
                info["Name"] = info.Name;
                info["Age"] = info.Age;
                info["Sex"] = info.Sex;
                info["Tel"] = info.Tel;
                info["DepName"] = info.DepName;
                info["Duty"] = info.Duty;
                info["Grade"] = info.Grade;
                info["arrive"] = info.arrive;
                info["LeaveSchool"] = info.LeaveSchool;
                info["attendance"] = info.attendance;
                info["StateName"] = info.StateName;
                info["Email"] = info.Email;
                info["Account"] = info.Account;
                info["PassWord"] = $("#changePassword").val();
                info["State"] = info.State;
                info["Account"] = info.Account;
                info["DepID"] = info.DepID;
                info["Birthday"] = info.Birthday;
                info["EContact"] = info.EContact;
                info["ETel"] = info.ETel;
                info["Addr"] = info.Addr;
                info["Url"] = info.Url;
                $.each(lists, function (i, ele) {
                    if (ele.Id === info.Id) {
                        let a = lists.indexOf(ele);
                        lists.splice(a, 1);
                        lists.push(info);
                        initInfo1();
                    }
                });
                $(".changeSubmit").val('');
                showMsg("修改成功");
                parent.location.href="login/login.html";
            },
            dialogClass: 'confirm-dialog'
        });
    }
    // 确认修改密码
    $("#changePsw").on("click", function() {
        // console.log(password);
        if (password === "" || password1 === "" || password2 === "") {
            $(".eHide").show();
        }
        if (password !== "" && password1 !== "" && password2 !== ""){
            if (password === psw) {
                if (password1 === password2){
                    if (password !== password1){
                        if (password1 !== psw){
                            if (a >= 6 && a <= 12){
                                $(".eHide").hide();
                                change();
                            }
                        }
                    }
                }
            }
        }
        // console.log(password);
        // console.log(info);
    });
    // 取消修改
    $(".cancel1").on("click",function () {
        $(".aHide").hide();
        $(".bHide").hide();
        $(".cHide").hide();
        $(".dHide").hide();
        $(".eHide").hide();
        $(".changeSubmit").val("");
    })
});
