$(function() {
    var userInfo = { name: 'admin', role: 1 }
    $.cookie('userInfo', JSON.stringify(userInfo)); // 创建 cookie

})

function getCookie(key) {
    return JSON.parse($.cookie(key))
}