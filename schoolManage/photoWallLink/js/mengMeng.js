//设置关闭浏览器清空localStorage里面的数据。
window.onbeforeunload=function () {
    localStorage.clear();
};

var active;

//===========初始化大图子元素数组（没有删除时使用）============
var mmobj = [];
for (let i = 0; i < mmList.length; i++) {
    if (i == 0) {
        active = "data-active='true'";
    } else {
        active = "";
    }
 //将大图的HTML放进mmobj数组里，循环在数据库里取得每一个大图i .
    mmobj.push(" <div class=\"ui-big-image\" data-key=\"" + i + "\"  " + active + ">" +
        " <button class='fixed' " + active + " data-key=\"" + i + "\" >删除照片 ×</button>" +
        "<img src='" + mmList[i].Url + "' alt=''/>" +
        " </div>"
    );
}

//===========初始化小图子元素数组（没有删除时使用）============
var mmsmall = [];
for (let i = 0; i < mmSmallList.length ; i++) {
    if (i == 0) {
        active = "data-active='true'";
    } else {
        active = "";
    }
//将小图的HTML放进mmsmall数组里，循环在数据库取得每一个小图i.
    mmsmall.push("<div class='ui-thumbnail small' tabindex='-1'   " + active + " data-key=\"" + i + "\">" +
        "<img src='" + mmSmallList[i].Url + "' alt=''/>" +
        "<div class='ui-cuticle' data-flip-key='cuticle'></div>" +
        " </div>"
    );
}

//===========初始化文字子元素数组（没有删除时使用）============
    var mmTxt = [];
    for (let i = 0; i < mmTxtList.length; i++) {
        if (i == 0) {
            active = "data-active='true'";
        }
//将文字描述的HTML放进mmtxt数组里，循环在数据库取得每一个文字描述i.
        mmTxt.push("<article class='ui-article'   " + active + " data-key=\"" + i + "\">" +
            "<h2 class='ui-heading'>" + mmTxtList[i].title + "</h2>" +
            "<p class='ui-paragraph'>" + mmTxtList[i].content + "</p>" +
            "</article>"
        );
    }
$(function() {
 //每次打开先加载大图、小图、文字描述
    daTu();
    xiaoTu();
    wenZi();
    window.thumbnail();
 //大图的按钮设置点击事件
    $(".ui-big-images").on("click", ".fixed", function(e) {
 //获取删除按钮的key值index。按钮属于大图，大图的key值也是index。
        let $elem = $(e.target);
        var index = $(e.target).data("key");
//弹出模态框
        $.confirm({
            text: "确定删除该照片?删除将无法恢复",
            confirmButton: "确定",
            cancelButton: "取消",
            confirm: function() {
//循环，将与删除按钮一一对应的小图和文字描述找出来
                for (let i = mmSmallList.length; i >= 0; i--) {
                    for (let j = mmTxtList.length; j >= 0; j--) {
                        if (i == index && j == index) {
//在数据库删除对应的大图、小图、文字描述。
                            mmSmallList.splice(i, 1);
                            mmTxtList.splice(j, 1);
                            mmList.splice(index, 1);
//清空装HTML的mmobj数组
                            mmobj=[];
//再把没有被删的大图子元素放到到html数组里，因为点删除的大图已在上一步的数据库中清空，这里for循环就不会有被删除的大图了。
                            for (let i = 0; i < mmList.length; i++) {
                                if (i == 0) {
                                    active = "data-active='true'";
                                } else {
                                    active = "";
                                }
//此时装进mmobj数组的是剩下的大图
                                mmobj.push(" <div class=\"ui-big-image\" data-key=\"" + i + "\"  " + active + ">" +
                                    " <button class='fixed' " + active + " data-key=\"" + i + "\" >删除照片 ×</button>" +
                                    "<img src='" + mmList[i].Url + "' alt=''/>" +
                                    " </div>"
                                );
                            }
//清空装HTML的mmsmall数组
                            mmsmall=[];
//再把没有被删的小图子元素放到到html数组里，因为点删除的小图已在上一步的数据库中清空，这里for循环就不会有被删除的小图了。
                            for (let i = 0; i < mmSmallList.length ; i++) {
                                if (i == 0) {
                                    active = "data-active='true'";
                                } else {
                                    active = "";
                                }
//此时装进mmsmall数组的是剩下的大图
                                mmsmall.push("<div class='ui-thumbnail small' tabindex='-1'   " + active + " data-key=\"" + i + "\">" +
                                    "<img src='" + mmSmallList[i].Url + "' alt=''/>" +
                                    "<div class='ui-cuticle' data-flip-key='cuticle'></div>" +
                                    " </div>"
                                );
                            }
//清空装HTML的mmtxt数组
                            mmTxt = [];
//再把没有被删的文字子元素放到到html数组里，因为点删除的文字已在上一步的数据库中清空，这里for循环就不会有被删除的文字了。
                            for (let i = 0; i < mmTxtList.length; i++) {
                                if (i == 0) {
                                    active = "data-active='true'";
                                }
//此时装进mmtxt数组的是剩下的文字
                                mmTxt.push("<article class='ui-article'   " + active + " data-key=\"" + i + "\">" +
                                    "<h2 class='ui-heading'>" + mmTxtList[i].title + "</h2>" +
                                    "<p class='ui-paragraph'>" + mmTxtList[i].content + "</p>" +
                                    "</article>"
                                );
                            }
 // //经过删除后 将大图、小图、文字的数据分别存储到localStorage里面待用
                            localStorage.setItem("mmobj",mmobj.join(""));
                            localStorage.setItem("mmsmall",mmsmall.join(""));
                            localStorage.setItem("mmTxt",mmTxt.join(""));
//重新调用大图、小图、文字，以便展示删除照片后的样子
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
//大图函数
    function daTu() {
       let mmobjStr;
      //判断进入页面之前有没有删除大图操作，没有的话，本地存储localStorage里就没有数据，直接展示所有图片
       if (localStorage.getItem("mmobj")==null) {
           mmobjStr= mmobj.join("");
           //localStorage里面有数据，证明已经历了删除操作，所以将localStorage里面的大图子元素的字符串集合取出来，放进大图的HTML父元素里
       }else{
          mmobjStr= localStorage.getItem("mmobj");
       }
       //放入到HTML父元素里
        $(".ui-big-images").html(mmobjStr);
    }
//小图函数 同理
    function xiaoTu() {
        let mmsmallStr;
        if (localStorage.getItem("mmsmall")==null) {
            mmsmallStr= mmsmall.join("");
        }else{

            mmsmallStr= localStorage.getItem("mmsmall");
        }
        $(".ui-thumbnails").html(mmsmallStr);
    }
//文字函数 同理
    function wenZi() {
        let mmTxtStr;
        if (localStorage.getItem("mmTxt")==null) {
            mmTxtStr= mmTxt.join("");
        }else{
            mmTxtStr= localStorage.getItem("mmTxt");
        }
        $(".ui-articles").html(mmTxtStr);
    }



});

