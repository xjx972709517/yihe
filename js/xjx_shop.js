$(document).ready(function(){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	
	$('.nav_show>li').click(function(i,v){
		$(this).css('background','white');
		$(this).siblings().css('background','#f2f2f2');
		$('.nav_show>li').css('border-bottom','1px solid lightgray');
		$(this).css('border-bottom','none');
	});
	$('.small_pic_intro').click(function(){
		location.href = 'xjx_goods.html';
	});
	
	var index = 2;
	var num;
	var run;
	var bool = true;
	var left;
	$('.goods_prev').click(function(){
		if (bool) {
			bool = false;
			index--;
			$('.goods_big ul').css('left',left+'px');
			$('.goods_small ul li').removeClass('active');
			$($('.goods_small ul li')[index]).addClass('active');
			num = 30 - 75*index;
			run = 0 - 360*index;
			left = run;
			$('.goods_big ul').animate({'left':run+'px'},500);
			$('.goods_small ul').animate({'left':num+'px'},500,function(){
				if (index == 0) {
					index = 4;
					left = -1440;
					$('.goods_small ul').css('left','-270px');
					$('.goods_big ul').css('left','-1440px');
					$('.goods_small ul li').removeClass('active');
					$($('.goods_small ul li')[index]).addClass('active');
				}
				bool = true;
			});
		}
	});
	$('.goods_next').click(function(){
		if (bool) {
			bool = false;
			index++;
			$('.goods_big ul').css('left',left+'px');
			$('.goods_small ul li').removeClass('active');
			$($('.goods_small ul li')[index]).addClass('active');
			num = 30 - 75*index;
			run = 0 - 360*index;
			left = run;
			$('.goods_big ul').animate({'left':run+'px'},500);
			$('.goods_small ul').animate({'left':num+'px'},500,function(){
				console.log(index)
				if (index == 4) {
					index = 0;
					left = 0;
					$('.goods_big ul').css('left','0px');
					$('.goods_small ul').css('left','30px');
					$('.goods_small ul li').removeClass('active');
					$($('.goods_small ul li')[index]).addClass('active');
				}
				bool = true;
			});
		}
	});
	$('.goods_small ul li').click(function(){
		$('.goods_small ul li').removeClass('active');
		$(this).addClass('active');
		for (var i = 0; i < $('.goods_small ul li').length; i++) {
			$('.goods_small ul li')[i].id = i;
		}
		$('.goods_big ul').animate({'left':-$(this)[0].id*360+'px'},500);
	});
	$('.small').mouseover(function(){
		$('.zoom').show();
		$('.big').show();
		$('.goods_show .goods_fangda').show();
	});
	$('.small').mouseout(function(){
		$('.zoom').hide();
		$('.big').hide();
		$('.goods_show .goods_fangda').hide();
	});
	$('.small').mousemove(function(event){
		for (var i = 0; i < $('.small').length; i++) {
			$('.small')[i].id = i;
		}
		var x = event.clientX - $('.zoom').outerWidth()/2 - $('.goods_show').offset().left;
		var y = event.clientY - $('.zoom').outerHeight()/2 - $('.goods_show').offset().top + $(document).scrollTop();
		//边界限制
		//获取横向可移动的最大距离
		var maxX = $('.small').outerWidth() - $('.zoom').outerWidth();
		//获取纵向可移动的最大距离
		var maxY = $('.small').outerHeight() - $('.zoom').outerHeight();
		if(x < 0){
			x = 0;
		}
		if(x > maxX){
			x = maxX;
		}
		if(y < 0){
			y = 0;
		}
		if(y > maxY){
			y = maxY;
		}
		$($('.zoom')[$(this)[0].id]).css('left',x + 'px');
		$($('.zoom')[$(this)[0].id]).css('top',y + 'px');
		$($('.big')[$(this)[0].id]).scrollLeft(($('.big img').outerWidth() - $('.big').innerWidth()) * x/maxX);
		$($('.big')[$(this)[0].id]).scrollTop(($('.big img').outerHeight() - $('.big').innerHeight()) * y/maxY);
	});
});

