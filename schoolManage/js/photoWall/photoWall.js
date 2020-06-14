// window.onbeforeunload=function () {
//     localStorage.removeItem("shangObj");
// };

var shangObj=[];
//将需要新增的相册HTML放进数组
shangObj.push( "<a href='../photoWallLink/html/shangChuan.html' target='myShow'>"+ "<div class='four'>"+ "<p class='addP'>"+"</p>"+
    "<img src='../images/photoWall/grey.png' alt='' class='myGrey'>"+ "</div>"+ "</a>");
    let shangObjStr;
//判断进入界面时，本地数据库是否存有数据（是否新增有相册）
    if (localStorage.getItem("shangObj")==null) {
//没有的话
        shangObjStr= shangObj.join("");
    }else{
//有的话就从本地存储把相册HTML放进去
        shangObjStr= localStorage.getItem("shangObj");
    }
    //执行放入到父亲里的操作
if ((localStorage.getItem("shangObj"))!=null) {

    $(".myOut").append(shangObjStr);

}
    console.log(shangObjStr);


console.log(localStorage.getItem("shangObj"));
    if(localStorage.getItem("shangObj")!=null){
        $(".four").show();
        $(".four").find("p").html(localStorage.getItem("text"));

    }

//上传照片
function myAdd() {

 //模态框，输入相册名
    layer.prompt({title: '请输入相册名', formType: 2}, function(text, index){
        layer.close(index);
        layer.msg('相册名：'+text);
        $(".four").show();
        $(".four").find("p").html(text);
        localStorage.setItem("shangObj",shangObj.join(""));
        localStorage.setItem("text",text);
        $(".myOut").append(shangObjStr);
        $(".four").show();
        $(".four").find("p").html(localStorage.getItem("text"));
    });
}
//上传界面
function inputChange(picId,imgId,addId,closeId){
    var files = document.getElementById(picId).files;//获取input框里面的图片
    console.log(files);
    // if(files.length == 0) return;
    var form = new FormData(),//FormDate是一个构造函数，构造表单
        file = files[0];//获取图片的信息
    console.log(file)
    form.append('file', file);//把图片添加到form表单

    var reader = new FileReader();//FileReader 对象主要用来把文件读入内存，并且读取文件中的数据。通过构造函数创建一个 FileReader 对象。
    reader.readAsDataURL(file); //base64
    /*  reader.readAsText(file);*/
    //接收到图片时触发onload
    reader.onload = function(e){
        var result = reader.result;
        console.log(result);
        document.getElementById(imgId).src = result;
        document.getElementById(imgId).classList.remove('hide');
        document.getElementById(addId).classList.add('hide');
        document.getElementById(closeId).classList.remove('hide');
    };
}
$(function() {
    $('.close').click(function () {
        $(this).addClass('hide');
        $(this).siblings('.add').removeClass('hide');
        $(this).siblings('img').addClass('hide');
    })
});

// function myClear(obj) {
//     let a = $(".ui-big-image"); //大图数组
//     let k = $(".ui-thumbnail"); //小图数组
//     let b = $(".ui-article"); //文字数组
//     console.log(a);
//     console.log(k);
//     console.log(b);
//     var index = $("button").index(obj);
//     console.log(index); //0,1,2,3,4,5
//     var ans = window.confirm("确定删除该照片?删除将无法恢复");
//     if (ans == true) {
//         for (let i = k.length; i >= 0; i--) {
//             for (let j = b.length; j >= 0; j--) {
//                 if (i == index && j == index) {
//                     k[i].remove();
//                     k.splice(i, 1);
//                     b[j].remove();
//                     b.splice(j, 1);
//                     $(obj).parent().remove();
//                     a.splice(index, 1);
//                 }
//             }
//         }
//     } else {
//         return false; //返回
//     }
// }


