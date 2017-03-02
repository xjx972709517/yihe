$(function (){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	
	$('.carousel').carousel();
	var bool = true;
	$('con_weiyi .title_right>span').mouseover(function(){
		for (var i = 0; i < $('con_weiyi .title_right>span').length; i++) {
			$('con_weiyi .title_right>span')[i].id = i;
		}
		if (bool) {
			bool = false;
			$('con_weiyi  .method_right .home_goods').addClass('active');
			setTimeout(function(){
				$('con_weiyi .method_right .home_goods').removeClass('active');
				bool = true;
			}, 2000);
		}
	});
	$('.title_tuijian').mouseover(function(){
		$($(this).parents()[1]).find('.title_nav').animate({'left':'340px'},500);
		
	});
	$('.title_nvzhuang').mouseover(function(){
		$($(this).parents()[1]).find('.title_nav').animate({'left':'480px'},500);
		
	});
	$('.title_nanzhuang').mouseover(function(){
		$($(this).parents()[1]).find('.title_nav').animate({'left':'620px'},500);
		
	});
	$('.home_goods').mouseover(function(){
		$('.home_goods').removeClass('active');
		$(this).addClass('active');
	});
	$('.home_goods').mouseout(function(){
		$(this).removeClass('active');
	});
	$('.home_goods').click(function(){
		sessionStorage.zhuPage = 0;
		location.href = 'xjx_shop.html';
	});
});