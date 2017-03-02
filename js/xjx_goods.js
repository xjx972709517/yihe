$(function(){
	
	$('.xinghao:not(.ban)').click(function(){
		$('.xinghao').removeClass('active');
		$(this).addClass('active');
	});
	$('.yanse:not(.ban)').click(function(){
		$('.yanse').removeClass('active');
		$(this).addClass('active');
	});
	$('.num_jian').click(function(){
		$('.counts_select').val(function(i,v){
			if (v == 1) {
				return v;
			}
			return v-1;
		});
	});
	$('.num_jia').click(function(){
		zengjia(10);
	});
	$('.goods_shoucang').click(function(){
		$(this).toggleClass('active');
	});
	$('.goods_jiaru').click(function(){
		
		$.ajax({
			type:"get",//请求方式
			url:"yiheCart.php",//请求网址
			async:true,
			data:{
				operation:'insert',
				goodsName:$('.goods_name').html(),
				goodsImg:$('.goods_big img').attr('src'),
//				goodsInfo:$('.goods_jieshao').html(),
				goodsInfo:'北京保利龙旗广场',
				goodsSize:$('.goods_chima .active').html(),
				goodsColor:$('.goods_yanse .active').html(),
				goodsPrice:$('.new_price').html(),
				goodsNum:$('.counts_select').val()
			},
			//dataType:"json",//后台返回的数据类型
			success:function(data){
				
				$('.xjx_counts span').html(function(i,v){
					return v-0+1;
				});
				$('.jiaru_wrap').show();
				$('.goods_chakan').click(function(){
					sessionStorage.zhuPage = null;
					location.href = 'xjx_cart.html';
				});
			}
		});
		
	});
	$('.goods_jixu').click(function(){
		$('.jiaru_wrap').hide();
	});
	$('.shop_shangjia').click(function(){
		location.href = 'xjx_shop.html';
	});
	$('.goods_information>li').click(function() {
		for (var i = 0; i < $('.goods_information>li').length; i++) {
			$('.goods_information>li')[i].id = i;
		}
		$('.goods_information>li').css('background','#f2f2f2');
		$(this).css('background', 'white');
		$('.goods_information>li').removeClass('active');
		$(this).addClass('active');
		$('.goods_con').removeClass('active');
		$($('.goods_con')[$(this)[0].id]).addClass('active');
	});
	$('.goods_liji').click(function(){
		sessionStorage.zhuPage = null;
		location.href = 'xjx_cart.html';
	});
	
	function zengjia(max){
		$('.counts_select').val(function(i,v){
			if (v == max) {
				return v;
			}
			return v-0+1;
		});
	}
});

