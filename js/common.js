var comPath="http://172.168.70.248"

$(function () {
	concatHttp()
	// 用户登录注册函数
	$("nav .loginBtn").click(function () {
		$("#login").show();
		$("#login").next(".window-mask").eq(0).show();
	});
	$("#login .closeBtn").click(function () {
		$("#login").hide();
		$("#login").next(".window-mask").eq(0).hide();
	});

	if(GetQueryString("islogin")){
		$("#dataPlatform").attr("href","http://172.168.70.248:8280/dataPlatform/loginController.do?loginS&username=admin&password=123456");
	}else{
		$("#dataPlatform").attr("href","http://172.168.70.248:8280/dataPlatform/loginController.do?loginS&username=user1&password=123456");	
	}
	$("#login .login").click(function () {
		var user=$("#login .user input").val();
		var pwd=$("#login .password input").val();
		if(user=="admin" && pwd=="123456"){
			var url=$("#dataPlatform").attr("href").replace(/user1/, user);
			$("#dataPlatform").attr("href",url);
			window.document.cookie="&islogin=true";
		}
		$("#login").hide();
		$("#login").next(".window-mask").eq(0).hide();
	});

	// 返回顶部工具函数
	var lastRmenuStatus=false;
	$(window).scroll(function()
	{
		var _top=$(window).scrollTop();
		if(_top>800)
		{
			$("#J_GotoTop").data("expanded",true);
		}
		else
		{
			$("#J_GotoTop").data("expanded",false);
		}
		if($("#J_GotoTop").data("expanded")!=lastRmenuStatus)
		{
			lastRmenuStatus=$("#J_GotoTop").data("expanded");
			if(lastRmenuStatus)
			{
				$("#J_GotoTop").slideDown();
			}
			else
			{
				$("#J_GotoTop").slideUp();
			}
		}
	});
	$("#J_GotoTop .elevator-top").click(function() {
  		$("html,body").animate({
    		scrollTop: 0
  		}, 300);
	});


});
function concatHttp() {
	$.each($("a.replaceUrl"),function (index,value) {
		var old=$(value).attr("href");
		$(value).attr('href',comPath.concat(old));
	})
};

$(function () {
	$(".poster-main >.poster-list >.poster-item").on({
		mouseover:function () {
			$(this).addClass("current").siblings().removeClass("current");
		}
	})
});

// 地址栏search参数筛选函数
function GetQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var result = window.document.cookie.substr(1).match(reg);
     return result?decodeURIComponent(result[2]):null;
}