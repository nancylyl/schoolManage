$(function() {
    daTu();
    xiaoTu();
    wenZi();

    window.thumbnail();
    // console.log("ddd");
    // console.log($(".ui-big-images"));
    $(".ui-big-images").on("click", ".fixed", function(e) {
        // alert("dd");
        //大图数组 mmList   a
        //小图数组 mmSmallList   kxiaoTu
        let $elem = $(e.target);
        var index = $(e.target).data("key");
        // console.log($(".ui-big-images").find("div:nth(" + index + ")")[0]);
        // var ans = window.confirm("确定删除该照片?删除将无法恢复");
        $.confirm({
            text: "确定删除该照片?删除将无法恢复",
            confirmButton: "确定",
            cancelButton: "取消",
            confirm: function() {
                for (let i = mmSmallList.length; i >= 0; i--) {
                    for (let j = mmTxtList.length; j >= 0; j--) {
                        if (i == index && j == index) {
                            // mmSmallList[i].remove();
                            mmSmallList.splice(i, 1);
                            // mmTxtList[j].remove();
                            mmTxtList.splice(j, 1);
                            // mmList[index].remove();
                            mmList.splice(index, 1);
                            // console.log(mmSmallList, mmTxtList, mmList);

                            $(".ui-big-images").find("div:nth(" + index + ")").remove();
                            $(".ui-thumbnails").find("div:nth(" + index + ")").remove();
                            $(".ui-article").find("div:nth(" + index + ")").remove();
                            showMsg();
                            daTu();
                            xiaoTu();
                            wenZi();
                            // setTimeout(daTu(), 1000);
                            // setTimeout(xiaoTu(), 1000);
                            // setTimeout(wenZi(), 1000);

                        }
                    }
                }
            }
        });

        // if (ans == true) {

            // window.thumbnail();
        // } else {
        //     return false; //返回
        // }

    });



    var active;

    function daTu() {
        var mmobj = [];

        for (let i = 0; i < mmList.length; i++) {
            if (i == 0) {
                active = "data-active='true'";
            } else {
                active = "";
            }
            mmobj.push(" <div class=\"ui-big-image\" data-key=\"" + i + "\"  " + active + ">");
            mmobj.push(" <button class='fixed' " + active + " data-key=\"" + i + "\" >删除照片 ×</button>");
            mmobj.push("<img src='" + mmList[i].Url + "' alt=''/>");
            mmobj.push("     </div>");
            // console.log(mmList[i].Url);
        }
        console.log(mmobj.join(''));
        $(".ui-big-images").html(mmobj.join(''));
    }

    function xiaoTu() {
        var mmsmall = [];
        for (let i = 0; i < mmSmallList.length ; i++) {
            if (i == 0) {
                active = "data-active='true'";
            } else {
                active = "";
            }
            mmsmall.push("<div class='ui-thumbnail small' tabindex='-1'   " + active + " data-key=\"" + i + "\">");
            mmsmall.push("<img src='" + mmSmallList[i].Url + "' alt=''/>");
            mmsmall.push("<div class='ui-cuticle' data-flip-key='cuticle'></div>");
            mmsmall.push(" </div>");
        }
        $(".ui-thumbnails").html(mmsmall.join(''));
    }

    function wenZi() {
        var mmTxt = [];
        for (let i = 0; i < mmTxtList.length; i++) {
            // if (i == 0) {
            //     active = "data-active='true'";
            // }

            mmTxt.push("<article class='ui-article'   " + active + " data-key=\"" + i + "\">");
            mmTxt.push("<h2 class='ui-heading'>" + mmTxtList[i].title + "</h2>");
            mmTxt.push("<p class='ui-paragraph'>" + mmTxtList[i].content + "</p>");
            mmTxt.push("</article>");
        }
        $(".ui-articles").html(mmTxt.join(''));
    }



    // function myClear(obj) {
    //     //大图数组 mmList   a
    //     //小图数组 mmSmallList   k
    //     //文字数组 mmTxtList    b
    //     var index = $("button").index(obj);
    //     console.log(index); //0,1,2,3,4,5
    //     var ans = window.confirm("确定删除该照片?删除将无法恢复");
    //     if (ans == true) {
    //         for (let i = mmSmallList.length; i >= 0; i--) {
    //             for (let j = mmTxtList.length; j >= 0; j--) {
    //                 if (i == index && j == index) {
    //                     mmSmallList[i].remove();
    //                     mmSmallList.splice(i, 1);
    //                     mmTxtList[j].remove();
    //                     mmTxtList.splice(j, 1);
    //                     $(obj).parent().remove();
    //                     mmList.splice(index, 1);
    //                     console.log(mmSmallList);
    //                     daTu();
    //                     xiaoTu();
    //                     wenZi();
    //                 }
    //             }
    //         }
    //     } else {
    //         return false; //返回
    //     }
    // }

});