$(function() {

    renderTable();
    //初始加载数据
    function renderTable() {
        let StuList = [];
        let classname = "";
        for (var item = 0; item < AllStudentList.length; item++) {
            // StuList.push(" <tr class='" + getClass(item) + "'>");
            var student = AllStudentList[item];
            var arrive = student.arrive;
            StuList.push(" <tr>");
            StuList.push(" <td>" + item + "</td>");
            StuList.push(" <td>" + student.Name + "</td>");
            StuList.push(" <td>" + student.Sex + "</td>");
            StuList.push(" <td>" + student.Birthday + "</td>");
            StuList.push(" <td>" + student.grade + "</td>");
            StuList.push(" <td>" + student.LinkName1 + "</td>");
            StuList.push(" <td>" + student.Tel1 + "</td>");
            StuList.push(" <td>" + (arrive ? arrive : '--') + "</td>");
            StuList.push(" <td>");
            StuList.push("<button type='button' class='btn btn-xs btn-primary'>编辑</button>");
            StuList.push(" <button type='button' class='btn btn-xs btn-primary'>转班</button>");
            StuList.push(" <button type='button' class='btn btn-xs btn-primary'>退学</button>");
            StuList.push(" <button type='button' class='btn btn-xs btn-danger'>删除</button>");
            StuList.push(" </td>");
            StuList.push("</tr>");
        }
        $("#tb-student").html(StuList.join(''));
    }
    /* 表单提交 */
    $("#btnAddStudent").on("click", function() {
        let result = {};
        $("#addStudentForm").serializeArray().forEach(item => {
            result[item.name] = item.value;
        });

        AllStudentList.push(result);
        $('#editStudent').modal('hide')
        renderTable();
    })
})