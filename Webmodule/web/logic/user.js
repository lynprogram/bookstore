/**
 * Created by lyn on 16-5-3.
 */
/**
 * login
 */
function login()
{
    ajax("useraction","post",{
        operation:"login",
        username:$("#username").val(),
        password:$("#password").val()
    },function (role) {
        
        setCookie("user",role,"d1","/");
        
    });
}
/**
 * 注册
 */
function register() {
    ajax("useraction","post",{
        operation:"register",
        regName:$("#regname").val(),
        regPwd:$("#regpwd").val(),
        regEmail:$("#regemail").val()
    },function (data) {
        alert(data);
        $("#regModal").modal("hide");

    });

}
/**
 * 修改密码
 */
function modiPwd() {
    ajax("useraction","post",{
        operation:"modiPwd",
        modiName:$("#modiname").val(),
        oldPwd:$("#oldpwd").val(),
        newPwd:$("#newpwd").val()
    },function (data) {
        alert(data);
        $("#modiModal").modal("hide");
    })

}
/**
 * 注销登录
 */
function logout() {
    setCookie("user","","s0","/");
    ajax("useraction","post",{
        operation:"logout"
    },function () {
        
        self.location="index.jsp";

    })
}
/**
 * 获取登录用户名
 * @returns {*}
 */
function getUserName() {
    var cookie=getCookie();
    var tmpArr=new Array();
    tmpArr=cookie.split("@");
    return tmpArr[0];

}
