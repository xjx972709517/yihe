$(function() {
	$('#footer').load('jx_bottom.html');
	$('.denglu_zhu').click(function() {
		location.href = 'xjx_denglu.html';
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
		$.ajax({
			type: "get",
			url: "amend_password_select.php",
			success: function(data) {
				var d = JSON.parse(data);
				for(var item in d) {
					console.log(d[item].account);
					if(/^1\d{10}$/.test($('.denglu_shoujihao').val())&&d[item].account != $('.denglu_shoujihao').val()) {
						$('.denglu_phone>img').show();
						$(this).parent().find('.denglu_tishouji').css('visibility', 'hidden');
					} else {
						$(this).next().hide();
						$(this).parent().find('.denglu_tishouji').css('visibility', 'visible');
					}
				}
			}
		});
	});
	$('.denglu_mima').blur(function() {
		if($(this).val().length < 6 || $(this).val().length > 20) {
			$(this).val('');
		}
		if($(this).val().length != 0) {
			$(this).next().show();
			$(this).parent().find('.denglu_timima').css('visibility', 'hidden');
		} else {
			$(this).next().hide();
			$(this).parent().find('.denglu_timima').css('visibility', 'visible');
		}
	});
	$('.denglu_queren').blur(function() {
		if($(this).val().length == 0) {
			$(this).next().hide();
			return $(this).parent().find('.denglu_tiquren').css('visibility', 'visible');
		}
		if($(this).val() == $('.denglu_mima').val()) {
			$(this).next().show();
			$(this).parent().find('.denglu_tiquren').css('visibility', 'hidden');
		} else {
			$(this).next().hide();
			$(this).parent().find('.denglu_tiquren').css('visibility', 'visible');
		}
	});
	$('.denglu_ma,.denglu_shoujicode').keypress(function(event) {
		if($(this).val().length > 4) {
			$(this).val($(this).val().substr(0, 4));
		}
	});
	$('.denglu_ma').blur(function() {
		if($(this).val().length != 0) {
			$(this).parent().next().css('visibility', 'hidden');
		} else {
			$(this).parent().next().css('visibility', 'visible');
		}
	});

	//注册时先不要往数据库中存数据❗️❗️
	$('.denglu_deng').click(function() {

		$.ajax({
			type: "get",
			url: "amend_password_select.php",
			success: function(data) {
				var d = JSON.parse(data);
				console.log(data);
				for(var item in d) {
					console.log(d[item].account)
					if(d[item].account == $('.denglu_shoujihao').val() && $('.denglu_shoujihao').val() != "" && /^1\d{10}$/.test($('.denglu_shoujihao').val())) {
						$('.denglu_shoujihao').val('你的手机号已注册,请选用其他账号!!!');
						$('.denglu_phone>img').hide();

					} else if(/^1\d{10}$/.test($('.denglu_shoujihao').val()) && d[item].account != $('.denglu_shoujihao').val()&&$('.denglu_mima').val()!="") {
						//出现一个弹出框,显示注册成功❗️❗️
						
						$('#layer').html('恭喜你,注册成功!');
						setTimeout("$('#layer').hide()", 2000);
						//此时把数据插入到数据库❗️❗

						$.ajax({
							type: "get",
							url: "amend_password_insert.php",
							async: true,
							data: {
								account: $('.denglu_shoujihao').val(),
								password: $('.denglu_mima').val()
							},
							success: function(data) {
								console.log(data);
								localStorage.phone_num1 = data;

							}

						})

						setTimeout('location.href="qx_myCount.html"', 2100);

					}else if(/^1\d{10}$/.test($('.denglu_shoujihao').val()) && d[item].account != $('.denglu_shoujihao').val()){
						$('#layer1').html('请输入密码!!!');
						setTimeout('$("#layer").hide()', 1000);
					}
					//					else {
					//						$(this).next().hide();
					//						$(this).parent().find('.denglu_tishouji').css('visibility', 'visible');
					//					}
				}

				$('.denglu_shoujihao').focus(function() {
					$(this).val('');
				})
			}

		});

	});

	//弹窗的调用和实现,使用函数的调用❗️❗️
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
		$('.denglu_ma,.denglu_shoujicode').blur(function(){
			$(layer).hide();
		});
	};

	function randomNum(x, y) {
		return Math.floor(Math.random() * (y - x + 1) + x);
	}

	//

	$('#blur_change1').click(function() {

		tanchuang();
	});
	$('#click_request').click(function() {
		tanchuang();
	})

});