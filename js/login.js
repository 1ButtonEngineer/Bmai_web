$(function () {
    //成为焦点
    var userFlag = psdFlag = phoneFlag = false;
    $('.input_container input').focus(function () {
        $(this).parent().next().hide();
    });
    //失去焦点
    //账号验证
    $('#username').blur(function () {
        var value = $.trim($(this).val());
        //用户名正则，4到16位（字母，数字，下划线，减号）
        var filter = /^[a-zA-Z0-9_-]{4,16}$/;
        // checkReg($(this), filter, value, '账号不能为空', '账号格式错误', userFlag);
        userFlag = checkReg($(this), filter, value, '账号不能为空', '账号格式错误');

        if(value != 'user1') {
            alert('用户名不正确')
            userFlag = false;
        }
        userFlag = true;
        //console.log(userFlag)
    });
    //密码验证
    $('#psd').blur(function () {
        var value = $.trim($(this).val());
        //密码正则，8到16位（字母，数字）
        var filter = /^[0-9]*$/ ;
        psdFlag = checkReg($(this), filter, value, '密码不能为空', '密码格式错误');

        if(value != '123456') {
            alert('密码不正确')
            userFlag = false;
        }
        userFlag = true;
        //console.log(psdFlag)
    });
    //手机验证
    $('#phone').blur(function () {
        var value = $.trim($(this).val());
        //密码正则，8到16位（字母，数字）
        var filter = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        phoneFlag = checkReg($(this), filter, value, '手机号码不能为空', '手机号码格式错误');
        //console.log(phoneFlag)
    });
    //登录,三者验证通过才能登录
    $('#login').click(function () {
        if (userFlag && psdFlag && phoneFlag) {
            alert('登录成功')
        } else {
            alert('登录失败')
        }
    })
})
function checkReg(cur, filter, value, text1, text2) {
    var key = false;
    if (!value) {
        cur.parent().next().show().text(text1);
    } else if (!filter.test(value)) {
        cur.parent().next().show().text(text2);
    } else {
        cur.parent().next().hide();
        key = true;
    }
    return key
}
