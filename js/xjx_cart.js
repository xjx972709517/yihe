$(function(){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	
	$.ajax({
		type:"get",//请求方式
		url:"yiheCart.php",//请求网址
		async:true,
		data:{
			operation:'select'
		},
		success:function(data){
			var data = JSON.parse(data);
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
				tr = 
'<tr class="goods_goods" num="'+num+'">\
	<td class="goods_select emptySelect">\
		<div>\
			<img class="pointer" src="img/xjx/cart/xjx_no.png"/>\
			<img src="'+goodsImg+'"/>\
			<span>'+goodsName+'</span>\
		</div>\
	</td>\
	<td class="goods_style">\
		<p>尺寸：'+goodsSize+'</p>\
		<p>颜色：'+goodsColor+'</p>\
	</td>\
	<td class="price_one">\
		<p>￥<span>'+goodsPrice+'</span></p>\
	</td>\
	<td class="goods_counts">\
		<div>\
			<span class="goods_jian pointer">−</span>\
			<input type="text" value="'+goodsNum+'" />\
			<span class="goods_jia pointer">+</span>\
		</div>\
	</td>\
	<td class="price_some">\
		<p>￥<span>'+accMul(goodsPrice,goodsNum)+'</span></p>\
	</td>\
	<td class="delete_this">\
		<a class="goods_shanchu pointer" href="javascript:;">删除</a>\
	</td>\
</tr>';
				$('.sql_add .goods_jisuan').before(tr);
			}
			$('.sql_add .goods_shanchu').click(function(){
				for (var i = 0; i < $('.sql_add .goods_shanchu').length; i++) {
					$('.sql_add .goods_shanchu')[i].id = i;
				}
				var btn = $(this)[0];
				$.ajax({
					type:"get",//请求方式
					url:"yiheCart.php",//请求网址
					async:true,
					data:{
						operation:'delete',
						num:$($(this).parents()[1]).attr('num')
					},
					success:function (data) {
						var price = $('.sql_add .table');
						$($('.sql_add .goods_goods')[btn.id]).remove();
						$('.xjx_counts span').html(function(i,v){
							return v-1;
						});
						
						deleteShop();
						compute(btn,price);
					}
				});
			});
			$('.goods_delete').click(function(){
				var arrN = [];
				for (var i = 0; i < $('.sql_add .emptySelect').length; i++) {
					if ($('.sql_add .emptySelect').eq(i).hasClass('active')) {
						arrN.push($('.sql_add .emptySelect').eq(i).parent().attr('num'));
					}
				}
				var stringA = arrN.join(',');
				$.ajax({
					type:"get",//请求方式
					url:"yiheCart.php",//请求网址
					async:true,
					data:{
						operation:'deleteAll',
						str:stringA
					},
					success:function(data){
						for (var i = $('.emptySelect').length-1; i >= 0; i--) {
							if ($($('.emptySelect')[i]).hasClass('active')) {
								$($('.emptySelect')[i]).parent().remove();
							}
						}
						$('.goods_price span').html('0.00');
						$('.goods_jiesuan span').html('￥0.00');
						deleteShop();
					}
				});
				
			});
			
			start();
		}
	});
	
	function start(){
		$('.cart_step span').click(function(){
			$('.cart_step span').removeClass('active');
			$(this).addClass('active');
		});
		
		$('.goods_quan').on('click',function(){
			$(this).toggleClass('active');
			if ($(this).hasClass('active')) {
				$('.goods_select').addClass('active');
			} else {
				$('.goods_select').removeClass('active');
			}
			$('.goods_select .pointer').attr('src','img/xjx/cart/xjx_no.png');
			$('.active.goods_select .pointer').attr('src','img/xjx/cart/xjx_check.png');
			
			compute(this);
		});
		$('th.goods_select').on('click',function(){
			$(this).toggleClass('active');
			var goods = $($(this).parents()[1]).find('.goods_select');
			if ($(this).hasClass('active')) {
				goods.addClass('active');
			} else {
				goods.removeClass('active');
			}
			$('.goods_select .pointer').attr('src','img/xjx/cart/xjx_no.png');
			$('.active.goods_select .pointer').attr('src','img/xjx/cart/xjx_check.png');
			
			compute(this);
		});
		$('td.goods_select').on('click',function(){
			$(this).toggleClass('active');
			var someObj = $($(this).parents()[1]).find('td.goods_select');
			var shopObj = $($(this).parents()[1]).find('th.goods_select');
			if (classHas(someObj)) {
				shopObj.addClass('active');
			} else {
				shopObj.removeClass('active');
			}
			$('.goods_select .pointer').attr('src','img/xjx/cart/xjx_no.png');
			$('.active.goods_select .pointer').attr('src','img/xjx/cart/xjx_check.png');
			
			compute(this);
		});
		$('.goods_jian').click(function(){
			$(this).parent().find('input').val(function(i,v){
				if (v == 1) {
					return v;
				}
				return v-1;
			});
			var num = $(this).siblings('input').val();
			var price = $($(this).parents()[2]).find('.price_one span').html();
			var money = accMul(price,num);
			if(!/\./.test(money)){
				money += '.00';
			} else if(/\.\d$/.test(money)){
				money += '0';
			}
			$($(this).parents()[2]).find('.price_some span').html(money);
			if ($($(this).parents()[2]).find('.goods_select').hasClass('active')) {
				compute(this);
			}
		});
		$('.goods_jia').click(function(){
			zengjia(10,this);
			var num = $(this).siblings('input').val();
			var price = $($(this).parents()[2]).find('.price_one span').html();
			var money = accMul(price,num);
			if(!/\./.test(money)){
				money += '.00';
			} else if(/\.\d$/.test(money)){
				money += '0';
			}
			$($(this).parents()[2]).find('.price_some span').html(money);
			if ($($(this).parents()[2]).find('.goods_select').hasClass('active')) {
				compute(this);
			}
		});
		$('.shuju_die .goods_shanchu').click(function(){
			var price = $($(this).parents()[3]);
			$($(this).parents()[1]).remove();
			
			deleteShop();
			compute(this,price);
		});
			
		$('.goods_btn').click(function(){
			sessionStorage.pay = $('.goods_jiesuan span').text().replace(/¥/g,'');
			sessionStorage.zhuPage = null;
			var arrN = [];
			for (var i = 0; i < $('.sql_add .emptySelect').length; i++) {
				if ($('.sql_add .emptySelect').eq(i).hasClass('active')) {
					arrN.push($('.sql_add .emptySelect').eq(i).parent().attr('num'));
				}
			}
			var stringA = arrN.join(',');
			sessionStorage.strN = stringA;
			
			//判断跳转页面
			$.ajax({
				type:"get",//请求方式
				url:"yiheAddress.php",//请求网址
				async:true,
				data:{
					operation:'select'
				},
				success:function (data) {
					if (JSON.parse(data)['dataList'].length == 0) {
						location.href = 'xjx_confirmAdd.html';
					} else{
						location.href = 'xjx_confirm.html';
					}
				}
			});
		});
	}
	
	function compute(obj,change) {
		var redSelect = $('td.goods_select.active');
		var allprice = '0.00';

		for (var i = 0; i < redSelect.length; i++) {
			var price = $(redSelect[i]).parent().find('.price_one span').text().trim();
			var num = $(redSelect[i]).parent().find('input').val().trim();
			price = accMul(price,num);
			allprice = accAdd(allprice,price);
			if(!/\./.test(price)){
				price += '.00';
			} else if(/\.\d$/.test(price)){
				price += '0';
			}
			$(redSelect[i]).parent().find('.price_some span').html(price);
		}
		var bufen;
		var table;
		
		if ($(obj).hasClass('goods_jia') || $(obj).hasClass('goods_jian')) {
			bufen = $($(obj).parents()[4]).find('.goods_jisuan .goods_price>span');
			table = $($(obj).parents()[4]);
		}else if($(obj).hasClass('goods_select')){
			bufen = $($(obj).parents()[2]).find('.goods_jisuan .goods_price>span');
			table = $($(obj).parents()[2]);
		}else if($(obj).hasClass('goods_shanchu')){
			bufen = change.find('.goods_jisuan .goods_price>span');
			table = change;
		}else if($(obj).hasClass('goods_quan')){
			
			for (var i = 0; i < $('.goods_shop').length; i++) {
				
				var someprice = '0.00';
				var shop = $('.goods_shop').eq(i).find('.goods_goods');
				for (var j = 0; j < shop.length; j++) {
					someprice = accAdd(someprice,$(shop[j]).find('.price_some span').text().trim());
				}
				
				if(!/\./.test(someprice)){
					someprice += '.00';
				} else if(/\.\d$/.test(someprice)){
					someprice += '0';
				}
				$('.goods_shop').eq(i).find('.goods_price span').html(someprice);
			}
		}
		
		if (table) {
			var someprice = '0.00';
			var shop = table.find('.active.goods_select').siblings('.price_some').find('span');
			for (var i = 0; i < shop.length; i++) {
				console.log(shop.length)
				someprice = accAdd(someprice,$(shop[i]).text().trim());
			}
			if(!/\./.test(someprice)){
				someprice += '.00';
			} else if(/\.\d$/.test(someprice)){
				someprice += '0';
			}
			
			if (bufen) {
				bufen.html(someprice);
			}
		}
		
		if(!/\./.test(allprice)){
			allprice += '.00';
		} else if(/\.\d$/.test(allprice)){
			allprice += '0';
		}
		allprice = '¥' + allprice;
		$('.goods_jiesuan span').html(allprice);
	}
	function deleteShop(){
		var goods;
		for (var i = $('.goods_shop').length-1; i >= 0; i--) {
			goods = $($('.goods_shop')[i]).find('.goods_goods');
			if (goods.length == 0) {
				$($('.goods_shop')[i]).remove();
			}
		}
	}
	function classHas(obj) {
		var goodsEmpty = obj;
		for (var i = 0; i < goodsEmpty.length; i++) {
			if (!$(goodsEmpty[i]).hasClass('active')) {
				return false;
			}
		}
		return true;
	}
	function zengjia(max,obj){
		$(obj).parent().find('input').val(function(i,v){
			if (v == max) {
				return v;
			}
			return v-0+1;
		});
	}
});