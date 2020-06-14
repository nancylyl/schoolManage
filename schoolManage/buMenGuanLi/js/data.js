/* 账号 */
var admin = {
    account: "admin",
    psw: 123
};

var buMenGuanLI={
    xiangMunumber:12021,
    buMenNanme:"保教部",
    fuZeRenname:"张三",
    buMenMiaoShu:"负责幼儿园的保育工作",
    buMenRenShu:"4",
    beiZhu:""
}


var Administrator = {
    role: "Administrator",
    Name: "陈逸群",
    Age: 25,
    Sex: "男",
    nation: "汉",
    Duty: "系统管理员",
    grade: "无",
    Tel: 13658018176,
    Email: "1123456789@qq.com",
    home: "四川省成都市高新区云华路333号8栋521",
    QQ: 1123456789,
    ID: 510103199201011525,
    SchoolTag: "华西师范大学",
    education: "本科",
    han: "未婚",
    blood: "o型"
};
/* 班级类型 */
var ClassTypeList = [{
            'ClassTypeID': '1',
            'Name': '萌萌班'
        },
        {
            'ID': '2',
            'Name': '火箭班'
        },
        {
            'ID': '3',
            'Name': '卡卡班'
        }
    ]
    /* 班级级别 */
var ClasGradeList = [{
            'ClasGradeID': '1',
            'Name': '小班'
        },
        {
            'ID': '2',
            'Name': '中班'
        },
        {
            'ID': '3',
            'Name': '大班'
        }
    ]
    /* 班级 */
var ClassList = [{
    'ID': 1,
    'ClassTypeID': 1,
    'ClasGradeID': 1,
    'MianTeacher': 1,
    'DepTeacher': 1
}];

/*老师  */
var TeacherList = [{
        role: "ATeacher",
        Name: "王印",
        Age: 20,
        Sex: "女",
        Tel: 13982053096,
        Duty: "主任教师",
        Id: "11",
        grade: "大班",
        arrive: "08:20",
        LeaveSchool: "17:40",
        attendance: "正常",
        Email: "123456789@qq.com"
    },
    {
        role: "ATeacher",
        Id: "12",
        Name: "小龙",
        Age: 25,
        Sex: "女",
        Tel: 13658018195,
        Duty: "主任教师",
        grade: "中班",
        arrive: "08:20",
        LeaveSchool: "17:30",
        attendance: "正常",
        Email: "223456789@qq.com",
    }, {
        Id: "13",
        role: "ATeacher",
        Name: "康康",
        Age: 20,
        Sex: "男",
        Tel: 13658018195,
        Duty: "主任教师",
        grade: "小班",
        arrive: "08:20",
        LeaveSchool: "17:40",
        attendance: "正常",
        Email: "323456789@qq.com"
    }, {
        Id: "14",
        role: "BTeacher",
        Name: "苏嘉",
        Age: 25,
        Sex: "男",
        Tel: 13880196380,
        Duty: "辅助教师",
        grade: "大班",
        arrive: "08:20",
        LeaveSchool: "17:00",
        attendance: "早退",
        Email: "423456789@qq.com"
    },
    {
        Id: "15",
        role: "BTeacher",
        Name: "刘杰",
        Age: 24,
        Sex: "男",
        Tel: 13980016923,
        Duty: "辅助教师",
        grade: "中班",
        arrive: "09:10",
        LeaveSchool: "17:50",
        attendance: "迟到",
        Email: "523456789@qq.com"
    }, {
        Id: "16",
        role: "BTeacher",
        Name: "小丁丁",
        Age: 24,
        Sex: "女",
        Tel: 13880339011,
        Duty: "辅助教师",
        grade: "小班",
        arrive: " ",
        LeaveSchool: " ",
        attendance: "旷工",
        Email: "623456789@qq.com"
    }
];
/* 大班学生 */
var BigStudentList = [{
    role: "BigStudent",
    grade: "大班",
    Name: " 李兴",
    ParentName: "李力",
    Relation: "父子",
    Age: 8,
    Sex: "男",
    Tel: 13658018176,
    arrive: "08:40",
    LeaveSchool: "17:50",
    attendance: "正常",
    Email: "1434424324@qq.com",
    Id: 1
}, {
    role: "BigStudent",
    grade: "大班",
    Name: "王雪",
    ParentName: "王瑞",
    Age: 8,
    Sex: "女",
    Tel: 13658018176,
    Relation: "母女",
    arrive: "08:40",
    LeaveSchool: "17:40",
    attendance: "正常",
    Email: "1434424325@qq.com",
    Id: 2
}, {
    role: "BigStudent",
    grade: "大班",
    Name: "张红灵",
    ParentName: "袁丹",
    Age: 8,
    Sex: "女",
    Tel: 13658018176,
    Relation: "母女",
    arrive: "09:10",
    LeaveSchool: "17:50",
    attendance: "迟到",
    Email: "1434424325@qq.com",
    Id: 3
}, {
    role: "BigStudent",
    grade: "大班",
    Name: "孟竹",
    ParentName: "韩雪",
    Age: 8,
    Sex: "男",
    Tel: 13658018176,
    Relation: "母子",
    arrive: "08:40",
    LeaveSchool: "16:50",
    attendance: "早退",
    Email: "1434424325@qq.com",
    Id: 4
}, {
    role: "BigStudent",
    grade: "大班",
    Name: "王伟鹏",
    ParentName: "余姗姗",
    Age: 8,
    Sex: "男",
    Tel: 13658018176,
    Relation: "母子",
    arrive: "08:40",
    LeaveSchool: "17:50",
    attendance: "正常",
    Email: "1434424325@qq.com",
    Id: 5
}, {
    role: "BigStudent",
    grade: "大班",
    Name: "林芳",
    ParentName: "李艳",
    Age: 8,
    Sex: "女",
    Tel: 13658018176,
    Relation: "母女",
    arrive: "08:40",
    LeaveSchool: "16:50",
    attendance: "早退",
    Email: "1434424325@qq.com",
    Id: 6
}, {
    role: "BigStudent",
    grade: "大班",
    Name: "黄萍萍",
    ParentName: "余英姿",
    Age: 8,
    Sex: "女",
    Tel: 13658018176,
    Relation: "母女",
    arrive: "08:40",
    LeaveSchool: "17:50",
    attendance: "正常",
    Email: "1434424325@qq.com",
    Id: 7
}, {
    role: "BigStudent",
    grade: "大班",
    Name: "唐奇",
    ParentName: "步雅芸",
    Age: 8,
    Sex: "男",
    Tel: 13658018176,
    Relation: "母子",
    arrive: "08:40",
    LeaveSchool: "17:50",
    attendance: "正常",
    Email: "1434424325@qq.com",
    Id: 8
}, {
    role: "BigStudent",
    grade: "大班",
    Name: "郭子杰",
    ParentName: "王瑞琪",
    Age: 8,
    Sex: "男",
    Tel: 13658018176,
    Relation: "母子",
    arrive: "09:40",
    LeaveSchool: "17:50",
    attendance: "迟到",
    Email: "1434424325@qq.com",
    Id: 9
}, {
    role: "BigStudent",
    grade: "大班",
    Name: "曹兵",
    ParentName: "皮庆燕",
    Age: 8,
    Sex: "男",
    Tel: 13658018176,
    Relation: "母子",
    arrive: "08:40",
    LeaveSchool: "17:50",
    attendance: "正常",
    Email: "1434424325@qq.com",
    Id: 10
}];
/* 中班学生 */
var MidStudentList = [{
    role: "MidStudent",
    grade: "中班",
    Name: "刘婷婷",
    ParentName: "王婷",
    Age: 7,
    Sex: "女",
    Tel: 13658018176,
    Relation: "母女",
    arrive: "08:40",
    LeaveSchool: "17:50",
    attendance: "正常",
    Email: "1434424325@qq.com",
    Id: 11
}, {
    role: "MidStudent",
    grade: "中班",
    Name: "杨燕",
    ParentName: "何佩芬",
    Age: 7,
    Sex: "女",
    Tel: 13658018176,
    Relation: "母女",
    arrive: "09:40",
    LeaveSchool: "17:50",
    attendance: "迟到",
    Email: "1434424325@qq.com",
    Id: 12
}, {
    role: "MidStudent",
    grade: "中班",
    Name: "陈思远",
    ParentName: "周萍",
    Age: 7,
    Sex: "男",
    Tel: 13658018176,
    Relation: "母子",
    arrive: "08:40",
    LeaveSchool: "16:50",
    attendance: "早退",
    Email: "1834424325@qq.com",
    Id: 13
}, {
    role: "MidStudent",
    grade: "中班",
    Name: "凌玉",
    ParentName: "陈丹丽",
    Age: 7,
    Sex: "男",
    Tel: 13658018176,
    Relation: "母子",
    arrive: "09:40",
    LeaveSchool: "17:50",
    attendance: "迟到",
    Email: "1534424325@qq.com",
    Id: 14
}, {
    role: "MidStudent",
    grade: "中班",
    Name: "何杰",
    ParentName: "朱云瑞",
    Age: 7,
    Sex: "男",
    Tel: 13658018176,
    Relation: "母子",
    arrive: "08:40",
    LeaveSchool: "17:50",
    attendance: "正常",
    Email: "1434443325@qq.com",
    Id: 15
}];
/* 小班学生 */
var SmallStudentList = [{
    role: "SmallStudent",
    grade: "小班",
    Name: "陈小红",
    ParentName: "周娟",
    Age: 6,
    Sex: "女",
    Tel: 13658018176,
    Relation: "母女",
    arrive: "08:40",
    LeaveSchool: "17:50",
    attendance: "正常",
    Email: "1434422325@qq.com",
    Id: 16
}, {
    role: "SmallStudent",
    grade: "小班",
    Name: "张荷",
    ParentName: "郭淑娟",
    Age: 6,
    Sex: "女",
    Tel: 13658018176,
    Relation: "母女",
    arrive: "09:20",
    LeaveSchool: "17:50",
    attendance: "迟到",
    Email: "14344123325@qq.com",
    Id: 17
}, {
    role: "SmallStudent",
    grade: "小班",
    Name: "邓杰",
    ParentName: "李雪飞",
    Age: 6,
    Sex: "男",
    Tel: 13658018176,
    Relation: "母子",
    arrive: "08:40",
    LeaveSchool: "16:50",
    attendance: "早退",
    Email: "143324324325@qq.com",
    Id: 18
}, {
    role: "SmallStudent",
    grade: "小班",
    Name: "张思琪",
    ParentName: "晓蕾",
    Age: 6,
    Sex: "女",
    Tel: 13658018176,
    Relation: "母女",
    arrive: "08:40",
    LeaveSchool: "17:50",
    attendance: "正常",
    Email: "1434424321@qq.com",
    Id: 19
}, {
    role: "SmallStudent",
    grade: "小班",
    Name: "王博",
    ParentName: "周倩",
    Age: 6,
    Sex: "男",
    Tel: 13658018176,
    Relation: "母子",
    arrive: "09:40",
    LeaveSchool: "17:50",
    attendance: "迟到",
    Email: "1434424345@qq.com",
    Id: 20
}]

/* 所有学生 */
var AllStudentList = {...BigStudentList, ...MidStudentList, ...SmallStudentList }
console.log(AllStudentList);
/* 后勤人员 */
var BackofficeMaList = [{
        Name: "毛成君",
        role: "后勤部长",
        Sex: "男",
        arrive: "08:20",
        LeaveSchool: "18:40",
        attendance: "正常"
    },
    BackofficeMe1 = {
        Name: "王铮",
        role: "后勤成员",
        Sex: "男",
        arrive: "08:20",
        LeaveSchool: "18:40",
        attendance: "正常"
    },
    BackofficeMe2 = {
        Name: "范子坚",
        role: "后勤成员",
        Sex: "男",
        arrive: "08:20",
        LeaveSchool: "18:50",
        attendance: "正"
    }
];
/* 医生 */
var　 MedicalMaList = [{
    Name: "宋玉红",
    role: "医务室负责人",
    Sex: "女",
    arrive: "08:20",
    LeaveSchool: "17:40",
    attendance: "正常"
}, {
    Name: "李娜",
    role: "医务室护士",
    Sex: "女",
    arrive: "09:20",
    LeaveSchool: "17:40",
    attendance: "迟到"
}, {
    Name: "张恒",
    role: "医务室护士",
    Sex: "男",
    arrive: "08:20",
    LeaveSchool: "17:40",
    attendance: "正常"
}];
/* 餐厅 */
var CantineMaList = [{
    Name: "周克涛",
    role: "厨师长",
    Sex: "男",
    arrive: "07:20",
    LeaveSchool: "17:40",
    attendance: "正常"
}, {
    Name: "张小林",
    role: "厨师",
    Sex: "男",
    arrive: "08:20",
    LeaveSchool: "17:40",
    attendance: "迟到"
}, {
    Name: "王若丰",
    role: "厨师",
    Sex: "男",
    arrive: "08:20",
    LeaveSchool: "16:40",
    attendance: "早退"
}];
/* 老师请假 */
var TeacherLeaveList = [{
        role: "ATeacher",
        Name: "王芳",
        Age: 28,
        Sex: "女",
        Tel: 13982053096,
        Duty: "主任教师",
        grade: "大班",
        leaveDayForm: "2018/12/1",
        LeaveDayTo: "2018/12/1",
        leaveTimeForm: "09:00",
        leaveTimeTo: "11:00",
        ratify: "已批准",
        Email: "123456789@qq.com"
    },
    {
        role: "ATeacher",
        Name: "王芳",
        Age: 28,
        Sex: "女",
        Tel: 13982053096,
        Duty: "主任教师",
        grade: "大班",
        leaveDayForm: "2018/12/10",
        LeaveDayTo: "2018/12/10",
        leaveTimeForm: "14:00",
        leaveTimeTo: "17:30",
        ratify: "已批准",
        Email: "123456789@qq.com"
    },
    {
        role: "ATeacher",
        Name: "王芳",
        Age: 28,
        Sex: "女",
        Tel: 13982053096,
        Duty: "主任教师",
        grade: "大班",
        leaveDayForm: "2018/12/17",
        LeaveDayTo: "2018/12/18",
        leaveTimeForm: "09:00",
        leaveTimeTo: "09:00",
        ratify: "未批准",
        Email: "123456789@qq.com"
    },
    {
        role: "ATeacher",
        Name: "王芳",
        Age: 28,
        Sex: "女",
        Tel: 13982053096,
        Duty: "主任教师",
        grade: "大班",
        leaveDayForm: "2018/12/24",
        LeaveDayTo: "2018/12/26",
        leaveTimeForm: "09:00",
        leaveTimeTo: "09:00",
        ratify: "待批准",
        Email: "123456789@qq.com"
    }
];