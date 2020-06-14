$(function() {
    init();
    let Id = 0;

    function init() {
        renderTable();
        bindSelect();
    };

    //初始加载数据
    function renderTable() {
        $("#tb-student").html("");
        let newStaffList = AllStaffList;
        let name = $("#SearchName").val();
        let DepName = $("#SearchDepName").val();
        let Grade = $("#SearchGrade").val();
        let State = $("#SearchState").val();
        let newobj = [];
        if (name != "" && name != undefined) {
            newStaffList = newStaffList.filter(item => item.Name == name || item.Id == name );
        }
        if (DepName != 0) {
            newStaffList = newStaffList.filter(item => item.DepName == DepName);
        }
        if (Grade != 0) {
            newStaffList = newStaffList.filter(item => item.Grade == Grade);
        }
        if (State != 0) {
            newStaffList = newStaffList.filter(item => item.State == State);
        }
        let StaffList = [];
        for (var item = 0; item < newStaffList.length; item++) {
            // StuList.push(" <tr class='" + getClass(item) + "'>");
            var staff = newStaffList[item];
            StaffList.push(" <tr>");
            StaffList.push(" <td>" + (item+1) + "</td>");
            StaffList.push(" <td>" + staff.Id + "</td>");
            StaffList.push(" <td>" + staff.Name + "</td>");
            StaffList.push(" <td>" + staff.Age + "</td>");
            StaffList.push(" <td>" + staff.Sex + "</td>");
            StaffList.push(" <td>" + staff.DepName + "</td>");
            StaffList.push(" <td>" + staff.Duty + "</td>");
            StaffList.push(" <td>" + staff.Grade + "</td>");
            StaffList.push(" <td>" + staff.Tel + "</td>");
            StaffList.push(" <td>" + staff.State + "</td>");
            StaffList.push(" <td>");
            StaffList.push("<button type='button' class='btn btn-xs btn-primary' data-ID='" + staff.Id + "'>查看</button>");
            StaffList.push(" <button type='button' class='btn btn-xs btn-primary' data-ID='" + staff.Id + "'>编辑</button>");
            StaffList.push(" <button type='button' class='btn btn-xs btn-primary' data-ID='" + staff.Id + "'>重置密码</button>");
            StaffList.push(" <button type='button' class='btn btn-xs btn-danger' data-ID='" + staff.Id + "'>删除</button>");
            StaffList.push(" </td>");
            StaffList.push("</tr>");
        }
        $("#tb-student").html(StaffList.join(''));
    }
    /* 绑定下拉列表 */
    function bindSelect() {
        /* 查询 */
        //绑定班级
        /*$("#SearchGrade").html(bindOption(ClasGradeList));
        $("#SearchGrade").on("change", function() {
            var gradeName = $(this).val();
            SearchGradeChange(gradeName)
        });
        /!* 表单 *!/
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
        });*/

    }
    //班级选择事件
    function SearchGradeChange(gradeName) {
        var newGradeChangeList = [];
        ClassTypeList.map(function(item) {
            if (item.ClassGradeName == gradeName) {
                newGradeChangeList.push(item);
            }
        })
        $("#SearchClassTypeName").html(bindOption(newClassTypeList));

    }
    /*部门选择事件*/
    function SearchDepNameChange(newDepName) {
        var newClassTypeList = [];
        ClassTypeList.map(function(item) {
            if (item.ClassGradeName == gradeName) {
                newClassTypeList.push(item);
            }
        })
        $("#SearchClassTypeName").html(bindOption(newClassTypeList));

    }

    /* 表单验证 搞定*/
    $("#addStudentForm").bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok form-control-feedback',
            invalid: 'glyphicon glyphicon-remove'
        },
        fields: {
            Id: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '编号不能为空'
                    },
                    regexp: {
                        regexp: /^\d{3}$/,
                        message: '请输入正确的三位数编号'
                    },
                }
            },
            Name: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '名不能为空'
                    }
                }
            },
            Age: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '年龄不能为空'
                    },
                    regexp: {
                        regexp: /^\d{2}$/,
                        message: '请输入正确的2位数年龄'
                    },
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
            DepName: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '请选择所属部门'
                    },
                    callback: {
                        message: '请选择所属部门',
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
            Duty: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '请选择所在职位'
                    },
                    callback: {
                        message: '请选择所在职位',
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
            Grade: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '请选择管理班级'
                    },
                    callback: {
                        message: '请选择管理班级',
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
            Tel: {
                validators: {
                    notEmpty: {
                        message: '请输入手机号'
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
            EContact: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '名不能为空'
                    }
                }
            },
            ETel: {
                validators: {
                    notEmpty: {
                        message: '请输入手机号'
                    },
                    regexp: {
                        regexp: /^[1][3,4,5,7,8][0-9]{9}$/,
                        message: '请输入正确的手机号'
                    },
                }
            },
            PassWord: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    regexp: {
                        regexp: /^\d{6}$/,
                        message: '请输入正确的6位数密码'
                    },
                }
            },
            State: {
                // message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '请选择状态'
                    },
                    callback: {
                        message: '请选择状态',
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
            let count = AllStaffList.filter(item => (
                    item.Tel == result.Tel ||
                    item.ETel == result.ETel
                ) &&
                item.Id != Id
            ).length;
            if (count.length > 0) {
                alert("此手机号已经存在,请重新填写");
            }
            if (Id == 0) {
                //添加
                let idstr = AllStaffList[AllStaffList.length - 1].Id
                let newid = '0' + (parseInt(idstr) + 1)
                result["Id"] = newid; //取最大ID+1
                AllStaffList.push(result);
            } else {
                //修改
                AllStaffList.forEach(function(item) {
                    if (item.Id == Id) {
                        item.Name = result.Name;
                        item.Age = result.Age;
                        item.Sex = result.Sex;
                        item.Birthday = result.Birthday;
                        item.DepName = result.DepName;
                        item.Duty = result.Duty;
                        item.Grade = result.Grade;
                        item.Tel = result.Tel;
                        item.Email = result.Email;
                        item.Addr = result.Addr;
                        item.EContact = result.EContact;
                        item.ETel = result.ETel;
                        item.PassWord = result.PassWord;
                        item.State = result.State;
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
    $("#SearchName").on("change", function() {
        renderTable();
    })
    /*  部门*/
    $("#SearchDepName").on("change", function() {
        renderTable();
    })
    /* 班级名称 */
    $("#SearchGrade").on("change", function() {
        renderTable();
    })
    /* 员工当前状态 */
    $("#SearchState").on("change", function() {
        renderTable();
    });


    /*$(document).keyup(function(event) {
        // console.log(event);

        renderTable();

    });*/

    function showMsg(msg = '操作成功！') {
        bootoast.toast({
            message: msg,
            type: 'success',
            timeoutProgress: 200,
            animationDuration: 300,
            // dismissible: true
        });
    }
    function showdangerMsg(msg = '不能删除自己！') {
        bootoast.toast({
            message: msg,
            type: 'danger',
            timeoutProgress: 200,
            animationDuration: 300,
            // dismissible: true
        });
    }

    function resetForm(flag) {
        $("#addStudentForm").data('bootstrapValidator').resetForm(flag);
    }

    /* 操作列表 */
    $("#tb-student").on("click", ".btn", function(e) {
        let $elem = $(e.target);
        Id = $elem.data("id");
        let name = $elem.text();
        if (name == "编辑") {
            setBind(Id);
            resetForm();
            $('#editStudent').modal('show');

        } else if (name == "重置密码") {
            $.confirm({
                text: "您确定要" + name + "吗?",
                confirmButton: "确定",
                cancelButton: "取消",
                confirm: function() {
                    /*点击重置密码后会将123456赋值给Password*/
                    AllStaffList.find(function(item) {
                        if (item.Id == Id) {
                            item.PassWord = "123456";
                            showMsg();
                            renderTable();
                            return true
                        }
                    })

                },
                dialogClass: 'confirm-dialog'
            });
        }/*{
            var staff = AllStaffList.filter(x => x.Id == Id)[0];
            let Passw = staff.PassWord;
            $("input[name='Changepassword']").val(Passw);
            SearchGradeChange(Passw);
            $("input[name='Newpassword']").val(staff.PassWord);
            $('#editClass').modal('show');
            /!*setBind(Id);
            $('#editClass').modal('show');*!/
        }*/ else if (name == "查看") {
            checkStudent(Id);
            resetForm();
            $('#checkStudent').modal('show');
        } else {
            $.confirm({
                text: "您确定要" + name + "吗?",
                confirmButton: "确定",
                cancelButton: "取消",
                confirm: function() {
                    /*点击删除后会将name删除赋值给State*/
                    AllStaffList.find(function(item) {
                        if (item.Id == Id) {
                            /*判断是否在删除当前Id*/
                            if(getSessionStorage().Id == item.Id)
                            {
                                showdangerMsg();
                                return;
                            }
                            item.State = name;
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
        let staff = AllStaffList.filter(x => x.Id == Id)[0];
        let Grade = staff.Grade;
        $("input[name='Id']").val(staff.Id);
        $("input[name='Name']").val(staff.Name);
        // $("input[name='Sex']").attr("checked", false);
        $("input[name='Age']").val(staff.Age);
        $("input[name='Sex'][value='" + staff.Sex + "']").attr("checked", true);
        $("input[name='Birthday']").val(staff.Birthday);
        $("select[name='DepName']").val(staff.DepName);
        /*SearchGradeChange(Grade);*/
        // setTimeout(function() {
        $("select[name='Duty']").val(staff.Duty);
        $("select[name='Grade']").val(staff.Grade);
        $("input[name='Tel").val(staff.Tel);
        $("input[name='Email']").val(staff.Email);
        $("input[name='Addr']").val(staff.Addr);
        $("input[name='EContact']").val(staff.EContact);
        $("input[name='ETel']").val(staff.ETel);
        $("input[name='PassWord']").val(staff.PassWord);
        $("select[name='State']").val(staff.State);
    }
    /*查看功能赋值函数*/
    function checkStudent(Id) {
        let staff = AllStaffList.filter(x => x.Id == Id)[0];
        let Grade = staff.Grade;
        $("input[name='Id']").val(staff.Id);
        $("input[name='Name']").val(staff.Name);
        $("input[name='Age']").val(staff.Age);
        $("input[name='Sex']").val(staff.Sex);
        $("input[name='Birthday']").val(staff.Birthday);
        $("input[name='DepName']").val(staff.DepName);
        $("input[name='Duty']").val(staff.Duty);
        $("input[name='Grade']").val(staff.Grade);
        $("input[name='Tel").val(staff.Tel);
        $("input[name='Email']").val(staff.Email);
        $("input[name='Addr']").val(staff.Addr);
        $("input[name='EContact']").val(staff.EContact);
        $("input[name='ETel']").val(staff.ETel);
        $("input[name='PassWord']").val(staff.PassWord);
        $("input[name='State']").val(staff.State);
    }
    $("#addStudentBtn").click(function(e) {
        resetForm(true);
        $("#editStudent").modal('show');
    })
});


