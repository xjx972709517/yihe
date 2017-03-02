$(function() {
	if(localStorage.phone_num1){
	$.ajax({
		type: "get",
		url: "myTicket.php",
		async: true,
		data: {
			tab: 'select'
		},
		success: function(data) {
			for(var item in data) {
				var d = JSON.parse(data);
				if( d[item].account==localStorage.phone_num1){
				//			console.log(d);
				var inform = '<tr>\
									<td>' + d[item].time + '</td>\
									<td class="two_row" id=' + d[item].tiket_num + '>' + d[item].tiket_num + '</td>\
									<td>' + d[item].enterMoney + '</td>\
									<td>' + d[item].moneyRemain + '</td>\
								</tr>'

				$('.myCount_ticket').html(d[item].moneyRemain);
				$('.count_remain2').html(d[item].moneyRemain);
				//					console.log(d[item].moneyRemain);
				$('.one_raw').after(inform);

			}
			}
		}

	});
	}
});
$(function() {
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	$('.enter_money').click(function() {
//				alert(localStorage.phone_num1)
				if(localStorage.phone_num1){
			//这个题的重点是把nums从tr中获取到,持续的增加,而不会在刷新之后重新计算.❗️❗️
//		var nums = $('.two_row').attr('id') - 0 + 1;
//		if(!nums) {
//			nums = 411365589659;
//			
//		}
		var nums=411365589659;

		var enter_money1 = $('#ticket_count').val();
		var money_remain = Number($('#ticket_count').val()) + Number($('.count_remain2').html());
		var time = new Date();
		// 程序计时的月从0开始取值后+1
		var m = time.getMonth() + 1;
		var t = time.getFullYear() + "-" + m + "-" +
			time.getDate() + " " + time.getHours() + ":" +
			time.getMinutes() + ":" + time.getSeconds();
		if($('#ticket_count').val() != "") {

			var ww = money_remain
			$.ajax({
				type: "get",
				url: "myTicket.php",
				data: {
					tab: 'insert',
					account: localStorage.phone_num1,
					time: t,
					tiket_num: nums,
					moneyRemain: money_remain,
					enterMoney: $('#ticket_count').val()
				},

				success: function(data) {
					console.log(data)
					var inform = '<tr>\
									<td>' + t + '</td>\
									<td class="two_row" >' + nums + '</td>\
									<td>' + enter_money1 + '</td>\
									<td>' + money_remain + '</td>\
								</tr>'
					$('.count_remain2').html(ww);
					$('.one_raw').after(inform);

				}
			})

		}

		$("#ticket_count").val("");
		}else{
			alert('请您先登录再充值');
		}
	});
});