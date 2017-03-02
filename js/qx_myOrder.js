$(function (){
		$("#header").load("xjx_top.html");
		$("#footer").load("jx_bottom.html");
	});
//导航条的实现
$('.myOrderer_content_top>li').click(function(i,v) {
	$('.myOrderer_content_top>li').children().css('background',' #f2f2f2')
	$(this).children().css('background','orange')

})
//删除所选的订单的js操作
$('.delete_order').click(function(){
$(this).parent().parent().parent().remove()
})
$("#delete_order1").click(function(){
location.href="qx_goods_appraise.html"
})
