// 登录页面背景图片
$(".screenbg ul li").each(function() {
    $(this).css("opacity", "0");
});
$(".screenbg ul li:first").css("opacity", "1");
var index = 0;
var t;
var li = $(".screenbg ul li");
var number = li.size();

function change(index) {
    li.css("visibility", "visible");
    li.eq(index).siblings().animate({ opacity: 0 }, 3000);
    li.eq(index).animate({ opacity: 1 }, 3000);
}

function show() {
    index = index + 1;
    if (index <= number - 1) {
        change(index);
    } else {
        index = 0;
        change(index);
    }
}
t = setInterval(show, 5000);
//根据窗口宽度生成图片宽度
var width = $(window).width();
$(".screenbg ul img").css("width", width + "px");

//==================分割线===================
//判断登录
function myLogin() {
    let user = $("#user").val();
    let password = $("#password").val();
    let a = 0;
    //验证登录
    $.each(AllStaffList, function(i, ele) {
        if (user == ele.Id || user == ele.Tel || user == ele.Account) {
            if (ele.StateName === "正常" && ele.State === "在职") {
                console.log(password, ele.password);
                if (password == ele.PassWord) {
                    sessionStorage.setItem("key", JSON.stringify(ele));
                    // $("#myFormId").attr("action", "../index.html");
                    location.href = "../index.html"

                    a = 1;
                }
            }
        }
    });
    if (a == 0) {
        $(".prompt").show();
    }
}