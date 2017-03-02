$(function(){
	if (location.href.indexOf("xjx_confirmAdd") == -1) {
		//获取地址数据
		$.ajax({
			type:"get",//请求方式
			url:"yiheAddress.php",//请求网址
			async:true,
			data:{
				operation:'select'
			},
			success:function (data) {
				var arr = JSON.parse(data)['dataList'];
				var name,province,city,district,detail,phone,telephone,num;
				for (var i = 0; i < arr.length; i++) {
					name = arr[i].name;
					province = arr[i].province;
					city = arr[i].city;
					district = arr[i].district;
					detail = arr[i].detail;
					moren = arr[i].moren;
					num = arr[i].id;
					if (arr[i].phone) {
						phone = '手机' + arr[i].phone;
					}else {
						phone = '固定电话' + arr[i].telephone;
					}
					var add = 
'<div class="radio" num='+num+'>\
	<label>\
		<input class="cart_xuanze" type="radio" name="address">\
		<span class="myAddress">\
			<span class="name">'+name+'</span>\
			<span class="area">'+province+'</span>\
			<span class="city">'+city+'</span>\
			<span class="proper">'+district+'</span>\
			<span class="detail">'+detail+'</span>\
			<span class="phone">'+phone+'</span>\
		</span>\
		<span class="morenAddress">默认地址</span>\
	</label>\
	<span class="chuliAddress pointer">\
		<span class="setMoren">设置为默认地址</span>\
		<span class="xiugaiBtn">修改</span>\
		<span class="shanchuBtn">删除</span>\
	</span>\
</div>';
					$(add).addClass('cart_zhankai');
					if (moren == 'yes') {
						$(add).find('.morenAddress').addClass('active');
						$(add).find('.setMoren').addClass('active');
					}
					if (i < arr.length-3) {
						$(add).addClass('cart_zhankai');
					}
					if (i == arr.length-1) {
						$(add).addClass('active');
						$(add).find('input').prop('checked',true);
					}
					$('#manageAddress').prepend(add);
				}
				$('#manageAddress .radio').eq(0).addClass('active');
				$('#manageAddress .radio').eq(0).find('input').prop('checked',true);
				
				for (var i = 0; i < arr.length; i++) {
					moren = arr[i].moren;
					if (moren == 'yes') {
						$('#manageAddress .radio').eq(arr.length-1-i).find('.morenAddress').addClass('active');
						$('#manageAddress .radio').eq(arr.length-1-i).find('.setMoren').addClass('active');
					}
				}
				for (var i = 3; i < arr.length; i++) {
					$('#manageAddress .radio').eq(i).addClass('cart_zhankai');
				}
				dizhiCaozuo();
			}
		});
		
		$('.area_baocun').click(function(){
			var jud = $(this).parents().eq(3).find('.area_tianjia span').html();
			if (jud == '添加地址') {
				//添加新地址
				var name = $('.shouhuoName').val();
				var province = $('#Province i').html();
				var city = $('#City i').html();
				var district = $('#Area i').html();
				var detail = $('.detailArea').val();
				var phone = $('.lianxiPhone').val();
				var quhao = $('.quhao').val();
				var guhua = $('.gudingPhone').val();
				var telephone = quhao + '−' + guhua;
				if ($('.cart_moren').prop('checked')) {
					var moren = 'yes';
				}else {
					var moren = 'no';
				}
				
				var jud1 = name.length == 0 || detail.length == 0 || province == '请选择省份' || city == '请选择城市' || district == '请选择地区';
				if (jud1) {
					return alert('请填写完整信息');
				}
				var jud2 = phone.length == 0 && (quhao.length == 0 || guhua.length == 0);
				if (jud2) {
					return alert('请填写联系方式');
				}
				if (phone.length != 0 && !/^1\d{10}$/.test(phone)) {
					return alert('请输入正确手机号');
				}
				if (quhao.length != 0 && guhua.length != 0) {
					if (!/0\d{2,3}/.test(quhao)) {
						return alert('请输入正确区号');
					}else if(!/\d{7,8}/.test(guhua)){
						return alert('请输入正确电话号');
					}
				}
				$.ajax({
					type:"get",//请求方式
					url:"yiheAddress.php",//请求网址
					async:true,
					data:{
						operation:'insert',
						name:name,
						province:province,
						city:city,
						district:district,
						detail:detail,
						phone:phone,
						telephone:telephone,
						moren:moren,
						all:'all'
					},
					success:function (data) {
						if (moren == 'yes') {
							$.ajax({
								type:"get",//请求方式
								url:"yiheAddress.php",//请求网址
								async:true,
								data:{
									operation:'reset',
									id:num
								},
								success:function (data) {
									$('.cart_tianjia').hide();
									if (phone) {
										var haoma = '手机' + phone;
									}else {
										var haoma = '固定电话' + telephone;
									}
									$('#manageAddress .radio').removeClass('active');
									var div = 
'<div class="radio active">\
	<label>\
		<input class="cart_xuanze" type="radio" name="address" checked>\
		<span class="myAddress">\
			<span class="name">'+name+'</span>\
			<span class="area">'+province+'</span>\
			<span class="city">'+city+'</span>\
			<span class="proper">'+district+'</span>\
			<span class="detail">'+detail+'</span>\
			<span class="phone">'+haoma+'</span>\
		</span>\
		<span class="morenAddress">默认地址</span>\
	</label>\
	<span class="chuliAddress pointer">\
		<span class="setMoren">设置为默认地址</span>\
		<span class="xiugaiBtn">修改</span>\
		<span class="shanchuBtn">删除</span>\
	</span>\
</div>';
				console.log($(div))
									if (moren == 'yes') {
										$(div).find('.morenAddress').addClass('active');
										$(div).find('.setMoren').addClass('active');
									}
									$('#manageAddress').prepend(div);
									
									//执行事件
									dizhiCaozuo();
								}
							});
						}
					}
				});
			}else if(jud == '修改地址'){
				//修改地址
				var num = $(this).attr('num');
				var name = $('.shouhuoName').val();
				var province = $('#Province i').html();
				var city = $('#City i').html();
				var district = $('#Area i').html();
				var detail = $('.detailArea').val();
				var phone = $('.lianxiPhone').val();
				var quhao = $('.quhao').val();
				var guhua = $('.gudingPhone').val();
				var telephone = quhao + '−' + guhua;
				if ($('.cart_moren').prop('checked')) {
					var moren = 'yes';
				}else {
					var moren = 'no';
				}
				var jud1 = name.length == 0 || detail.length == 0 || province == '请选择省份' || city == '请选择城市' || district == '请选择地区';
				if (jud1) {
					return alert('请填写完整信息');
				}
				var jud2 = phone.length == 0 && (quhao.length == 0 || guhua.length == 0);
				if (jud2) {
					return alert('请填写联系方式');
				}
				if (phone.length != 0 && !/^1\d{10}$/.test(phone)) {
					return alert('请输入正确手机号');
				}
				if (quhao.length != 0 && guhua.length != 0) {
					if (!/0\d{2,3}/.test(quhao)) {
						return alert('请输入正确区号');
					}else if(!/\d{7,8}/.test(guhua)){
						return alert('请输入正确电话号');
					}
				}
				$.ajax({
					type:"get",//请求方式
					url:"yiheAddress.php",//请求网址
					async:true,
					data:{
						operation:'update',
						name:name,
						province:province,
						city:city,
						district:district,
						detail:detail,
						phone:phone,
						telephone:telephone,
						moren:moren,
						id:num
					},
					success:function (data) {
						if (moren == 'yes') {
							$.ajax({
								type:"get",//请求方式
								url:"yiheAddress.php",//请求网址
								async:true,
								data:{
									operation:'reset',
									id:num
								},
								success:function (data) {
									$('.cart_tianjia').hide();
									var label = $('#manageAddress .radio[num="'+num+'"]');
									label.find('.name').html(name);
									label.find('.area').html(province);
									label.find('.city').html(city);
									label.find('.proper').html(district);
									label.find('.detail').html(detail);
									if (phone) {
										var haoma = '手机' + phone;
									}else {
										var haoma = '固定电话' + telephone;
									}
									label.find('.phone').html(haoma);
									if (moren == 'yes') {
										$('#manageAddress .morenAddress').removeClass('active');
										$('#manageAddress .setMoren').removeClass('active');
										label.find('.morenAddress').addClass('active');
										label.find('.setMoren').addClass('active');
									}
									dizhiCaozuo();
								}
							});
						}
									
						//执行事件
						dizhiCaozuo();
					}
				});
			}
		});
		
		
		function dizhiCaozuo(){
			$('#manageAddress label').click(function(){
				$('#manageAddress .radio').removeClass('active');
				$(this).parent().addClass('active');
			});
			$('.setMoren').click(function(){
				$('.setMoren,.morenAddress').removeClass('active');
				$(this).addClass('active');
				$($(this).parents()[1]).find('.morenAddress').addClass('active');
			});
			$('.zhankai').click(function(){
				$('.cart_zhankai').slideDown();
			});
			$('.shouqi').click(function(){
				$('.cart_zhankai').slideUp();
			});
			$('.xiugaiBtn').click(function(){
				$('.area_baocun').attr('num',$(this).parents().eq(1).attr('num'));
				$('.cart_tianjia').show();
				$('.area_tianjia span').html('修改地址');
				var parent = $($(this).parents()[1]);
				$('.shouhuoName').val(parent.find('.name').html());
				$('.detailArea').val(parent.find('.detail').html());
				var phoneType = parent.find('.phone').html().match(/[\u4e00-\u9fa5]/g).join('');
				var phoneNum = parent.find('.phone').html().replace(/[\u4e00-\u9fa5]/g,'');
				if (phoneType == '手机') {
					$('.lianxiPhone').val(phoneNum);
					$('.quhao').val('');
					$('.gudingPhone').val('');
				}else if(phoneType == '固定电话'){
					$('.lianxiPhone').val('');
					$('.quhao').val(phoneNum.split('−')[0]);
					$('.gudingPhone').val(phoneNum.split('−')[1]);
				}
				if (parent.find('.morenAddress').hasClass('active')) {
					$('.cart_moren').prop('checked',true);
				}else {
					$('.cart_moren').prop('checked',false);
				}
				var arr = [parent.find('.area').html(),parent.find('.city').html(),parent.find('.proper').html()];
				$('.cart_liandong i').html(function(i,v){
					return arr[i];
				});
			});
			$('.shanchuBtn').click(function(){
				var num = $(this).parents().eq(1).attr('num');
				var del = $($(this).parents()[1]);
				$.ajax({
					type:"get",//请求方式
					url:"yiheAddress.php",//请求网址
					async:true,
					data:{
						operation:'delete',
						id:num
					},
					success:function (data) {
						del.remove();
					}
				});
			});
			$('.setMoren').click(function(){
				var num = $(this).parents().eq(1).attr('num');
				var div = $(this);
				$.ajax({
					type:"get",//请求方式
					url:"yiheAddress.php",//请求网址
					async:true,
					data:{
						operation:'reset',
						id:num
					},
					success:function (data) {
						$('.setMoren,.morenAddress').removeClass('active');
						div.addClass('active');
						div.parents().eq(1).find('.morenAddress').addClass('active');
					}
				});
			});
			$('.tijiao').click(function(){
				var parent = $('#manageAddress .radio.active');
				sessionStorage.name = parent.find('.name').html();
				sessionStorage.province = parent.find('.area').html();
				sessionStorage.city = parent.find('.city').html();
				sessionStorage.district = parent.find('.proper').html();
				sessionStorage.detail = parent.find('.detail').html();
				sessionStorage.phone = parent.find('.phone').html();
				
				sessionStorage.zhuPage = null;
				sessionStorage.payMoney = $('.yingfu span').text();
				location.href = 'xjx_submit.html';
			});
		}
	}else {
		//使用该地址并设为默认地址
		$('.cart_quren').click(function(){
			var name = $('.shouhuoName').val();
			var province = $('#Province input').val();
			var city = $('#City input').val();
			var district = $('#Area input').val();
			var detail = $('.detailArea').val();
			var phone = $('.lianxiPhone').val();
			var quhao = $('.quhao').val();
			var guhua = $('.gudingPhone').val();
			var telephone = quhao + '−' + guhua;
			sessionStorage.name = name;
			sessionStorage.province = province;
			sessionStorage.city = city;
			sessionStorage.district = district;
			sessionStorage.detail = detail;
			if (phone) {
				sessionStorage.phone = phone;
			} else{
				sessionStorage.phone = telephone;
			}
			
			var jud1 = name.length == 0 || detail.length == 0 || province == '请选择省份' || city == '请选择城市' || district == '请选择地区';
			if (jud1) {
				return alert('请填写完整信息');
			}
			var jud2 = phone.length == 0 && (quhao.length == 0 || guhua.length == 0);
			if (jud2) {
				return alert('请填写联系方式');
			}
			if (phone.length != 0 && !/^1\d{10}$/.test(phone)) {
				return alert('请输入正确手机号');
			}
			if (quhao.length != 0 && guhua.length != 0) {
				if (!/0\d{2,3}/.test(quhao)) {
					return alert('请输入正确区号');
				}else if(!/\d{7,8}/.test(guhua)){
					return alert('请输入正确电话号');
				}
			}
			
			$.ajax({
				type:"get",//请求方式
				url:"yiheAddress.php",//请求网址
				async:true,
				data:{
					operation:'insert',
					name:name,
					province:province,
					city:city,
					district:district,
					detail:detail,
					phone:phone,
					telephone:telephone,
					moren:'yes',
					all:'all'
				},
				success:function (data) {
					$('.newName').html(name);
					$('.newArea').html(province);
					$('.newCity').html(city);
					$('.newProper').html(district);
					$('.newDetail').html(detail);
					if (phone.length == 0) {
						$('.newPhone').hide();
					}else{
						$('.newPhone').html(phone);
					}
					if (telephone == '−') {
						$('.newTelephone').hide();
					}else{
						$('.newTelephone').html(telephone);
					}
					$('.cart_newdizhi').hide();
					$('.order_address').show();
					$('.tijiao').click(function(){
						sessionStorage.zhuPage = null;
						sessionStorage.payMoney = $('.yingfu span').text();
						location.href = 'xjx_submit.html';
					});
				}
			});
		});
	}
	var pay = sessionStorage.pay;
	//获取商品数据
	$.ajax({
		type:"get",//请求方式
		url:"yiheCart.php",//请求网址
		async:true,
		data:{
			operation:'selectID',
			str:sessionStorage.strN
		},
		success:function (data) {
			var data = JSON.parse(data);
			if (data['dataList'].length == 0) {
				$('.sql_add').remove();
			}else {
				var goodsColor,goodsImg,goodsInfo,goodsName,goodsNum,goodsPrice,goodsSize,num;
				var tr;
				for (var i = 0; i < data['dataList'].length; i++) {
					goodsColor = data['dataList'][i].goodsColor;
					goodsImg = data['dataList'][i].goodsImg;
					goodsInfo = data['dataList'][i].goodsInfo;
					goodsName = data['dataList'][i].goodsName;
					goodsNum = data['dataList'][i].goodsNum;
					goodsPrice = data['dataList'][i].goodsPrice;
					goodsSize = data['dataList'][i].goodsSize;
					num = data['dataList'][i].id;
					var price = accMul(goodsPrice,goodsNum);
					if(!/\./.test(price)){
						price += '.00';
					} else if(/\.\d$/.test(price)){
						price += '0';
					}
					tr =
'<tr class="goods_goods" num="'+num+'">\
	<td class="goods_select">\
		<div>\
			<img src="'+goodsImg+'"/>\
			<span>'+goodsName+'</span>\
		</div>\
	</td>\
	<td class="goods_style">\
		<p>尺寸：'+goodsSize+'</p>\
		<p>颜色：'+goodsColor+'</p>\
	</td>\
	<td>\
		<p>￥<span>'+goodsPrice+'</span></p>\
	</td>\
	<td class="goods_counts">\
		<div>'+goodsNum+'</div>\
	</td>\
	<td class="price_some">\
		<p>￥<span>'+price+'</span></p>\
	</td>\
</tr>';
					$('.sql_add .goods_jisuan').before(tr);
				}
				var allP = '0.00';
				for (var i = 0; i < $('.sql_add .price_some span').length; i++) {
					allP = accAdd($('.sql_add .price_some span').eq(i).html(),allP);
				}
				if(!/\./.test(allP)){
					allP += '.00';
				} else if(/\.\d$/.test(allP)){
					allP += '0';
				}
				$('.sql_add .goods_jine span').html(allP);
				var pay = accAdd($('.sql_add .goods_yunfei span').html(),allP);
				if(!/\./.test(pay)){
					pay += '.00';
				} else if(/\.\d$/.test(pay)){
					pay += '0';
				}
				$('.sql_add .goods_heji span').html(pay);
				var zongjia = '0.00';
				for (var i = 0; i < $('.goods_heji span').length; i++) {
					zongjia = accAdd($('.goods_heji span').eq(i).html(),zongjia);
				}
				if(!/\./.test(zongjia)){
					zongjia += '.00';
				} else if(/\.\d$/.test(zongjia)){
					zongjia += '0';
				}
				$('.zongji span').html(zongjia);
				jisuan();
			}
			
			$('.jifen').keydown(function(event) {
				if(!(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 8)) {
					event.preventDefault();
				}
			});
			$('.jifen').change(function(){
				var jifen = $('.jifen').val();
				if (jifen - $('.yongyou').html() > 0) {
					jifen = $('.yongyou').html();
					$('.jifen').val(jifen);
				}
				jisuan();
			});
			
			function jisuan(){
				var dijia = accDiv($('.jifen').val(),'100');
				if(!/\./.test(dijia)){
					dijia += '.00';
				} else if(/\.\d$/.test(dijia)){
					dijia += '0';
				}
				$('.dijia span').html(dijia);
				var yingfu = accSub(zongjia,dijia);
				if(!/\./.test(yingfu)){
					yingfu += '.00';
				} else if(/\.\d$/.test(yingfu)){
					yingfu += '0';
				}
				$('.yingfu span').html(yingfu);
				var huode = accDiv(yingfu,'10');
				huode = huode.toFixed(2);
				if(!/\./.test(huode)){
					huode += '.00';
				} else if(/\.\d$/.test(huode)){
					huode += '0';
				}
				$('.getJifen').html(huode);
			}
		}
	});	
});
$(function() { //调用插件
	$.fn.citySelect();
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
$(function (){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
		
	$('.item').click(function(){
		if ($(this).hasClass('active')) {
			$(this).find('div').show();
		}else {
			$(this).find('div').hide();
		}
	});
	$('.item div').click(function(){
		$(this).hide();
	});
	var bool = true;
	$('.area_dizhi').click(function(event){
		if(bool){
			$(this).find('.cart_moren').prop('checked',true);
		}else {
			$(this).find('.cart_moren').prop('checked',false);
		}
		bool = !bool;
		event.preventDefault();
	});
	$('.cart_moren').click(function(){
		return false;
	});
	$('.cart_new').click(function(){
		$('.cart_tianjia').show();
		$('.area_tianjia span').html('添加地址');
		$('#Province i').html('请选择省份');
		$('#City i').html('请选择城市');
		$('#Area i').html('请选择地区');
		$('.cart_moren').prop('checked',false);
		
		$('.cart_newdizhi input').val('');
	});
	$('.area_fanhui').click(function(){
		$('.cart_tianjia').hide();
	});
	
});