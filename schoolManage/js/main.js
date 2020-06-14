$(function() {
    let objStr = localStorage.getItem("k");
    let info1 = JSON.parse(objStr);
    bindChart();
    renderTable();
    renderBulletinListTable();
    $("#studentCount").html(AllStudentList.length + "人");
    $("#employeeCount").html(AllStaffList.length + "人");

    $("#proclamationCount").html(info1.length + "条");
    $("#departentCount").html(buMenGuanLI.length + "个");


    /* 绑定图表 */
    function bindChart() {
        /* 大班 */
        let BigClassSum = AllStudentList.filter(item => item.Grade == "大班").length;
        let BigAttendanceSum = BigStudentList.filter(item => item.Attendance == "迟到").length;
        let BigNormalSum = BigClassSum - BigAttendanceSum;
        /* 中班 */
        let MidClassSum = AllStudentList.filter(item => item.Grade == "中班").length;
        let MidAttendanceSum = MidStudentList.filter(item => item.Attendance == "迟到").length;
        let MidNormalSum = MidClassSum - MidAttendanceSum;
        /* 小班 */
        let SmallClassSum = AllStudentList.filter(item => item.Grade == "小班").length;
        let SmallAttendanceSum = SmallStudentList.filter(item => item.Attendance == "迟到").length;
        let SmallNormalSum = SmallClassSum - SmallAttendanceSum;

        var doughnutDataBig = [{
            value: BigAttendanceSum,
            color: "#ef553a"
        }, {
            value: BigNormalSum,
            color: "#007BB5"
        }];
        var doughnutDataMid = [{
            value: MidAttendanceSum,
            color: "#ef553a"
        }, {
            value: MidNormalSum,
            color: "#007BB5"
        }];
        var doughnutDataSmall = [{
            value: SmallAttendanceSum,
            color: "#ef553a"
        }, {
            value: SmallNormalSum,
            color: "#007BB5"
        }];
        new Chart(document.getElementById("doughnut1").getContext("2d")).Doughnut(doughnutDataBig);
        new Chart(document.getElementById("doughnut2").getContext("2d")).Doughnut(doughnutDataMid);
        new Chart(document.getElementById("doughnut3").getContext("2d")).Doughnut(doughnutDataSmall);
        $("#bigdes").html("大班总人数：" + BigClassSum + "人；迟到：" + BigAttendanceSum + "人；出勤率：" + (BigNormalSum / BigClassSum).toFixed(2) * 100 + "%");
        $("#middes").html("大班总人数：" + MidClassSum + "人；迟到：" + MidAttendanceSum + "人；出勤率：" + (MidNormalSum / MidClassSum).toFixed(2) * 100 + "%");
        $("#smalldes").html("大班总人数：" + SmallClassSum + "人；迟到：" + SmallAttendanceSum + "人；出勤率：" + (SmallNormalSum / SmallClassSum).toFixed(2) * 100 + "%");

    }
    //初始加载学上数据
    function renderTable() {
        $("#tb-student").html("");

        let newStudentList = AllStudentList.filter(item => parseInt(item.Arrive.split(":")[0]) >= 9);
        var StuList = [];
        for (var item = 0; item < newStudentList.length; item++) {
            // StuList.push(" <tr class='" + getClass(item) + "'>");
            var student = newStudentList[item];
            var arrive = student.Arrive;
            StuList.push(" <tr>");
            StuList.push(" <td >" + (item + 1) + "</td>");
            StuList.push(" <td class='font-red'>" + (arrive ? arrive : '--') + "</td>");
            StuList.push(" <td class='font-red hidden-xs'>" + student.Attendance + "</td>");
            StuList.push(" <td>" + student.Name + "</td>");
            StuList.push(" <td class='hidden-xs'>" + student.Sex + "</td>");
            StuList.push(" <td class='hidden-xs'>" + student.Birthday + "</td>");
            StuList.push(" <td class='hidden-xs'>" + student.Grade + "</td>");
            StuList.push(" <td>" + student.ClassTypeName + "</td>");
            StuList.push(" <td>" + student.LinkName1 + "</td>");
            StuList.push(" <td><a href='Tel:" + student.Tel1 + "'> " + student.Tel1 + "</a></td>");
            StuList.push(" <td>");
            StuList.push(" </td>");
            StuList.push("</tr>");
        }
        $("#tb-student").html(StuList.join(''));

    }


    //初始加载公共数据
    function renderBulletinListTable() {
        var BbulletList = [];

        for (var item = 0; item < info1.length; item++) {
            var bullet = info1[item];
            BbulletList.push(" <tr class='tr-gonggao'>");
            BbulletList.push(" <td >" + (item + 1) + "</td>");
            BbulletList.push(" <td >" + bullet.Title + "</td>");
            BbulletList.push(" <td class=' hidden-xs' >" + bullet.Author + "</td>");
            BbulletList.push(" <td class='hidden-xs'>" + bullet.Time + "</td>");
            BbulletList.push("</tr>");
        }
        // console.log(BbulletList);
        $("#tb-announcement").html(BbulletList.join(''));
        var num = $("#tb-announcement").find("tr").length;
        if (num > 1) {
            setInterval(function() {
                $('#tb-announcement').animate({
                    marginTop: "-26px",
                    height: "1000px"
                }, 1000, function() {
                    $(this).css({ marginTop: "0" }).find("tr:first").appendTo(this);
                });
            }, 2000);
        }


    }


    // 参数1 tableID,参数2 div高度，参数3 速度，参数4 tbody中tr几条以上滚动

    $(".widget_3").on("click", ".widget_1_box", function(e) {
        let name = $(e.target).find(".counttype").text() //.data(id);

        if (name == "学生信息") {
            $('#main').load("student/studentList.html");
        } else if (name == "员工信息") {
            $('#main').load("staff/management.html");
        } else if (name == "公告管理") {
            $('#main').load("announcement/announcement.html");
        } else if (name == "部门管理") {
            $('#main').load("buMenGuanLi/Newmanagement.html");
        }
    })




})