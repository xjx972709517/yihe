$(function(){
	$('.order_pay').html(sessionStorage.payMoney);
	$('.myAddress .name').html(sessionStorage.name);
	$('.myAddress .area').html(sessionStorage.province);
	$('.myAddress .city').html(sessionStorage.city);
	$('.myAddress .proper').html(sessionStorage.district);
	$('.myAddress .detail').html(sessionStorage.detail);
	$('.myAddress .phone').html(sessionStorage.phone);
	$('.myAddress .telephone').hide();
	
});
$(function (){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	$('.order_payBtn').click(function(){
		for (var i = 0; i < $('.order_method input').length; i++) {
			if ($($('.order_method input')[i]).prop('checked')) {
				return $('.order_pop').show();
			}
		}
		return alert('请选择支付方式');
	});
	$('.order_noBtn').click(function(){
		$('.order_pop').hide();
	});
	$('.order_yesBtn').click(function(){
		location.href = 'xjx_orderSuccess.html';
	});
});