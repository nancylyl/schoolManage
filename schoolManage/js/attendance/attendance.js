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
        let Duty = $("#SearchGrade").val();
        let attendance = $("#SearchState").val();
        if (name != "" && name != undefined) {
            newStaffList = newStaffList.filter(item => item.Name == name || item.Id == name );
        }
        if (DepName != 0) {
            newStaffList = newStaffList.filter(item => item.DepName == DepName);
        }
        if (Duty != 0) {
            newStaffList = newStaffList.filter(item => item.Duty == Duty);
        }
        if (attendance != 0) {
            newStaffList = newStaffList.filter(item => item.attendance == attendance);
        }
        let StaffList = [];
        for (var item = 0; item < newStaffList.length; item++) {
            // StuList.push(" <tr class='" + getClass(item) + "'>");
            var staff = newStaffList[item];
            StaffList.push(" <tr>");
            StaffList.push(" <td>" + (item+1) + "</td>");
            StaffList.push(" <td>" + staff.Id + "</td>");
            StaffList.push(" <td>" + staff.Name + "</td>");
            StaffList.push(" <td>" + staff.arrive + "</td>");
            StaffList.push(" <td>" + staff.LeaveSchool + "</td>");
            if (staff.attendance == "迟到" || staff.attendance == "早退" || staff.attendance == "缺勤") {
                StaffList.push(" <td style='color: red'>" + staff.attendance + "</td>");
            } else
                StaffList.push(" <td>" + staff.attendance + "</td>");
            StaffList.push(" <td>" + staff.DepName + "</td>");
            StaffList.push(" <td>" + staff.Duty + "</td>");
            StaffList.push(" <td>" + staff.Grade + "</td>");
            StaffList.push(" <td>" + staff.Tel + "</td>");
            StaffList.push(" <td>");
            StaffList.push("<button type='button' class='btn btn-xs btn-primary' data-ID='" + staff.Id + "'>查看员工详情</button>");
            StaffList.push(" </td>");
            StaffList.push("</tr>");
        }

        $("#tb-student").html(StaffList.join(''));
    }
    /* 绑定下拉列表 */
    function bindSelect() {
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

    /* 表单验证*/
    $("#addStudentForm").bootstrapValidator({

    });

    /* 查询 */
    $("#btnSearch").on("click", function() {
        renderTable();
    })
    $("#SearchName").on("change", function() {
        renderTable();
    })
    /* 所属部门*/
    $("#SearchDepName").on("change", function() {
        renderTable();
    })
    /* 员工职位 */
    $("#SearchGrade").on("change", function() {
        renderTable();
    })
    /* 员工出勤状态 */
    $("#SearchState").on("change", function() {
        renderTable();
    });

    function resetForm(flag) {
        $("#addStudentForm").data('bootstrapValidator').resetForm(flag);
    }

    /* 操作列表 */
    $("#tb-student").on("click", ".btn", function(e) {
        let $elem = $(e.target);
        Id = $elem.data("id");
        let name = $elem.text();
        if (name == "查看员工详情") {
            checkStudent(Id);
            resetForm();
            $('#checkStudent').modal('show');
        }
    })
    /*$(document).keyup(function(event) {
        // console.log(event);

        renderTable();

    });*/
    /*查看功能赋值函数*/
    function checkStudent(Id) {
        let staff = AllStaffList.filter(x => x.Id == Id)[0];
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