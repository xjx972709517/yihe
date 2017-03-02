$(function($){
	var page = ["brandResult.html","goodResult.html"];
	var header = '<div class="header"><div class="header_top"><div class="header_top_nav"><div class="header_top_nav_left inline_block">所在城市 ：<a href="city.html?city=北京"><span>北京</span><i class="down_arrow"></i></a></div><div class="header_top_nav_right inline_block r"><ul class="header_top_nav_right_list ul_in_row"><li><a href="userLogin.html">登录</a></li><li><a href="userRegister.html">注册</a></li><li class="spacer">|</li><li><a href="myCenterOrder.html" target="_blank">我的订单</a></li><li class="spacer">|</li><li><a href="myCenterMessage.html" target="_blank">我的消息</a></li><li class="spacer">|</li><li><a href="brandLogin.html" target="_blank">我是商家</a></li><li class="spacer">|</li><li><a href="javascript:void(0);"><i class="phone_gray"></i>0796 - 2608522</a></li></ul></div></div></div><div class="header_middle"><a href="index.html" class="inline_block v_t"><img src="../img/logo.png"></a><div class="header_middle_search_wrap inline_block v_t"><ul class="header_middle_search_top ul_in_row clearfix"><li><a href="javascript:void(0);" class="inline_block m_nav_clicked">商家</a></li><li><a href="javascript:void(0);" class="inline_block">商品</a></li></ul><div class="header_middle_search_middle"><input class="v_t" type="text" id="search"><a href="javascript:void(0);" target="_blank"><i class="search_btn"></i></a></div><ul class="header_middle_search_bottom ul_in_row clearfix"><li>热门:</li><li><a href="brandResult.html?type=0&word=零点" target="_blank">零点</a></li><li><a href="brandResult.html?type=0&word=注册" target="_blank">注册</a></li><li><a href="brandResult.html?type=0&word=零度" target="_blank">零度</a></li><li><a href="brandResult.html?type=0&word=烤肉" target="_blank">烤肉</a></li><li><a href="brandResult.html?type=0&word=北京汤诚小厨" target="_blank">北京汤诚小厨</a></li><li><a href="brandResult.html?type=0&word=鲜码头" target="_blank">鲜码头</a></li></ul></div><ul class="header_middle_btns inline_block v_t ul_in_row clearfix"><li><a href="myCenter.html" target="_blank" class="inline_block"><i class="user v_m"></i>我的易和<i class="down_arrow2"></i></a></li><li><a href="shoppingCar.html" target="_blank" class="inline_block"><i class="shopping_cart v_m"></i>购物车<i class="down_arrow2"></i><i class="shopping_count">6</i></a></li></ul></div><div class="header_bottom"><div class="header_bottom_nav"><div class="header_bottom_nav_left inline_block v_t">行业分类&nbsp;&nbsp;&nbsp; <i class="classes v_m"></i><div class="header_bottom_nav_left_list_wrap"><ul class="header_bottom_nav_left_list"><li><a href="industrySeller.html?industry=服装超市" target="_blank">服装超市<i class="right_arrow_gray"></i></a><div class="header_bottom_nav_left_list_item_wrap"><ul class="header_bottom_nav_left_list_item ul_in_row clearfix"><li><a href="seller.html?seller=海澜之家" target="_blank">海澜之家</a></li><li class="spacer">|</li><li><a href="seller.html?seller=adidas" target="_blank">adidas</a></li></ul></div></li><li><a href="industrySeller.html?industry=建材装修" target="_blank">建材装修<i class="right_arrow_gray"></i></a><div class="header_bottom_nav_left_list_item_wrap"><ul class="header_bottom_nav_left_list_item clearfix"><li></li></ul></div></li><li><a href="industrySeller.html?industry=休闲娱乐" target="_blank">休闲娱乐<i class="right_arrow_gray"></i></a><div class="header_bottom_nav_left_list_item_wrap"><ul class="header_bottom_nav_left_list_item ul_in_row clearfix"><li><a href="javascript:void(0);">新疆大盘鸡</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">庖丁堂</a></li></ul></div></li><li><a href="industrySeller.html?industry=生活服务" target="_blank">生活服务<i class="right_arrow_gray"></i></a><div class="header_bottom_nav_left_list_item_wrap"><ul class="header_bottom_nav_left_list_item clearfix"><li></li></ul></div></li><li><a href="industrySeller.html?industry=3C市场" target="_blank">3C市场<i class="right_arrow_gray"></i></a><div class="header_bottom_nav_left_list_item_wrap"><ul class="header_bottom_nav_left_list_item ul_in_row clearfix"><li><a href="javascript:void(0);">手机商家</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">电脑及配件</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">厨房电器件</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">只能生活</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">个人保健</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">显示器</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">油烟机</a></li></ul><ul class="header_bottom_nav_left_list_item ul_in_row clearfix"><li><a href="javascript:void(0);">手机商家</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">电脑及配件</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">厨房电器件</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">只能生活</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">个人保健</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">显示器</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">油烟机</a></li></ul><ul class="header_bottom_nav_left_list_item ul_in_row clearfix"><li><a href="javascript:void(0);">手机商家</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">电脑及配件</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">厨房电器件</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">只能生活</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">个人保健</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">显示器</a></li><li class="spacer">|</li><li><a href="javascript:void(0);">油烟机</a></li></ul></div></li><li><a href="industrySeller.html?industry=丽人" target="_blank">丽人<i class="right_arrow_gray"></i></a><div class="header_bottom_nav_left_list_item_wrap"><ul class="header_bottom_nav_left_list_item clearfix"><li></li></ul></div></li><li><a href="industrySeller.html?industry=本地生活" target="_blank">本地生活<i class="right_arrow_gray"></i></a><div class="header_bottom_nav_left_list_item_wrap"><ul class="header_bottom_nav_left_list_item clearfix"><li></li></ul></div></li><li><a href="industrySeller.html?industry=购物" target="_blank">购物<i class="right_arrow_gray"></i></a><div class="header_bottom_nav_left_list_item_wrap"><ul class="header_bottom_nav_left_list_item clearfix"><li></li></ul></div></li><li><a href="industrySeller.html?industry=电子数码" target="_blank">电子数码<i class="right_arrow_gray"></i></a><div class="header_bottom_nav_left_list_item_wrap"><ul class="header_bottom_nav_left_list_item clearfix"><li></li></ul></div></li></ul></div></div><div class="header_bottom_nav_right inline_block v_t"><ul class="header_bottom_nav_right_list clearfix"><li><a class="b_nav_clicked" href="index.html">首页</a></li><li><a href="brand.html">精选商家</a></li><li><a href="special.html">今日特价</a></li><li><a href="points.html">积分商城</a></li><li><a href="join.html">加入易和</a></li><li><a href="javascript:void(0);">在线客服</a><ul class="header_bottom_nav_right_list_drop"><li><a href="javascript:void(0);"><i class="server"></i>QQ客服1</a></li><li><a href="javascript:void(0);"><i class="server"></i>QQ客服2</a></li><li><a href="javascript:void(0);"><i class="server"></i>QQ客服3</a></li><li><img src="../img/1463465367588.png"></li></ul><i class="top_arrow_white"></i></li></ul></div></div></div></div>';
	$(".body").before(header);
	//商家、商品切换
	$(".header_middle_search_top li a").click(function(){
		$(".header_middle_search_top li a").removeClass("m_nav_clicked");
		$(this).addClass("m_nav_clicked");
		hotSearchShow($(this).parent().index());
	});
	//搜索框
	$("#search").blur(function(){
		var href = page[$(".m_nav_clicked").parent().index()] + "?type=" + $(".m_nav_clicked").parent().index() + "&word=";
		if ($("#search").val() == "" || $("#search").val().indexOf(" ") > 0) {
			href = "index.html"; 
		}else{
			href += $("#search").val();
		}
		$(".search_btn").parent().attr("href",href);
	});
	//头部左侧下拉框
	$(".header_bottom_nav_left").hover(function(){
		$(".header_bottom_nav_left_list_wrap").show();
	},function(){
		$(".header_bottom_nav_left_list_wrap").hide();
	});
	//头部左侧二级列表
	$(".header_bottom_nav_left_list>li").hover(function(){
		$(this).find("div").show();
	},function(){
		$(this).find("div").hide();
	});
	//在线客服列表
	$(".header_bottom_nav_right_list>li:nth-last-of-type(1)").hover(function(){
		$(this).children().not("a").show();
	},function(){
		$(this).children().not("a").hide();
	});
});
//热门搜索请求商家、商品
function hotSearchShow(index){
	$.get("../testTxt/hotSearch.txt",function(data){
		var obj = JSON.parse(data);
		var hotWord = "<li>热门:</li>";
		var page = ["brandResult.html","goodResult.html"];
		for (var i = 0; i < obj[index].length; i++) {
			hotWord += '<li><a href="' + page[index] + '?type=' + index + '&word=' + obj[index][i]  + '" target="_blank">' + obj[index][i] + '</a></li>';
		}
		$(".header_middle_search_bottom").html(hotWord);
	});
}