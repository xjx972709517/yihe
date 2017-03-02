$(function (){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	
	$('.img_all input').change(function(){
		var img = "<img src='"+getImgURL(this)+"' />";
		$(this).siblings('.img_tu').html(img);
		$(this).siblings('.img_tu').css('background-color','white');
		$(this).siblings('.img_tu').show();
	});
});