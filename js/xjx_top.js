$(function(){
	$('.xjx_xiala>span').removeClass('active');
	var num = sessionStorage.zhuPage;
	if (num) {
		$($('.xjx_xiala>span')[num]).addClass('active');
	}
	var address = sessionStorage.address;
	if (address) {
		$('.dizhi').html(address);
	}else {
		location.href = 'yindao.html';
	}
	if(localStorage.phone_num1 != 'null' && localStorage.phone_num1){
		//首页中的登录两个字变化为手机号码❗️❗️
		$('.xjx_login').html('退出');
		$('.xjx_register').html(localStorage.phone_num1).css('color','red');
		$('.xjx_mine,.xjx_order').click(function(){
			sessionStorage.zhuPage = null;
			location.href = 'qx_myCount.html';
		});
		$('.xjx_login').click(function(){
			sessionStorage.zhuPage = null;
			localStorage.phone_num1 = null;
			location.href = 'xjx_home.html';
		});
		$('.xjx_xiaoxi').click(function(){
			sessionStorage.zhuPage = null;
			location.href = 'qx_my_message.html';
		});
	}else{
		$('.xjx_login').html('登录');
		$('.xjx_register').html('注册').css('color','#999');;
		$('.xjx_mine,.xjx_order,.xjx_xiaoxi').click(function(){
			return alert('请登录');
		});
		$('.xjx_login').click(function(){
			sessionStorage.zhuPage = null;
			location.href = 'xjx_denglu.html';
		});
		$('.xjx_register').click(function(){
			sessionStorage.zhuPage = null;
			location.href = 'xjx_zhuce.html';
		});
	}
	$.ajax({
		type:"get",//请求方式
		url:"yiheCart.php",//请求网址
		async:true,
		data:{
			operation:'select'
		},
		success:function(data){
			var data = JSON.parse(data);
			$('.xjx_counts span').html(data['dataList'].length);
		}
	});
});
$(function(){
	var arr1 = ['烤肉','红牛','美发'];
	var arr2 = ['酒店','洗车','餐饮','进口','旅游','如家'];
	$('.xjx_goods').click(function(){
		$('.xjx_hot').html('<span class="pointer">热门:</span>');
		for (var i = 0; i < arr1.length; i++) {
			var span = '<span class="pointer">'+arr1[i]+'</span>';
			$('.xjx_hot').append(span);
		}
		$('.xjx_shop').removeClass('active');
		$(this).addClass('active');
	});
	$('.xjx_shop').click(function(){
		$('.xjx_hot').html('<span class="pointer">热门:</span>');
		for (var i = 0; i < arr2.length; i++) {
			var span = '<span class="pointer">'+arr2[i]+'</span>';
			$('.xjx_hot').append(span);
		}
		$('.xjx_goods').removeClass('active');
		$(this).addClass('active');
	});
	$('.xjx_kefu>span').mouseover(function(){
		$('.xjx_hide').show();
	});
	$('.xjx_kefu>span').mouseout(function(){
		$('.xjx_hide').mouseover(function(){
			$(this).show();
		});
		$('.xjx_hide').mouseout(function(){
			$(this).hide();
		});
		$('.xjx_hide').hide();
	});
	$('.xjx_fenlei').mouseover(function(){
		$('.xjx_select').show();
	});
	$('.xjx_fenlei').mouseout(function(){
		$('.xjx_select').mouseover(function(){
			$(this).show();
		});
		$('.xjx_select').mouseout(function(){
			$(this).hide();
		});
		$('.xjx_select').hide();
	});
	$('.xjx_left>li').mouseover(function(){
		$('.xjx_right>div').removeClass('active');
		for (var i = 0; i < $('.xjx_left>li').length; i++) {
			$('.xjx_left>li')[i].num = i;
		}
		$($('.xjx_right>div')[$(this)[0].num]).addClass('active');
	});
	$('.xjx_xiala>span').click(function(){
		for (var i = 0; i < $('.xjx_xiala>span').length; i++) {
			$('.xjx_xiala>span')[i].id = i;
		}
		sessionStorage.zhuPage = $(this)[0].id;
		switch ($(this)[0].id-0){
			case 0:
			location.href = 'xjx_home.html';
				break;
			case 1:
			location.href = 'xjx_pinpai.html';
				break;
			case 2:
			location.href = 'xjx_jinritejia.html';
				break;
			case 3:
			location.href = 'xjx_jifen.html';
				break;
			case 4:
			location.href = 'xjx_jiaruYH.html';
				break;
		}
	});
	$('.input_search').click(function(){
		var search = $($(this).parents()[1]).find('.xjx_toggle .active').html();
		var bool = /[海澜之家旗舰店]/.test($('.xjx_input input').val());
		if ($('.xjx_input input').val().length == 0) {
			return;
		}
		sessionStorage.zhuPage = null;
		if (search == '商家' && bool) {
			location.href = 'xjx_searchShop.html';
		}else if(search == '商品' && bool){
			location.href = 'xjx_searchGoods.html';
		}else {
			location.href = 'xjx_searchK.html';
		}
	});
	$('.xjx_business').click(function(){
		sessionStorage.zhuPage = null;
		location.href = 'xjx_shangjiaDL.html';
	});
	$('.xjx_arealeft').click(function(){
		sessionStorage.zhuPage = 0;
		location.href = 'xjx_toggle.html';
	});
	$('.xjx_left li').click(function(){
		for (var i = 0; i < $('.xjx_left li').length; i++) {
			$('.xjx_left li')[i].id = i;
		}
		sessionStorage.lisN = $(this)[0].id;
		sessionStorage.zhuPage = null;
		location.href = 'xjx_yiheshangjia.html';
	});
	$('.xjx_right .xjx_con span').click(function(){
		sessionStorage.zhuPage = 0;
		location.href = 'xjx_shop.html';
	});
	$('.xjx_cart').click(function(){
		sessionStorage.zhuPage = null;
		location.href = 'xjx_cart.html';
	});
	
});