var MenuList = [{
        icon: 'fa fa-dashboard fa-fw nav_icon',
        name: '首页',
        url: 'index.html',
        sonMenusList: []
    },
    {
        icon: 'fa fa-laptop nav_icon',
        name: '基础信息管理',
        url: '',
        sonMenusList: [{
                name: '部门管理',
                url: 'department/management.html'
            },
            {
                name: '职工管理',
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
                url: 'photoWall/photoWall.html'
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
                url: 'item02YL/mailPush.html'
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
    let meList = [];
    let navMain = $("#side-menu");
    let sonarrow = "";
    let soncount = 0;
    let item, sonitem;
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

    $('#side-menu').metisMenu();
    $('#main').load("main.html");
    $('#side-menu').on('click', '.link', function(e) {
        const $link = $(e.target);
        const url = $link.data('url');
        $('#main').load(url);
    });

})