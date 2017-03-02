$(function (){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	$('.quxiao_btn').click(function(){
		$('.join_jianyi').hide();
	});
	$('.yonghu_jianyi').click(function(){
		$('.join_jianyi').show();
	});
	$('.jianyi_con').keypress(function(){
		$(this).val($(this).val().slice(0,200));
	});
	$('.shangjia_shenqing').click(function(){
		sessionStorage.zhuPage = 4;
		location.href = 'xjx_apply.html';
	});
});