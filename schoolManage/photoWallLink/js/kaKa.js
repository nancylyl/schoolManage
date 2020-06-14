
//设置关闭浏览器清空localStorage里面的数据。
window.onbeforeunload=function () {
    localStorage.clear();
};

var active;

//===========初始化儿子元素数组（没有删除时使用）============
var kkobj = [];
for (let i = 0; i < kkList.length; i++) {
    if (i == 0) {
        active = "data-active='true'";
    } else {
        active = "";
    }
    kkobj.push(" <div class=\"ui-big-image\" data-key=\"" + i + "\"  " + active + ">" +
        " <button class='fixed' " + active + " data-key=\"" + i + "\" >删除照片 ×</button>" +
        "<img src='" + kkList[i].Url + "' alt=''/>" +
        " </div>"
    );
}

//===========初始化儿子元素数组（没有删除时使用）============
var kksmall = [];
for (let i = 0; i < kkSmallList.length ; i++) {
    if (i == 0) {
        active = "data-active='true'";
    } else {
        active = "";
    }
    kksmall.push("<div class='ui-thumbnail small' tabindex='-1'   " + active + " data-key=\"" + i + "\">" +
        "<img src='" + kkSmallList[i].Url + "' alt=''/>" +
        "<div class='ui-cuticle' data-flip-key='cuticle'></div>" +
        " </div>"
    );
}

//===========初始化儿子元素数组（没有删除时使用）============
var kkTxt = [];
for (let i = 0; i < kkTxtList.length; i++) {
    if (i == 0) {
        active = "data-active='true'";
    }
    kkTxt.push("<article class='ui-article'   " + active + " data-key=\"" + i + "\">" +
        "<h2 class='ui-heading'>" + kkTxtList[i].title + "</h2>" +
        "<p class='ui-paragraph'>" + kkTxtList[i].content + "</p>" +
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
                for (let i = kkSmallList.length; i >= 0; i--) {
                    for (let j = kkTxtList.length; j >= 0; j--) {
                        if (i == index && j == index) {
                            kkSmallList.splice(i, 1);
                            kkTxtList.splice(j, 1);
                            kkList.splice(index, 1);
                            //一旦点击到删除按钮，就清空此数组，不然会每次点击删除就会增加元素，这样明显不对
                            kkobj=[];
                            //清空后再添加没有被删的儿子到数组里，因为62行代码是删除数据，62行删一个 这里for循环就会少添加一个儿子
                            for (let i = 0; i < kkList.length; i++) {
                                if (i == 0) {
                                    active = "data-active='true'";
                                } else {
                                    active = "";
                                }
                                kkobj.push(" <div class=\"ui-big-image\" data-key=\"" + i + "\"  " + active + ">" +
                                    " <button class='fixed' " + active + " data-key=\"" + i + "\" >删除照片 ×</button>" +
                                    "<img src='" + kkList[i].Url + "' alt=''/>" +
                                    " </div>"
                                );
                            }
                            //同上述注释所阐述一样道理
                            kksmall=[];
                            for (let i = 0; i < kkSmallList.length ; i++) {
                                if (i == 0) {
                                    active = "data-active='true'";
                                } else {
                                    active = "";
                                }
                                kksmall.push("<div class='ui-thumbnail small' tabindex='-1'   " + active + " data-key=\"" + i + "\">" +
                                    "<img src='" + kkSmallList[i].Url + "' alt=''/>" +
                                    "<div class='ui-cuticle' data-flip-key='cuticle'></div>" +
                                    " </div>"
                                );
                            }
                            //同上述注释所阐述一样道理
                            kkTxt = [];
                            for (let i = 0; i < kkTxtList.length; i++) {
                                if (i == 0) {
                                    active = "data-active='true'";
                                }

                                kkTxt.push("<article class='ui-article'   " + active + " data-key=\"" + i + "\">" +
                                    "<h2 class='ui-heading'>" + kkTxtList[i].title + "</h2>" +
                                    "<p class='ui-paragraph'>" + kkTxtList[i].content + "</p>" +
                                    "</article>"
                                );
                            }
                            //经过删除后 将数据存储到localStorage里面待用
                            localStorage.setItem("kkobj",kkobj.join(""));
                            localStorage.setItem("kksmall",kksmall.join(""));
                            localStorage.setItem("kkTxt",kkTxt.join(""));
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
        let kkobjStr;
        //localStorage里得不到数据 证明之前没有删除操作，所以直接用最上面定义的儿子数组的内容放到父亲元素里
        if (localStorage.getItem("kkobj")==null) {
            kkobjStr= kkobj.join("");
            //localStorage里面有，证明已经经历了 删除操作，所以就讲localStorage里面的儿子字符串类型的集合取出来放进父亲里
        }else{
            kkobjStr= localStorage.getItem("kkobj");
        }
        //执行放入到父亲里的操作
        $(".ui-big-images").html(kkobjStr);
    }

    function xiaoTu() {
        let kksmallStr;
        if (localStorage.getItem("kksmall")==null) {
            kksmallStr= kksmall.join("");
        }else{

            kksmallStr= localStorage.getItem("kksmall");
        }
        $(".ui-thumbnails").html(kksmallStr);
    }

    function wenZi() {
        let kkTxtStr;
        if (localStorage.getItem("kkTxt")==null) {
            kkTxtStr= kkTxt.join("");
        }else{
            kkTxtStr= localStorage.getItem("kkTxt");
        }
        $(".ui-articles").html(kkTxtStr);
    }



});

