$(function () {
    $('.prove').click(function () {
        var value = $.trim($('.username').val());
        console.log(value);
        //密码正则，8到16位（字母，数字）
        var filter = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        phoneFlag = checkReg($('.username'), filter, value, '手机号码不能为空', '手机号码格式错误','验证成功');
        //console.log(phoneFlag)
    });
    $('.submit').click(function () {
        alert('提交成功');
    })
})

function checkReg(cur, filter, value, text1, text2,text3) {
    var key = false;
    if (!value) {
        alert(text1)
    } else if (!filter.test(value)) {
        alert(text2)
    } else {
        alert(text3)
        key = true;
    }
    return key
}
