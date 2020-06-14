
//设置关闭浏览器清空localStorage里面的数据。
window.onbeforeunload=function () {
    localStorage.clear();
};

var active;

//===========初始化儿子元素数组（没有删除时使用）============
var hjobj = [];
for (let i = 0; i < hjList.length; i++) {
    if (i == 0) {
        active = "data-active='true'";
    } else {
        active = "";
    }
    hjobj.push(" <div class=\"ui-big-image\" data-key=\"" + i + "\"  " + active + ">" +
        " <button class='fixed' " + active + " data-key=\"" + i + "\" >删除照片 ×</button>" +
        "<img src='" + hjList[i].Url + "' alt=''/>" +
        " </div>"
    );
}

//===========初始化儿子元素数组（没有删除时使用）============
var hjsmall = [];
for (let i = 0; i < hjSmallList.length ; i++) {
    if (i == 0) {
        active = "data-active='true'";
    } else {
        active = "";
    }
    hjsmall.push("<div class='ui-thumbnail small' tabindex='-1'   " + active + " data-key=\"" + i + "\">" +
        "<img src='" + hjSmallList[i].Url + "' alt=''/>" +
        "<div class='ui-cuticle' data-flip-key='cuticle'></div>" +
        " </div>"
    );
}

//===========初始化儿子元素数组（没有删除时使用）============
var hjTxt = [];
for (let i = 0; i < hjTxtList.length; i++) {
    if (i == 0) {
        active = "data-active='true'";
    }
    hjTxt.push("<article class='ui-article'   " + active + " data-key=\"" + i + "\">" +
        "<h2 class='ui-heading'>" + hjTxtList[i].title + "</h2>" +
        "<p class='ui-paragraph'>" + hjTxtList[i].content + "</p>" +
        "</article>"
    );
}
$(function() {
    daTu();
    xiaoTu();
    wenZi();
    window.thumbnail();
    $(".ui-big-images").on("click", ".fixed", function(e) {
        let $elem = $(e.target);
        var index = $(e.target).data("key");
        $.confirm({
            text: "确定删除该照片?删除将无法恢复",
            confirmButton: "确定",
            cancelButton: "取消",
            confirm: function() {
                for (let i = hjSmallList.length; i >= 0; i--) {
                    for (let j = hjTxtList.length; j >= 0; j--) {
                        if (i == index && j == index) {
                            hjSmallList.splice(i, 1);
                            hjTxtList.splice(j, 1);
                            hjList.splice(index, 1);
                            //一旦点击到删除按钮，就清空此数组，不然会每次点击删除就会增加元素，这样明显不对
                            hjobj=[];
                            //清空后再添加没有被删的儿子到数组里，因为62行代码是删除数据，62行删一个 这里for循环就会少添加一个儿子
                            for (let i = 0; i < hjList.length; i++) {
                                if (i == 0) {
                                    active = "data-active='true'";
                                } else {
                                    active = "";
                                }
                                hjobj.push(" <div class=\"ui-big-image\" data-key=\"" + i + "\"  " + active + ">" +
                                    " <button class='fixed' " + active + " data-key=\"" + i + "\" >删除照片 ×</button>" +
                                    "<img src='" + hjList[i].Url + "' alt=''/>" +
                                    " </div>"
                                );
                            }
                            //同上述注释所阐述一样道理
                            hjsmall=[];
                            for (let i = 0; i < hjSmallList.length ; i++) {
                                if (i == 0) {
                                    active = "data-active='true'";
                                } else {
                                    active = "";
                                }
                                hjsmall.push("<div class='ui-thumbnail small' tabindex='-1'   " + active + " data-key=\"" + i + "\">" +
                                    "<img src='" + hjSmallList[i].Url + "' alt=''/>" +
                                    "<div class='ui-cuticle' data-flip-key='cuticle'></div>" +
                                    " </div>"
                                );
                            }
                            //同上述注释所阐述一样道理
                            hjTxt = [];
                            for (let i = 0; i < hjTxtList.length; i++) {
                                if (i == 0) {
                                    active = "data-active='true'";
                                }

                                hjTxt.push("<article class='ui-article'   " + active + " data-key=\"" + i + "\">" +
                                    "<h2 class='ui-heading'>" + hjTxtList[i].title + "</h2>" +
                                    "<p class='ui-paragraph'>" + hjTxtList[i].content + "</p>" +
                                    "</article>"
                                );
                            }
                            //经过删除后 将数据存储到localStorage里面待用
                            localStorage.setItem("hjobj",hjobj.join(""));
                            localStorage.setItem("hjsmall",hjsmall.join(""));
                            localStorage.setItem("hjTxt",hjTxt.join(""));
                            //重新调用下面的展示图片的三个方法
                            daTu();
                            xiaoTu();
                            wenZi();

                        }
                    }
                }
                window.thumbnail();
            }
        });
    });




    function daTu() {
        let hjobjStr;
        //localStorage里得不到数据 证明之前没有删除操作，所以直接用最上面定义的儿子数组的内容放到父亲元素里
        if (localStorage.getItem("hjobj")==null) {
            hjobjStr= hjobj.join("");
            //localStorage里面有，证明已经经历了 删除操作，所以就讲localStorage里面的儿子字符串类型的集合取出来放进父亲里
        }else{
            hjobjStr= localStorage.getItem("hjobj");
        }
        //执行放入到父亲里的操作
        $(".ui-big-images").html(hjobjStr);
    }

    function xiaoTu() {
        let hjsmallStr;
        if (localStorage.getItem("hjsmall")==null) {
            hjsmallStr= hjsmall.join("");
        }else{

            hjsmallStr= localStorage.getItem("hjsmall");
        }
        $(".ui-thumbnails").html(hjsmallStr);
    }

    function wenZi() {
        let hjTxtStr;
        if (localStorage.getItem("hjTxt")==null) {
            hjTxtStr= hjTxt.join("");
        }else{
            hjTxtStr= localStorage.getItem("hjTxt");
        }
        $(".ui-articles").html(hjTxtStr);
    }



});

