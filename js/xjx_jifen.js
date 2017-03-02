$(function() { //调用插件
	$.fn.citySelect();
	
	$('.carousel').carousel();
});
$(function() {
	form1 = $('form[name=form1]'),
		prev = $('input[name=cho_Province]', form1),
		city = $('input[name=cho_City]', form1),
		area = $('input[name=cho_Area]', form1),
		value = ['请选择省份', '请选择城市', '请选择地区'];
	form1.submit(function() {
		if(prev.val() == value[0]) {
			alert(value[0]);
			return false;
		};
		if(city.val() == value[1]) {
			alert(value[1]);
			return false;
		};
		if(area.val() == value[2]) {
			alert(value[2]);
			return false;
		}
	});
});
$(function(){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	
	$('.jifen_shangpin').mouseover(function(){
		$('.jifen_shangpin').removeClass('active');
		$(this).addClass('active');
	});
	$('.jifen_shangpin').mouseout(function(){
		$(this).removeClass('active');
	});
	$('.jifen_btn').click(function(){
		$('.cart_tianjia').show();
	});
	$('.area_fanhui').click(function(){
		$('.cart_tianjia').hide();
	});
});