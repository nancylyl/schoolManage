bindData();
var Id;
//初始加载数据
function bindData() {

    var $bemen = $("#buMen").val() //获取下拉的val值
    var newbuMenGuanLI = buMenGuanLI;
    if ($bemen.trim() != "请选择") {
        newbuMenGuanLI = buMenGuanLI.filter(item => item.buMenNanme == $bemen.trim())
    }
    var buMenLIst = [];

    for (var item = 0; item < newbuMenGuanLI.length; item++) {


        var student = newbuMenGuanLI[item];
        buMenLIst.push(" <tr class=\"active\" data-vlue='student.xiangMunumber'>");
        buMenLIst.push(" <td class='td'>" + (student.xiangMunumber) + "</td>");
        buMenLIst.push(" <td class='td ser'>" + student.buMenNanme + "</td>");
        buMenLIst.push(" <td class='td'>" + student.fuZeRenname + "</td>");
        buMenLIst.push(" <td class='td'>" + student.lianXIDianHua + "</td>");
        buMenLIst.push(" <td class='td'>" + student.buMenMiaoShu + "</td>");
        buMenLIst.push(" <td  class='renShu td'>" + student.buMenRenShu + "</td>");
        buMenLIst.push(" <td class='td'>" + student.beiZhu + "</td>");
        buMenLIst.push(" <td>");

        buMenLIst.push("<button type='button' class='btn btn-xs btn-primary' data-ID='" + student.xiangMunumber + "' data-toggle=\"modal\" data-target=\"#xiuGaiModal\" >编辑</button>");
        buMenLIst.push(" <button type='button' class='btn btn-xs btn-primary' data-ID='" + student.xiangMunumber + "'  data-toggle=\"modal\" data-target=\"#chaKanModal\" >查看</button>");
        buMenLIst.push(" <button type='button' class='btn btn-xs btn-danger' data-ID='" + student.xiangMunumber + "' onclick=\"del(this)\">删除</button>");
        buMenLIst.push(" </td>");
        buMenLIst.push("</tr>");

    }

    $("#body").html(buMenLIst.join(''));

}


//新增部门
$("#xinZeng").click(function() {
    var student = {};
    var k = buMenGuanLI.length
    student.xiangMunumber = $("#bianHaoinput").val();
    student.buMenNanme = $("#minCheninput").val();
    student.fuZeRenname = $("#fuZeReninput").val();
    student.lianXIDianHua = $("#lianxiPoneinput").val();
    student.buMenMiaoShu = $("#buMenMiaoShu").val();
    student.buMenRenShu = $("#renShuinput").val();
    student.beiZhu = $("#beiZhu").val();
    student.name1 = $("#name1input").val();
    student.name2 = $("#name2input").val();
    student.name3 = $("#name3input").val();
    student.phone1 = $("#phone1input").val();
    student.phone2 = $("#phone2input").val();
    student.phone3 = $("#phone3input").val();
    // console.log(student)
    buMenGuanLI.push(student);
    // console.log(buMenGuanLI)
    buMenLIst.push(" <tr class=\"active\">");
    buMenLIst.push(" <td class='td'>" + (student.xiangMunumber) + "</td>");
    buMenLIst.push(" <td class='td ser'>" + student.buMenNanme + "</td>");
    buMenLIst.push(" <td class='td'>" + student.fuZeRenname + "</td>");
    buMenLIst.push(" <td class='td'>" + student.lianXIDianHua + "</td>");
    buMenLIst.push(" <td class='td'>" + student.buMenMiaoShu + "</td>");
    buMenLIst.push(" <td  class='renShu td'>" + student.buMenRenShu + "</td>");
    buMenLIst.push(" <td class='td'>" + student.beiZhu + "</td>");
    buMenLIst.push(" <td>");

    buMenLIst.push("<button type='button' class='btn btn-xs btn-primary' data-ID='" + student.xiangMunumber + "'  data-toggle=\"modal\" data-target=\"#xiuGaiModal\" >编辑</button>");
    buMenLIst.push(" <button type='button' class='btn btn-xs btn-primary' data-ID='" + student.xiangMunumber + "'  data-toggle=\"modal\" data-target=\"#chaKanModal\" >查看</button>");
    buMenLIst.push(" <button type='button' class='btn btn-xs btn-danger' data-ID='" + student.xiangMunumber + "' onclick=\"del(this)\">删除</button>");

    buMenLIst.push(" </td>");
    buMenLIst.push("</tr>");

    $("#body").html(buMenLIst.join(''));
    $('#xinZengModal').modal('hide')

    $("#minCheninput").val("");
    $("#fuZeReninput").val("");
    $("#lianxiPoneinput").val("");
    $("#buMenMiaoShu").val("");
    $("#renShuinput").val("");
    $("#beiZhu").val("");
    $("#name1input").val("");
    $("#name2input").val("");
    $("#name3input").val("");
    $("#phone1input").val("");
    $("#phone2input").val("");
    $("#phone3input").val("");
})


$("#body").on("click", ".btn", function(e) {

    let $elem = $(e.target);
    Id = $elem.data("id");
    // let name = $elem.text();
    // console.log($elem[0])
    // console.log(Id)
    // alert(Id);
    cha(Id)
    gai(Id)
    let name = $elem.text();
    // console.log(name)
})



//查看模块
function cha(Id) {
    // for (var i = 0; i < buMenGuanLI.length; i++) {
    // var chaKan = buMenGuanLI[i];

    // $("#chaKanModal").modal("show");

    var student1 = buMenGuanLI.filter(x => x.xiangMunumber == Id)[0]
    console.log(student1.xiangMunumber);
    // console.log("11");
    $("#bianHaoinput1").val(student1.xiangMunumber);
    $("#fuZeReninput1").val(student1.fuZeRenname);
    $("#lianxiPoneinput1").val(student1.lianXIDianHua);
    $("#minCheninput1").val(student1.buMenNanme);
    $("#buMenMiaoShu1").val(student1.buMenMiaoShu);
    $("#renShuinput1").val(student1.buMenRenShu);
    $("#beiZhu1").val(student1.beiZhu);
    $("#name1input1").val(student1.name1);
    $("#name2input1").val(student1.name2);
    $("#name3input1").val(student1.name3);
    $("#phone1input1").val(student1.phone1);
    $("#phone2input1").val(student1.phone2);
    $("#phone3input1").val(student1.phone3);
    // console.log(student.xiangMunumber)



}
//查看模块点确定关闭模态框
$("#chaKan").click(function() {
    $('#chaKanModal').modal('hide')
})


//修改模块
function gai(Id) {

    var student1 = buMenGuanLI.filter(x => x.xiangMunumber == Id)[0];

    $("#xiuGai").click(function() {
        $("#bianHaoinput2").val(student1.xiangMunumber);
        student1.fuZeRenname = $("#fuZeReninput2").val();
        student1.lianXIDianHua = $("#lianxiPoneinput2").val();
        student1.buMenNanme = $("#minCheninput2").val();
        student1.buMenMiaoShu = $("#buMenMiaoShu2").val();
        student1.buMenRenShu = $("#renShuinput2").val();
        student1.beiZhu = $("#beiZhu2").val();
        student1.name1 = $("#name1input2").val();
        student1.name2 = $("#name2input2").val();
        student1.name3 = $("#name3input2").val();
        student1.phone1 = $("#phone1input2").val();
        student1.phone2 = $("#phone2input2").val();
        student1.phone3 = $("#phone3input2").val();

        let b = 14;
        let a = parseInt((Id) - 1);
        buMenLIst.splice((a * b) + 1, 7, "<td class='td'>" + (student1.xiangMunumber) + "</td>",
            " <td class='td'>" + student1.buMenNanme + "</td>", " <td class='td'>" + student1.fuZeRenname + "</td>",
            " <td class='td'>" + student1.lianXIDianHua + "</td>", " <td class='td'>" + student1.buMenMiaoShu + "</td>",
            " <td class='td'>" + student1.buMenRenShu + "</td>", " <td class='td'>" + student1.beiZhu + "</td>")

        // console.log(a)
        $("#body").html(buMenLIst.join(''));
        $('#xiuGaiModal').modal('hide')

        // console.log(student1)
    })

}


//搜索
var a

// $("#buMen").on("change", function() {
//     var ser = $(".ser") //获取所有对象里的部门名称值

//         // console.log($("#buMen").val())

// })
$("#btnsousuo").click(function() {



    bindData();

})




$("#buMenMiaoShu").blur(function() {
    if ($(this).val() == "") {
        alert("请输入部门描述")
    }
});

$("#minCheninput").blur(function() {
    if ($(this).val() == "") {
        alert("请输入部门名称")

    }
});

//判断部门描述是否超出20字
$("#buMenMiaoShu").blur(function() {
    if ($(this).val().length > 20) {
        alert("超出20字请重新输入");
        $(this).val("")
    }
});
//判断部门名称是否超出20字
$("#minCheninput2").blur(function() {
    if ($(this).val().length > 20) {
        alert("超出20字请重新输入")
        $(this).val("")
    }
});

$("#buMenMiaoShu2").blur(function() {
    if ($(this).val() == "") {
        alert("请输入部门描述")
    }
});

$("#minCheninput2").blur(function() {
    if ($(this).val() == "") {
        alert("请输入部门名称")

    }
});

//判断部门描述是否超出20字
$("#buMenMiaoShu2").blur(function() {
    if ($(this).val().length > 20) {
        alert("超出20字请重新输入");
        $(this).val("")
    }
});
//判断部门名称是否超出20字
$("#minCheninput2").blur(function() {
    if ($(this).val().length > 20) {
        alert("超出20字请重新输入")
        $(this).val("")
    }
});


//删除判断部门下是否有员工
function del(obj) {
    // console.log($(obj).parent().parent().children(".renShu").html())
    if ($(obj).parent().parent().children(".renShu").html() != 0) {
        alert("该部门下还有人员，不能删除！")
    } else {
        var bool = confirm("是否删除这行");
        if (bool) {
            $(obj).parent().parent().remove()
        }

    }
}
// setInterval(bh, 1000)

function bh() {
    var k = buMenGuanLI.length + 1
        // console.log(k)
    $("#bianHaoinput").val(k++);

}