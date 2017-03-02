$(function(){
	$('#footer').load('jx_bottom.html');
	
	$('.denglu_shoujihao').keydown(function(event){
		if (!(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 8)) {
			event.preventDefault();
		}
	});
	$('.denglu_shoujihao').blur(function(){
		if (/^1\d{10}$/.test($(this).val())) {
			$(this).next().show();
			$(this).parent().find('.denglu_tishouji').css('visibility','hidden');
		}else {
			$(this).next().hide();
			$(this).parent().find('.denglu_tishouji').css('visibility','visible');
		}
	});
	$('.denglu_mima').blur(function(){
		if ($(this).val().length != 0) {
			$(this).next().show();
			$(this).parent().find('.denglu_timima').css('visibility','hidden');
		}else {
			$(this).next().hide();
			$(this).parent().find('.denglu_timima').css('visibility','visible');
		}
	});
	$('.denglu_ma').keypress(function(event){
		if ($(this).val().length > 4) {
			$(this).val($(this).val().substr(0,4));
		}
	});
	$('.denglu_ma').blur(function(){
		if ($(this).val().length != 0) {
			$(this).parent().find('.denglu_tima').css('visibility','hidden');
		}else {
			$(this).parent().parent().find('.denglu_tima').css('visibility','visible');
		}
	});
});