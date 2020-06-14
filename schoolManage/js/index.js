var MenuListAll = [{
        icon: 'fa fa-dashboard fa-fw nav_icon',
        name: '首页',
        url: 'main.html',
        sonMenusList: []
    },
    {
        icon: 'fa fa-laptop nav_icon',
        name: '基础信息管理',
        url: '',
        sonMenusList: [{
                name: '部门管理',
                url: 'buMenGuanLi/Newmanagement.html'
            },
            {
                name: '员工管理',
                url: 'staff/management.html'
            },
            {
                name: '班级管理',
                url: 'item02YL/class_manage.html'
            },
            {
                name: '学生管理',
                url: 'student/studentList.html?type=1'
            }
        ]
    },
    {
        icon: 'fa fa-envelope nav_icon',
        name: '照片墙',
        url: '',
        sonMenusList: [{
                name: '照片管理',
                url: 'photoWall/photoOut.html'
            }
            // },
            // {
            //     name: '照片发布',
            //     url: 'index.html'
            // }
        ]
    },
    {
        icon: 'fa fa-flask nav_icon',
        name: '出勤管理',
        url: '',
        sonMenusList: [{
                name: '出勤管理',
                url: 'attendance/management.html'
            },
            {
                name: '邮件推送',
                url: 'item02YL/mailPush.html'
            }
        ]
    },
    {
        icon: 'fa fa-table nav_icon',
        name: '公告管理',
        url: '',
        sonMenusList: [{
                name: '公告管理',
                url: 'announcement/announcement.html'
            },
            {
                name: '发布公告',
                url: 'announcement/publishBulletin.html'
            }
        ]
    },
    {
        icon: 'fa fa-sitemap fa-fw nav_icon',
        name: '个人中心',
        url: 'personal/personal.html',
        sonMenusList: []
    }
];
/* 老师 */
var MenuListTech = [{
        icon: 'fa fa-dashboard fa-fw nav_icon',
        name: '首页',
        url: 'main.html',
        sonMenusList: []
    },
    {
        icon: 'fa fa-laptop nav_icon',
        name: '基础信息管理',
        url: '',
        sonMenusList: [{
                name: '班级管理',
                url: 'item02YL/class_manage.html'
            },
            {
                name: '学生管理',
                url: 'student/studentList.html?type=1'
            }
        ]
    },
    {
        icon: 'fa fa-envelope nav_icon',
        name: '照片墙',
        url: '',
        sonMenusList: [{
            name: '照片管理',
            url: 'photoWall/photoOut.html'
        }]
    },
    {
        icon: 'fa fa-flask nav_icon',
        name: '出勤管理',
        url: '',
        sonMenusList: [{
                name: '出勤管理',
                url: 'attendance/management.html'
            },
            {
                name: '邮件推送',
                url: 'item02YL/mailPush.html'
            }
        ]
    },
    {
        icon: 'fa fa-table nav_icon',
        name: '公告管理',
        url: '',
        sonMenusList: [{
                name: '公告管理',
                url: 'announcement/announcement.html'
            },
            {
                name: '发布公告',
                url: 'announcement/publishBulletin.html'
            }
        ]
    },
    {
        icon: 'fa fa-sitemap fa-fw nav_icon',
        name: '个人中心',
        url: 'personal/personal.html',
        sonMenusList: []
    }
];
/* 园长 */
var MenuListPre = [{
        icon: 'fa fa-dashboard fa-fw nav_icon',
        name: '首页',
        url: 'main.html',
        sonMenusList: []
    },
    {
        icon: 'fa fa-table nav_icon',
        name: '公告管理',
        url: '',
        sonMenusList: [{
                name: '公告管理',
                url: 'announcement/announcement.html'
            },
            {
                name: '发布公告',
                url: 'announcement/publishBulletin.html'
            }
        ]
    },
    {
        icon: 'fa fa-sitemap fa-fw nav_icon',
        name: '个人中心',
        url: 'personal/personal.html',
        sonMenusList: []
    }
];
$(function() {

    // let Id = "1";

    // console.log(buMenGuanLI.filter(item => item.xiangMunumber == Id));

    var userInfo = getSessionStorage();
    var role;
    if (userInfo == undefined) {
        alert("您还没有登录");
        returnLogin();
        return;

    } else {
        role = parseInt(userInfo.role);
        if (role < 0 || role > 3) {
            alert("您没有权限操作");
            returnLogin();
            return;

        }
    }
    let meList = [];
    let navMain = $("#side-menu");
    let sonarrow = "";
    let soncount = 0;
    let item, sonitem;
    var MenuList;
    var roleName;
    if (role == "0") {
        MenuList = MenuListAll;
        roleName = "超级管理员";
    } else if (role == "2") {
        MenuList = MenuListTech;
        roleName = "老师";
    } else if (role == "1") {
        MenuList = MenuListPre;
        roleName = "园长";
    }


    $("#Acount").html(userInfo.Account + "   您好！" + roleName);
    $(".dropdown img").attr("src", userInfo.Url);

    /* 动态读取取菜单栏 */
    for (let i in MenuList) {
        item = MenuList[i];
        soncount = item.sonMenusList.length;
        var hasChild = soncount > 0;
        sonarrow = hasChild ? "<span class='fa arrow'></span>" : ""
        meList.push("<li>");
        meList.push("<a class='" + (hasChild ? '' : 'link') + "' href='javascript:;' data-url='" + item.url + "'><i class='" + item.icon + "'></i>" + item.name + sonarrow + "</a>");
        if (soncount > 0) {
            meList.push("<ul class='nav nav-second-level'>");
            for (let j in item.sonMenusList) {
                sonitem = item.sonMenusList[j];
                meList.push("<li>");
                meList.push("<a class='link' href='javascript:;' data-url='" + sonitem.url + "'>" + sonitem.name + "</a>");
                meList.push("</li>");
            }
            meList.push("</ul>");
        }
        meList.push(" </li>");
    }
    navMain.html(meList.join(''));
    $('#side-menu').metisMenu(); //框架 ，加载完后需要让菜单栏不展开
    $('#main').load("main.html"); //默认加载主页
    //  'buMenGuanLi/Newmanagement.html'
    // $('#main').load("buMenGuanLi/Newmanagement.html");
    /* 左侧菜单栏点击事件 */
    $('#side-menu').on('click', '.link', function(e) {
        const $link = $(e.target);
        jQuery.support.cors = true;
        const url = $link.data('url');
        $('#main').load(url);
    });


    $("#Update").click(function() {
        $('#main').load("personal/personal.html");
    });
    $("#Exit").click(function() {

        clearsSessionStorage();
        returnLogin();

    })

    function returnLogin() {
        location.href = "login/login.html ";
    }
})