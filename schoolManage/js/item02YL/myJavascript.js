$(document).ready(function() {
    var oId = 1; //为了克隆后修改对应标签的ID值

    /*获取主班老师的名称*/
    for (let i = 0; i < TeacherList.length; i++) {
        if (TeacherList[i].Duty == "主任教师") {
            //console.log(TeacherList[i].Name);
            let b = TeacherList[i].Name;
            //$("#selector2").append($(`<option>${b}</option>`));
            $(".mainselect").append($(`<option>${b}</option>`));
        }
    }
    /*获取辅班老师的名称*/
    for (let j = 0; j < TeacherList.length; j++) {
        if (TeacherList[j].Duty == "辅助教师") {
            //console.log(TeacherList[i].Name);
            let c = TeacherList[j].Name;
            //$("#selector3").append($(`<option>${c}</option>`));
            $(".fuselect").append($(`<option>${c}</option>`));
        }
    }


    /**********新增班级*************/
    $(".adBan").click(function() {

        $(".myForm")[0].reset(); //新增之前，重置表单的数据

        $(".tishiyu").hide();

        $(".nameAgain").hide();
        //点击确定，获取value值，保存数据
        $(".newBan").click(function() {
            let a = $(".banName").val(); //获取班级名称

            let b = $("#selector1").val();

            let c = $("#selector2").val();

            let d = $("#selector3").val();


            if (a != "") {
                for (var nn = 0; nn < ClassList.length; nn++) {
                    if (a == ClassList[nn].ClassTypeID) {
                        $(".nameAgain").show();
                        $(".tishiyu").hide();
                        break;
                    }
                }
                if (nn >= ClassList.length) {
                    //新增的班级放入班级数组
                    let obj = { "ID": ClassList.length + 1, "ClassTypeID": a, "ClasGradeID": b, "MianTeacher": c, "DepTeacher": d };

                    let obj1 = { "ClassTypeID": ClassTypeList.length + 1, "Name": a, "ClassGradeName": b };
                    ClassTypeList.push(obj1);
                    ClassList.push(obj);



                    //克隆第一行至表格末尾
                    //console.log($(".active").length);
                    //console.log(typeof $(".active"));
                    let cc = $(".banTbody").find(".active").first().clone(true); //复制第一个,加了first()，才没用成倍的复制
                    $(".banTbody").append(cc);
                    //console.log( $(cc).find("td").css("background-color"));
                    //console.log($(cc).children());
                    //$(cc).children().css("background-color","#dff0d8");
                    console.log(ClassList.length);
                    if ((ClassList.length) % 2 == 0) {
                        console.log(1);
                        $(cc).children().css("background-color", "#ffffff");
                    } else if ((ClassList.length) % 2 == 1) {
                        console.log(2);
                        $(cc).children().css("background-color", "#f5f5f5");
                    }

                    //$(cc).css("background-color","red!important");
                    //console.log( cc);


                    //把新增的数据赋给对应列表
                    $(cc).find("th").text(ClassList.length);
                    $(cc).find(".classNa").text(a);
                    $(cc).find(".classTy").text(b);
                    $(cc).find(".mainTea").text(c);
                    $(cc).find(".fuTea").text(d);
                    $(cc).find(".stuNum").text(0);

                    //克隆后，修改对应标签的ID值
                    $(cc).find(".edit").attr("data-target", "#myModal1" + oId);
                    $(cc).find(".myedit").attr("id", "myModal1" + oId);
                    $(cc).find("input").attr("id", "smallinput1" + oId);
                    $(cc).find(".ban1").attr("id", "selector11" + oId);
                    $(cc).find(".ban2").attr("id", "selector21" + oId);
                    $(cc).find(".ban3").attr("id", "selector31" + oId);
                    $(cc).find("textarea").attr("id", "txtarea11" + oId);
                    oId++;

                    $(".tishiyu").hide();

                    $(".nameAgain").hide();
                    //新增成功后,重置表单的数据
                    $(".myForm")[0].reset();

                    //关闭模态框
                    $("#myModal").modal("hide");


                }

            } else {
                $(".tishiyu").show();
                $(".nameAgain").hide();
            }
        });
        console.log(ClassList);
    });




    /*************修改班级***************/
    $(".edit").click(function() {

        $(this).next().find(".tishiyu").hide();
        $(this).next().find(".nameAgain").hide();
        //console.log($(this).parent().parent().find(".classNa").text());
        //把之前的内容展示在模态框里
        let a = $(this).parent().parent().find(".classNa").text();
        let b = $(this).parent().parent().find(".classTy").text();
        let c = $(this).parent().parent().find(".mainTea").text();
        let d = $(this).parent().parent().find(".fuTea").text();
        $(this).next().find(".banName").val(a);

        $(this).next().find(".ban1").val(b);

        $(this).next().find(".ban2").val(c);

        $(this).next().find(".ban3").val(d);



        $(".editBan").click(function() {
            /* let test=$(".banName").val();            //这种赋值没有成功
             console.log(test);*/

            let newA = $(this).parent().prev().find("input").val(); //这种方法才实现了获取班级名称
            //console.log(newA);
            let newB = $(this).parent().prev().find(".ban1").val();
            //console.log(newB);
            let newC = $(this).parent().prev().find(".ban2").val();
            //console.log(newC);
            let newD = $(this).parent().prev().find(".ban3").val();
            //console.log(newD);

            if (newA != "") {
                //console.log(z);
                for (var z = 0; z < ClassList.length; z++) {
                    //console.log(z);
                    console.log("a是" + a);
                    console.log(newA);
                    console.log(ClassList[z].ClassTypeID);
                    if (newA == ClassList[z].ClassTypeID && newA != a) {
                        console.log(1);
                        $(this).parent().prev().find(".nameAgain").show();
                        $(this).parent().prev().find(".tishiyu").hide();
                        break;
                    }
                }
                console.log(z);
                if (z >= ClassList.length) {
                    console.log(2);
                    //把数组里的信息对应修改
                    let newId = $(this).parent().parent().parent().parent().parent().parent().find("th").text();
                    let newMessage = $(this).parent().parent().parent().parent().parent().parent();
                    ClassList[newId - 1].ClassTypeID = newA;
                    ClassList[newId - 1].ClasGradeID = newB;
                    ClassList[newId - 1].MianTeacher = newC;
                    ClassList[newId - 1].DepTeacher = newD;
                    //console.log(ClassList[newId-1]);

                    $(this).parent().prev().find(".tishiyu").hide();

                    $(this).parent().prev().find(".nameAgain").hide();



                    //更新后的数据展示在表格中
                    $(newMessage).find(".classNa").text(newA);
                    $(newMessage).find(".classTy").text(newB);
                    $(newMessage).find(".mainTea").text(newC);
                    $(newMessage).find(".fuTea").text(newD);

                    console.log(77);

                    //关闭模态框
                    $(this).parent().parent().parent().parent().modal("hide");
                }
            } else {
                $(this).parent().prev().find(".tishiyu").show();
                $(this).parent().prev().find(".nameAgain").hide();
            }
        });
    });



    /*********查看班级信息***********/
    $(".banDetail").click(function() {
        //window.location.href = "class_information.html?class=banDetail";
        //console.log($(".fuTea",parent.document).text());
        //var s=window.location.search;
        //console.log(s);
        //location.href="class_information.html";
        /*$(".biao").load("class_information.html",function () {
            //$(".xx").val("aa");
        });*/

        $(".banList").hide();
        $(".detailStu").show();

        $(".adBan").hide();
        $(".fanhui").show();

        let ban = $(this).parent().parent();
        let banName = $(this).parent().parent().find(".classNa").text();
        let stuNum = 1;
        for (let k = 0; k < AllStudentList.length; k++) {
            if (banName == AllStudentList[k].ClassTypeName) {

                let stuName = AllStudentList[k].Name;
                let stuAge = AllStudentList[k].Age;
                let stuSex = AllStudentList[k].Sex;
                let parent = AllStudentList[k].LinkName1;
                let phone = AllStudentList[k].Tel1;

                let he = $(".myStu").first().find("tbody").first().append($(`<tr>
                                        <th>${stuNum}</th>
                                        <td>${stuName}</td>
                                        <td>${stuAge}</td>
                                        <td>${stuSex}</td>
                                        <td>${parent}</td>
                                        <td>${phone}</td>
                                    </tr>`));
                console.log(stuNum);
                console.log(stuNum % 2);
                console.log(he);
                $(he).find("tr:nth-child(2n)").css("background-color", "#f9f9f9");


                stuNum++;
            }
        }
        $(this).parent().parent().find(".stuNum").text(stuNum - 1); //更新班级列表对应的学生人数
    });


    /*********点击返回按钮********/
    $(".fanhui").click(function() {
        $(".adBan").show();
        $(".fanhui").hide();


        $(".banList").show();
        $(".detailStu").hide();

        $(".myStu").find("tbody").empty();

    });



    /**********删除班级*********/
    $(".deleteBan").click(function() {
        let stnum = 0;
        let stunam = $(this).parent().parent().find(".classNa").text();
        for (let q = 0; q < AllStudentList.length; q++) {

            if (stunam == AllStudentList[q].ClassTypeName) {
                stnum++;
            }
        }
        console.log(stnum);
        if (stnum > 0) {
            alert("该班还有学生,无法删除!");
        } else {
            let yn = confirm("确定删除吗?");
            if (yn == true) {
                $(this).parent().parent().remove();
                for (let h = 0; h < ClassList.length; h++) {
                    if (ClassList[h].ClassTypeID == stunam) {
                        ClassList.splice(h, 1);
                        console.log(ClassList);
                        console.log(ClassList.length);
                        //break;
                    }
                }
            }
        }
    });



    /**********升班********/
    $(".shengBan").click(function() {
        let classT = $(this).parent().parent().find(".classTy").text();
        if (classT == "小班") {
            let t = confirm("是否确定升成中班?");
            if (t == true) {
                $(this).parent().parent().find(".classTy").text("中班"); //改表格里的班级类型
                let a = $(this).parent().parent().find(".classNa").text();
                for (let m = 0; m < ClassList.length; m++) {
                    if (a == ClassList[m].ClassTypeID) {
                        ClassList[m].ClasGradeID = "中班"; //改班级数组里对应的班级类型
                    }
                }
                let b = $(this).parent().parent().find(".mainTea").text();
                for (let k = 0; k < TeacherList.length; k++) {
                    if (b == TeacherList[k].Name) {
                        TeacherList[k].Grade = "中班"; //改老师数组里对应的班级类型

                    }
                }
            }
        } else if (classT == "中班") {
            let jk = confirm("是否确定升成大班?");
            if (jk == true) {
                $(this).parent().parent().find(".classTy").text("大班");
                let aa = $(this).parent().parent().find(".classNa").text();
                for (let t = 0; t < ClassList.length; t++) {
                    if (aa == ClassList[t].ClassTypeID) {
                        ClassList[t].ClasGradeID = "大班"; //改班级数组里对应的班级类型
                        console.log(ClassList[t]);
                    }
                }
                let bb = $(this).parent().parent().find(".mainTea").text();
                for (let kk = 0; kk < TeacherList.length; kk++) {
                    if (bb == TeacherList[kk].Name) {
                        TeacherList[kk].Grade = "大班"; //改老师数组里对应的班级类型
                        console.log(TeacherList[kk]);
                    }
                }
            }
        } else {
            alert("该班已是学校最高班级,无法继续升班!");
        }
    });



    /********毕业********/
    $(".leaveSch").click(function() {
        let ty = $(this).parent().parent().find(".classTy").text();
        if (ty == "小班" || ty == "中班") {
            alert("请继续完成学业至大班,才可毕业!");
        } else {
            let leave = confirm("是否确定毕业?");
            if (leave == true) {
                //let bye = $(this).parent().parent().find(".classTy").text();
                //$(this).parent().parent().find(".classTy").text(`${bye}(已毕业)`);
                $(this).prev().hide();
                $(this).hide();

                console.log($(this).parent().parent().find(".stuNum").text());
            }
        }
    });



    /*******搜索******/
    $(".souS").click(function() {
        let nn = $(".yourClass").val();
        console.log(nn);
        if (nn != "") {
            let kk = $(".weClass").find("tbody").find(".classNa").length;

            for (var c = 0; c < kk; c++) {
                console.log($(".weClass").find("tbody").find(".classNa")[c].innerText);
                if (nn == $(".weClass").find("tbody").find(".classNa")[c].innerText) {
                    console.log(1);
                    $($(".weClass").find("tbody").find(".classNa")[c]).parent().siblings().hide();
                    $(".yourClass").val("");
                    break;
                }
            }
            if (c >= kk) {
                $(".weClass").find("tbody").find("tr").hide();
                $(".yourClass").val("");
                //alert("未找到对应班级信息");
            }
        } else {
            $(".weClass").find("tbody").find("tr").show();
        }

    });
});