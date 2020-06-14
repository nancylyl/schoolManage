/* 获取登录信息 */
function getSessionStorage() {
    return JSON.parse(sessionStorage.getItem("key"));
}

function clearsSessionStorage() {
    sessionStorage.clear();
}
/* 导出Excel */
function tableToExcel(jsonData, title, name) {
    //要导出的json数据
    //列标题
    //循环遍历，每行加入tr标签，每个单元格加td标签
    for (let i = 0; i < jsonData.length; i++) {
        title += '<tr>';
        for (let item in jsonData[i]) {
            //增加\t为了不让表格显示科学计数法或者其他格式
            title += `<td>${ jsonData[i][item] + '\t'}</td>`;
        }
        title += '</tr>';
    }
    //Worksheet名
    let worksheet = name;
    let uri = 'data:application/vnd.ms-excel;base64,';
    //下载的表格模板数据
    let template = `<html xmlns:o="urn:schemas-microsoft-com:office:office" 
    xmlns:x="urn:schemas-microsoft-com:office:excel" 
    xmlns="http://www.w3.org/TR/REC-html40">
    <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
      <x:Name>${worksheet}</x:Name>
      <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
      </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
      </head><body><table>${title}</table></body></html>`;
    //下载模板
    window.location.href = uri + base64(template)
}
//输出base64编码
function base64(s) { return window.btoa(unescape(encodeURIComponent(s))) }

/* 表格样式 */

function getClass(item) {
    let className;
    // if (item % 1 == 0) className = "active";
    // if (item % 2 == 0) className = "success";
    // if (item % 5 == 0) className = "info";
    // if (item % 7 == 0) className = "warning";
    // if (item % 9 == 0) className = "danger";
    return className;

}
//动态绑定下拉 Name 下来
function bindOption(arr) {
    let obj = [];
    obj.push('<option value="0">--请选择--</option>');
    arr.forEach(function(item) {
        obj.push('<option value="' + item.Name + '">' + item.Name + '</option>');
    })
    return obj.join('');

}

function showMsg(msg = '操作成功！') {
    bootoast.toast({
        message: msg,
        type: 'success',
        timeoutProgress: 200,
        animationDuration: 300,
        // dismissible: true
    });
}

function showError(msg = '操作失败') {
    bootoast.toast({
        message: msg,
        type: 'danger',
        timeoutProgress: 200,
        animationDuration: 300,
        // dismissible: true
    });
}