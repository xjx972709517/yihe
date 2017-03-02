$(function() {
	if (localStorage.auto == 'yes') {
		$('.denglu_shoujihao').val(localStorage.phone_num);
		$('.denglu_mima').val(localStorage.phone_pw);
		$('.denglu_bottom input').prop('checked',true);
	}else {
		$('.denglu_shoujihao').val('');
		$('.denglu_mima').val('');
		$('.denglu_bottom input').prop('checked',false);
	}
	$('#footer').load('jx_bottom.html');
	$('.denglu_zhu').click(function() {
		location.href = 'xjx_zhuce.html';
	});
	$('.xjx_business').click(function() {
		location.href = 'xjx_shangjiaDL.html';
	});

	$('.denglu_shoujihao').keydown(function(event) {
		if(!(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 8)) {
			event.preventDefault();
		}
	});
	$('.denglu_shoujihao').blur(function() {
		if(/^1\d{10}$/.test($(this).val())) {
			$(this).next().show();
			$(this).parent().find('.denglu_tishouji').css('visibility', 'hidden');
		} else {
			$(this).next().hide();
			$(this).parent().find('.denglu_tishouji').css('visibility', 'visible');
		}
	});
	$('.denglu_mima').blur(function() {
		if($(this).val().length != 0) {
			$(this).next().show();
			$(this).parent().find('.denglu_timima').css('visibility', 'hidden');
		} else {
			$(this).next().hide();
			$(this).parent().find('.denglu_timima').css('visibility', 'visible');
		}
	});
	
	$('.denglu_ma').keypress(function(event) {
		if($(this).val().length > 4) {
			$(this).val($(this).val().substr(0, 4));
		}
	});
	$('#blur_change').click(function() {
		tanchuang();
	});

	$('.denglu_deng').click(function() {
		$.ajax({
			type: "get",
			url: "amend_password_select.php",
			success: function(data) {
				var dataArr = JSON.parse(data);
				
				for(var i in dataArr) {
					if(dataArr[i].account == $('.denglu_shoujihao').val() && dataArr[i].password == $('.denglu_mima').val() && $('.denglu_ma').val() == $('#layer .ma').html()) {
						$('#layer').hide();
						localStorage.phone_num1 = dataArr[i].account;
						if ($('.denglu_bottom input').prop('checked')) {
							localStorage.phone_num = dataArr[i].account;
							localStorage.phone_pw = dataArr[i].password;
							localStorage.auto = 'yes';
						}else {
							localStorage.auto = 'no';
						}
						location.href = "xjx_home.html";
						return;
					}
				}
				$('#layer').show();
				$('#layer').html('您输入有误,请重新输入!!!');
				setTimeout('$("#layer").hide()', 1000);
			}
		});
	});

	//验证码的设置**********************
	
	function tanchuang() {
		var nums1 = [];
		while(nums1.length != 4) {
			nums1.push([randomNum(0, 9)]);
		}
		nums = nums1.join('');
		$('#layer').show();
		$('#layer').html('<p class="zi">验证码为:</p><p class="ma">' + nums + '</p>');
		$('#layer').click(function(){
			$(this).hide();
		});
		$('.denglu_ma').blur(function(){
			$(layer).hide();
		});
	};

	function randomNum(x, y) {
		return Math.floor(Math.random() * (y - x + 1) + x);
	}
});