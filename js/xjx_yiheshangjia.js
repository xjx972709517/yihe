window.onload = function(){
	var times = sessionStorage.lisN;
	if (times) {
		$($('.yihe_select .yihe_left li')[times]).css({'color':'white','background-color':'#008de1'});
		$(document).scrollTop($('.xjx_jifen').position().top);
		
	}
}
$(function(){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	
	$('.carousel').carousel();
	
	$('.home_goods').mouseover(function(){
		$('.home_goods').removeClass('active');
		$(this).addClass('active');
	});
	$('.home_goods').mouseout(function(){
		$(this).removeClass('active');
	});
	$('.yihe_left').mouseover(function(){
		$('.yihe_right').show();
	});
	$('.yihe_select').mouseout(function(){
		$('.yihe_right').mouseover(function(){
			$('.yihe_right').show();
		});
		$('.yihe_right').mouseout(function(){
			$('.yihe_right').hide();
		});
		$('.yihe_right').hide();
	});
	$('.yihe_left>li').mouseover(function(){
		$('.yihe_right>div').removeClass('active');
		for (var i = 0; i < $('.yihe_left>li').length; i++) {
			$('.yihe_left>li')[i].num = i;
		}
		$($('.yihe_right>div')[$(this)[0].num]).addClass('active');
	});
	$('.yihe_shangjia .yihe_left>li').click(function(){
		$('.yihe_left>li').css({'color':'black','background-color':'white'});
		$(this).css({'color':'white','background-color':'#008de1'});
		$(document).scrollTop($('.xjx_jifen').position().top);
		
	});
});