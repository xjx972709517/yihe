$(function (){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	
	$('.order_seeBtn').click(function(){
		location.href = 'qx_myCount.html';
	});
});