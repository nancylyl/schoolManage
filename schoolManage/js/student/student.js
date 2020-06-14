$(function() {
    init();
    let Id = 0;
    let StuName;

    function init() {
        renderTable();
        bindSelect();

        /* 是否有导出权限 export */
        if (getSessionStorage().role == "0") {
            $("#export").removeClass("hide");
        } else {
            $("#export").addClass("hide");
        }
    };

    //初始加载数据
    function renderTable() {
        $("#tb-student").html("");
        let newStudentList = AllStudentList;
        let name = $.trim($("#searchName").val());
        let classTypeName = $("#SearchClassTypeName").val();
        let grade = $("#SearchGrade").val();
        let SearchStateName = $("#SearchStateName").val();
        if (name != "" && name != undefined) {
            newStudentList = newStudentList.filter(item => item.Name.trim().indexOf(name) != -1);
        }
        if (grade != 0) {
            newStudentList = newStudentList.filter(item => item.Grade == grade);
        }
        if (classTypeName != 0) {
            newStudentList = newStudentList.filter(item => item.ClassTypeName == classTypeName);
        }
        if (SearchStateName != 0) {
            newStudentList = newStudentList.filter(item => item.StateName == SearchStateName);
        }
        var StuList = [];
        for (var item = 0; item < newStudentList.length; item++) {
            // StuList.push(" <tr class='" + getClass(item) + "'>");
            var student = newStudentList[item];
            var arrive = student.Arrive;
            var StateName = student.StateName;
            StuList.push(" <tr>");
            StuList.push(" <td>" + (item + 1) + "</td>");
            StuList.push(" <td>" + student.Name + "</td>");
            StuList.push(" <td>" + student.Sex + "</td>");
            StuList.push(" <td>" + student.Birthday + "</td>");
            StuList.push(" <td>" + student.Grade + "</td>");
            StuList.push(" <td>" + student.ClassTypeName + "</td>");
            StuList.push(" <td>" + student.LinkName1 + "</td>");
            StuList.push(" <td>" + student.Tel1 + "</td>");
            StuList.push(" <td>" + (arrive ? arrive : '--') + "</td>");
            StuList.push(" <td>" + StateName + "</td>");
            StuList.push(" <td>");
            // StuList.push(" <div class='exit-btn'>");
            if (StateName == "正常") {
                StuList.push("<button type='button' class='btn btn-xs btn-primary' data-ID='" + student.Id + "'>编辑</button>");
                StuList.push(" <button type='button' class='btn btn-xs btn-primary' data-ID='" + student.Id + "'  data-Name='" + student.Name + "'>转班</button>");
                StuList.push(" <button type='button' class='btn btn-xs btn-primary' data-ID='" + student.Id + "'>退学</button>");
                StuList.push(" <button type='button' class='btn btn-xs btn-primary' data-ID='" + student.Id + "'>详情</button>");
                StuList.push(" <button type='button' class='btn btn-xs btn-danger' data-ID='" + student.Id + "'>删除</button>");
            } else {
                StuList.push(" <button type='button' class='btn btn-xs btn-primary' data-ID='" + student.Id + "'>详情</button>");
            }
            // StuList.push(" </div>");
            StuList.push(" </td>");
            StuList.push("</tr>");
        }
        $("#tb-student").html(StuList.join(''));



    }
    /* 绑定下拉列表 */
    function bindSelect() {
        /* 查询 */
        //绑定班级
        $("#SearchGrade").html(bindOption(ClasGradeList));
        $("#SearchGrade").on("change", function() {
            var gradeName = $(this).val();
            SearchGradeChange(gradeName)
        });
        /* 表单 */
        //绑定班级
        $("#Grade").html(bindOption(ClasGradeList));
        //班级选择时间
        $("#Grade").on("change", function() {
            var gradeName = $(this).val();
            var newClassTypeList = [];
            ClassTypeList.map(function(item) {
                if (item.ClassGradeName == gradeName) {
                    newClassTypeList.push(item);
                }
            })
            $("#ClassTypeName").html(bindOption(newClassTypeList));
        });

        /* 转班表单 */
        //绑定班级
        $("#ChangeGrade").html(bindOption(ClasGradeList));
        //班级选择时间
        $("#ChangeGrade").on("change", function() {
            var gradeName = $(this).val();
            var newClassTypeList = [];
            ClassTypeList.map(function(item) {
                if (item.ClassGradeName == gradeName) {
                    newClassTypeList.push(item);
                }
            })
            $("#ChangeClassTypeName").html(bindOption(newClassTypeList));
        });

    }
    //班级选择时间
    function SearchGradeChange(gradeName) {
        var newClassTypeList = [];
        ClassTypeList.map(function(item) {
            if (item.ClassGradeName == gradeName) {
                newClassTypeList.push(item);
            }
        })
        $("#SearchClassTypeName").html(bindOption(newClassTypeList));
        $("#ClassTypeName").html(bindOption(newClassTypeList));
        $("#ChangeClassTypeName").html(bindOption(newClassTypeList));
    }

    /* 表单验证 */
    $("#addStudentForm").bootstrapValidator({　　　　　　　　
        message: 'This value is not valid',
        　feedbackIcons: {
            valid: 'glyphicon glyphicon-ok form-control-feedback',
            invalid: 'glyphicon glyphicon-remove'
        },
        fields: {
            Name: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '名不能为空'
                    }
                }
            },
            Grade: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '请选择所属班级'
                    },
                    callback: {
                        message: '请选择所属班级',
                        callback: function(value, validator) {
                            //这里可以自定义value的判断规则
                            if (value == 0) { //"请选择"
                                //错误的参数值
                                return false;
                            } else {
                                //合格的参数值
                                return true;
                            }
                        }
                    }
                }
            },
            ClassTypeName: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '请选择班级名称'
                    },
                    callback: {
                        message: '请选择班级名称',
                        callback: function(value, validator) {
                            //这里可以自定义value的判断规则
                            if (value == 0) { //"请选择"
                                //错误的参数值
                                return false;
                            } else {
                                //合格的参数值
                                return true;
                            }
                        }
                    }
                }
            },
            Birthday: {
                // message: '用户名验证失败',
                validators: {
                    date: {
                        format: 'YYYY/MM/DD',
                        message: '出生年月输入错误'
                    },
                    notEmpty: {
                        message: '出生年月不能为空'
                    }
                }
            },
            LinkName1: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '紧急联系人不能为空'
                    }
                }
            },

            Tel1: {
                validators: {
                    notEmpty: {
                        message: '请输入联系人手机号'
                    },
                    regexp: {
                        regexp: /^[1][3,4,5,7,8][0-9]{9}$/,
                        message: '请输入正确的手机号'
                    },
                }
            },
            Email: {

                validators: {
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                    emailAddress: {
                        message: '请输入正确的邮箱地址'
                    }
                }
            },

        }


    });

    /* 表单提交 */
    $("#btnAddStudent").on("click", function() {

            var bootstrapValidator = $("#addStudentForm").data('bootstrapValidator'); //form表单验证
            bootstrapValidator.validate(); //开始验证
            if (bootstrapValidator.isValid()) {
                let result = {};
                $("#addStudentForm").serializeArray().forEach(item => {
                    result[item.name] = item.value;
                });
                /* 判断手机号是否存在 */
                let count = AllStudentList.filter(item => (
                        item.Tel1 == result.Tel1 ||
                        item.Tel1 == result.Tel2 ||
                        item.Tel2 == result.Tel1 ||
                        item.Tel2 == result.Tel2
                    ) &&
                    item.Id != Id
                ).length;
                if (count.length > 0) {
                    alert("此手机号已经存在,请重新填写");
                }
                if (Id == 0) {
                    //添加
                    result["StateName"] = "正常";
                    result["Attendance"] = "正常";
                    result["Arrive"] = "";
                    result["Id"] = AllStudentList[AllStudentList.length - 1].Id + 1; //取最大ID+1
                    AllStudentList.push(result);
                } else {
                    //修改
                    AllStudentList.find(function(item) {
                        if (item.Id == Id) {
                            item.Name = result.Name;
                            item.Sex = result.Sex;
                            item.Grade = result.Grade;
                            item.ClassTypeName = result.ClassTypeName;
                            item.Birthday = result.Birthday;
                            item.Email = result.Email;
                            item.LinkName1 = result.LinkName1;
                            item.Tel1 = result.Tel1;
                            item.Relation1 = result.Relation1;
                            item.LinkName2 = result.LinkName2;
                            item.Tel2 = result.Tel2;
                            item.Relation2 = result.Relation2;
                            item.StuNO = result.StuNO;
                            item.Address = result.Addresss;

                        }
                    })
                }
                Id = 0;
                $('#addStudentForm')[0].reset();
                $('#editStudent').modal('hide')
                renderTable();
            }
        })
        /* 查询 */
    $("#btnSearch").on("click", function() {
        renderTable();
    })

    $("#fitlerForm").on('change', '#SearchGrade,#SearchClassTypeName,#SearchStateName,#searchName', function() {

        renderTable();
    });

    /*转班表单验证 */
    $("#ChangeClassForm").bootstrapValidator({　　　　　　　　
        message: 'This value is not valid',
        　feedbackIcons: {
            valid: 'glyphicon glyphicon-ok form-control-feedback',
            invalid: 'glyphicon glyphicon-remove'
        },
        fields: {

            ChangeGrade: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '请选择班级'
                    },
                    callback: {
                        message: '请选择班级',
                        callback: function(value, validator) {
                            //这里可以自定义value的判断规则
                            if (value == 0) { //"请选择"
                                //错误的参数值
                                return false;
                            } else {
                                //合格的参数值
                                return true;
                            }
                        }
                    }
                }
            },
            ChangeClassTypeName: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '请选择班级名称'
                    },
                    callback: {
                        message: '请选择班级名称',
                        callback: function(value, validator) {
                            //这里可以自定义value的判断规则
                            if (value == 0) { //"请选择"
                                //错误的参数值
                                return false;
                            } else {
                                //合格的参数值
                                return true;
                            }
                        }
                    }
                }
            }
        }
    });
    /* 转班 */
    $("#btnChangeClass").on("click", function() {
        if (Id == "") {
            showMsg("请选择要修改的人！");
            return;
        }
        var bootstrapValidator = $("#ChangeClassForm").data('bootstrapValidator'); //form表单验证
        bootstrapValidator.validate(); //开始验证
        if (bootstrapValidator.isValid()) {
            let result = {};
            //序列化当前文本框的值为对象
            $("#ChangeClassForm").serializeArray().find(item => {
                result[item.name] = item.value;
            });
            AllStudentList.find(function(item) {
                if (item.Id == Id) {
                    item.ClassTypeName = result.ChangeClassTypeName;
                    item.Grade = result.ChangeGrade;

                    $('#changeClass').modal('hide');
                }
            })
            showMsg();
            renderTable();
        }

    });


    function resetForm(flag) {
        $("#addStudentForm").data('bootstrapValidator').resetForm(flag);
    }

    /* 操作列表 */
    $("#tb-student").on("click", ".btn", function(e) {

            let $elem = $(e.target);
            Id = $elem.data("id");
            let name = $elem.text();
            if (name == "编辑") {
                $('#btnAddStudent').show();
                setBind(Id);
                resetForm();
                $('#addStudentForm').find('input').removeAttr("disabled");
                $('#addStudentForm').find('select').removeAttr("disabled");
                $('#addStudentForm').find('textarea').removeAttr("disabled");
                $('#btnAddStudent').show();
                $("#editTile").html("修改学生");
                $('#editStudent').modal('show');

            } else if (name == "详情") {
                setBind(Id);
                $("#editTile").html("学生详情");
                resetForm();
                $('#editStudent').modal('show');
                // attr("disabled","disabled");
                $('#addStudentForm').find('input').attr("disabled", "disabled");
                $('#addStudentForm').find('select').attr("disabled", "disabled");
                $('#addStudentForm').find('textarea').attr("disabled", "disabled");
                $('#btnAddStudent').hide();


            } else if (name == "转班") {
                StuName = $elem.data("name");

                $(".changeClass").text(StuName + "需要");
                var student = AllStudentList.filter(x => x.Id == Id)[0];
                let Grade = student.Grade;
                $("select[name='ChangeGrade']").val(Grade);
                SearchGradeChange(Grade);
                console.log(student.ClassTypeName);
                $("select[name='ChangeClassTypeName']").val(student.ClassTypeName);
                $('#changeClass').modal('show');

            } else {
                $.confirm({
                    text: "您确定要" + name + "吗?",
                    confirmButton: "确定",
                    cancelButton: "取消",
                    confirm: function() {
                        AllStudentList.find(function(item) {
                            if (item.Id == Id) {
                                item.StateName = name;
                                showMsg();
                                renderTable();
                                return true
                            }
                        })

                    },
                    dialogClass: 'confirm-dialog'
                });
            }
        })
        /* 页面赋值 */
    function setBind(Id) {
        var student = AllStudentList.filter(x => x.Id == Id)[0];
        let Grade = student.Grade;
        $("input[name='Name']").val(student.Name);
        // $("input[name='Sex']").attr("checked", false);
        $("input[name='Sex'][value='" + student.Sex + "']").attr("checked", true);
        $("select[name='Grade']").val(Grade);
        SearchGradeChange(Grade);
        $("select[name='ClassTypeName']").val(student.ClassTypeName);
        $("input[name='Birthday']").val(student.Birthday);
        $("input[name='Email']").val(student.Email);
        $("input[name='LinkName1']").val(student.LinkName1);
        $("input[name='Tel1']").val(student.Tel1);
        $("select[name='Relation1']").val(student.Relation1);
        $("input[name='LinkName2']").val(student.LinkName2);
        $("input[name='Tel2']").val(student.Tel2);
        $("select[name='Relation2']").val(student.Relation2);
        $("input[name='StuNO']").val(student.StuNO);
        $("textarea[name='Address']").text(student.Address);
    }

    $("#addStudentBtn").click(function(e) {
        resetForm(true);
        $("#editTile").html("新增学生");
        $("#editStudent").modal('show');
        $('#addStudentForm').find('input').removeAttr("disabled");
        $('#addStudentForm').find('select').removeAttr("disabled");
        $('#addStudentForm').find('textarea').removeAttr("disabled");
        $('#btnAddStudent').show();
    });
    $("#export").click(function() {
        //标题
        let obj = [];
        obj.push("<th>姓名</th>");
        obj.push("<th>性别</th>");
        obj.push("<th>出生日期</th>");
        obj.push("<th>所属班级</th>");
        obj.push("<th>班级名称</th>");
        obj.push("<th>紧急联系人</th>");
        obj.push("<th>紧急联系电话</th>");
        obj.push("<th>到校时间</th>");
        obj.push("<th>状态</th>");
        var exportList = [];

        //所有学生中你要导出哪些字段
        AllStudentList.forEach(function(item) {
            var objList = {};
            objList["Name"] = item.Name;
            objList["Sex"] = item.Sex;
            objList["Birthday"] = item.Birthday;
            objList["Grade"] = item.Grade;
            objList["ClassTypeName"] = item.ClassTypeName;
            objList["LinkName1"] = item.LinkName1;
            objList["Tel1"] = item.Tel1;
            objList["Arrive"] = item.Arrive;
            objList["StateName"] = item.StateName;
            exportList.push(objList);
        })
        tableToExcel(exportList, obj.join(""), "学生信息")
    })

})