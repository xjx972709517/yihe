$(function(){
	$('#footer').load('my_bottom.html');
	$.ajax({
		type:"get",//请求方式
		url:"city.php",//请求网址
		async:true,
		//dataType:"json",//后台返回的数据类型
		success:function (data) {
			//接收的是请求回来的数据
			//已经解析好的JSON对象
			console.log(data)
			var obj = JSON.parse(data);
			var letter;
			var city;
			var span;
			var value;
			console.log(data)
			for (var i = 0; i < obj.allcity.length; i++) {
				letter = obj.allcity[i].pinyin.substr(0,1);
				city = '<a>'+obj.allcity[i].name+'</a>';
				console.log(letter)
				switch (letter){
					case 'a':
					$('.xjx_some').eq(0).append(city);
						break;
					case 'b':
					$('.xjx_some').eq(1).append(city);
						break;
					case 'c':
					$('.xjx_some').eq(2).append(city);
						break;
					case 'd':
					$('.xjx_some').eq(3).append(city);
						break;
					case 'e':
					$('.xjx_some').eq(4).append(city);
						break;
					case 'f':
					$('.xjx_some').eq(5).append(city);
						break;
					case 'g':
					$('.xjx_some').eq(6).append(city);
						break;
					case 'h':
					$('.xjx_some').eq(7).append(city);
						break;
					case 'i':
					$('.xjx_some').eq(8).append(city);
						break;
					case 'j':
					$('.xjx_some').eq(9).append(city);
						break;
					case 'k':
					$('.xjx_some').eq(10).append(city);
						break;
					case 'l':
					$('.xjx_some').eq(11).append(city);
						break;
					case 'm':
					$('.xjx_some').eq(12).append(city);
						break;
					case 'n':
					$('.xjx_some').eq(13).append(city);
						break;
					case 'o':
					$('.xjx_some').eq(14).append(city);
						break;
					case 'p':
					$('.xjx_some').eq(15).append(city);
						break;
					case 'q':
					$('.xjx_some').eq(16).append(city);
						break;
					case 'r':
					$('.xjx_some').eq(17).append(city);
						break;
					case 's':
					$('.xjx_some').eq(18).append(city);
						break;
					case 't':
					$('.xjx_some').eq(19).append(city);
						break;
					case 'u':
					$('.xjx_some').eq(20).append(city);
						break;
					case 'v':
					$('.xjx_some').eq(21).append(city);
						break;
					case 'w':
					$('.xjx_some').eq(22).append(city);
						break;
					case 'x':
					$('.xjx_some').eq(23).append(city);
						break;
					case 'y':
					$('.xjx_some').eq(24).append(city);
						break;
					case 'z':
					$('.xjx_some').eq(25).append(city);
						break;
					default:
					console.log(letter)
						break;
				}
			}
			
			var textV;
			$('.xjx_input input').click(function(){
				$(this).on('keyup',function(event){
					value = wf.makePy($('.xjx_input input').val())[0].substr(0,1).toUpperCase();
					for (var i = 0; i < $('.xjx_allcity li').length; i++) {
						span = $($('.xjx_allcity li span')[i]).html();
						if (value == span && textV != value) {
							textV = value;
							$('.xjx_position').scrollTop(0);
							$('.xjx_position').animate({scrollTop:$($('.xjx_allcity li')[i]).position().top},500);
							return;
						}
					}
					if ($(this).val().length == 0) {
						$('.xjx_position').animate({scrollTop:0},500);
						textV = null;
					}
				});
			});
			$('.xjx_some a').click(function(){
				$('.xjx_moren span:last-child').html($(this).html());
			});
			$('.xjx_btn').click(function(){
				sessionStorage.zhuPage = null;
				sessionStorage.address = $('.xjx_moren span:last-child').html();
				location.href = 'xjx_home.html';
			});
			$('.xjx_denglu').click(function(){
				sessionStorage.zhuPage = null;
				location.href = 'xjx_denglu.html';
			});
			$('.xjx_zhuce').click(function(){
				sessionStorage.zhuPage = null;
				location.href = 'xjx_zhuce.html';
			});
			$('.xjx_arearight>span:first-child').click(function(){
				location.href = 'xjx_shangjiaDL.html';
			});
		}
	});
});