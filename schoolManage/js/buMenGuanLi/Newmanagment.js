$(function() {

    let Id = 0;
    init();

    function init() {
        bindData();
    }
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
            buMenLIst.push(" <tr class=\"\" data-vlue='student.xiangMunumber'>");
            buMenLIst.push(" <td class='td'>" + (student.xiangMunumber) + "</td>");
            buMenLIst.push(" <td class='td ser'>" + student.buMenNanme + "</td>");
            buMenLIst.push(" <td class='td'>" + student.fuZeRenname + "</td>");
            buMenLIst.push(" <td class='td'>" + student.lianXIDianHua + "</td>");
            buMenLIst.push(" <td class='td'>" + student.buMenMiaoShu + "</td>");
            buMenLIst.push(" <td  class='renShu td'>" + student.buMenRenShu + "</td>");
            buMenLIst.push(" <td class='td'>" + student.beiZhu + "</td>");
            buMenLIst.push(" <td>");

            buMenLIst.push("<button type='button' class='btn btn-xs btn-primary' data-ID='" + student.xiangMunumber + "' >编辑</button>");
            buMenLIst.push(" <button type='button' class='btn btn-xs btn-primary' data-ID='" + student.xiangMunumber + "'   >查看</button>");
            buMenLIst.push(" <button type='button' class='btn btn-xs btn-danger' data-ID='" + student.xiangMunumber + "' >删除</button>");
            buMenLIst.push(" </td>");
            buMenLIst.push("</tr>");

        }
        //表格样式
        $("#body").html(buMenLIst.join(''));
        var a=2
        for (let h=0;h<buMenGuanLI.length;h++){

            if (h%a==0){
                $("#body").find("tr")[h].setAttribute("class","active")
                console.log(h)
            }
        }


    }

    $("#addBM").click(function(e) {

        resetForm(true);
        $('#formBM').find('input').removeAttr("disabled");
        $('#formBM').find('select').removeAttr("disabled");
        $('#formBM').find('textarea').removeAttr("disabled");
        $("#editTile").html("新增部门");
        $("#editBM").modal('show');

    });

    /* 操作菜单绑定 */
    $("#body").on("click", ".btn", function(e) {

        let $elem = $(e.target);
        Id = $elem.data("id");
        let name = $elem.text();

        if (name == "编辑") {
            $('#editBM').modal('show');
            setBind(Id);
            resetForm();
            $("#editTile").html("编辑部门");





        } else if (name == "查看") {
            setBind(Id);
            $("#editTile").html("部门详情");
            resetForm();
            $('#editBM').modal('show');
            console.log($('#addStudentForm').find('input'));
            // attr("disabled","disabled");
            $('#formBM').find('input').attr("disabled", "disabled");
            $('#formBM').find('select').attr("disabled", "disabled");
            // $('#formBm').find('textarea').attr("disabled", "disabled");
            $('#btnAddxinZeng').hide();


        } else {
            setBind(Id)
            console.log($("#renShuinput").val())
            if ($("#renShuinput").val()!=0){
                alert("人数不为0不能删除")
            }
            else {
                $.confirm({
                    text: "您确定要" + name + "吗?",
                    confirmButton: "确定",
                    cancelButton: "取消",
                    confirm: function() {
                        buMenGuanLI.find(function(item, i) {
                            console.log(item, i);
                            if (item.xiangMunumber == Id) {
                                buMenGuanLI.splice(i, 1)
                                showMsg();
                                bindData();
                                return true
                            }
                        })

                    },
                    dialogClass: 'confirm-dialog'
                });

            }

        }
    })

    function setBind(Id) {

        var student1 = buMenGuanLI.filter(x => x.xiangMunumber == Id)[0]

        console.log(student1.xiangMunumber);
        // console.log("11");
        $("#bianHaoinput").val(student1.xiangMunumber);
        $("#fuZeReninput").val(student1.fuZeRenname);
        $("#lianxiPoneinput").val(student1.lianXIDianHua);
        $("#minCheninput").val(student1.buMenNanme);
        $("#buMenMiaoShu").val(student1.buMenMiaoShu);
        $("#renShuinput").val(student1.buMenRenShu);
        $("#beiZhu").val(student1.beiZhu);
        $("#name1input").val(student1.name1);
        $("#name2input").val(student1.name2);
        $("#name3input").val(student1.name3);
        $("#phone1input").val(student1.phone1);
        $("#phone2input").val(student1.phone2);
        $("#phone3input").val(student1.phone3);
        // console.log(student.xiangMunumber)
    }
    /* 查询 */
    $("#btnsousuo").click(function() {

            bindData();

        })
        /* 表单验证 */
    $("#formBM").bootstrapValidator({　　　　　　　　
        message: 'This value is not valid',
        　feedbackIcons: {
            valid: 'glyphicon glyphicon-ok form-control-feedback',
            invalid: 'glyphicon glyphicon-remove'
        },
        fields: {
            buMenNanme: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '部门名称不能为空'
                    }
                }
            },
            fuZeRenname: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '部门负责人不能为空'
                    }
                }
            },
            lianXIDianHua:{
                // message: '用户名验证失败',
                validators:{
                    notEmpty:{
                        message:'联系电话不能为空'
                    }
                }
            },
            buMenMiaoShu:{
                // message: '用户名验证失败',
                validators:{
                    notEmpty:{
                        message:'部门描述不能为空'
                    }
                }

            },
            buMenRenShu:{
                // message: '用户名验证失败',
                validators:{
                    notEmpty:{
                        message:'部门人数不能为空'
                    }
                }
            },
            beiZhu:{
                // message: '用户名验证失败',
                validators:{
                    notEmpty:{
                        message:'备注不能为空'
                    }
                }
            },
            name1:{
                // message: '用户名验证失败',
                validators:{
                    notEmpty:{
                        message:'成员姓名不能为空'
                    }
                }
            },
            phone1:{
                // message: '用户名验证失败',
                validators:{
                    notEmpty:{
                        message:'电话不能为空'
                    }
                }
            },
        }


    });

    function resetForm(flag) {
        $("#formBM").data('bootstrapValidator').resetForm(flag);;
    }
    $("#btnAddxinZeng").click(function() {
        let result = {};
        $("#formBM").serializeArray().forEach(item => {
            result[item.name] = item.value;
        });
        if (Id == 0) {
            result["xiangMunumber"] = parseInt(buMenGuanLI[buMenGuanLI.length - 1].xiangMunumber) + 1; //取最大ID+1
            buMenGuanLI.push(result);
        } else {
            //修改
            buMenGuanLI.find(function(item) {
                if (item.xiangMunumber == Id) {
                    item.buMenNanme = result.buMenNanme;
                    item.fuZeRenname = result.fuZeRenname;
                    item.lianXIDianHua = result.lianXIDianHua;
                    item.buMenMiaoShu = result.buMenMiaoShu;
                    item.buMenRenShu = result.buMenRenShu;
                    item.beiZhu = result.beiZhu;
                    item.name1 = result.name1;
                    item.name2 = result.name2;
                    item.name3 = result.name3;
                    item.phone1 = result.phone1;
                    item.phone2 = result.phone2;
                    item.phone3 = result.phone3;
                }
            })
        }
        Id = 0;
        $('#editBM').modal('hide');
        $('#formBM')[0].reset();
        bindData();


    })


})

$("#minCheninput").blur(function () {
        if ($(this).val().length>20){
            alert("请输入20字以内的名称")
            $(this).val("")
        }


});
$("#buMenMiaoShu").blur(function () {
    if ($(this).val().length>20){
        alert("请输入20字以内的描述")
        $(this).val("")
    }
});


