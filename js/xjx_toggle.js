$(function(){
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	$.ajax({
		type:"get",
		url:"city.php",
		async:true,
		success:function (data) {
			var obj = JSON.parse(data);
			var letter;
			var city;
			var span;
			var value;
			for (var i = 0; i < obj.allcity.length; i++) {
				letter = obj.allcity[i].pinyin.substr(0,1);
				city = '<a>'+obj.allcity[i].name+'</a>';
				switch (letter){
					case 'a':
					$('.location_city').eq(0).append(city);
						break;
					case 'b':
					$('.location_city').eq(1).append(city);
						break;
					case 'c':
					$('.location_city').eq(2).append(city);
						break;
					case 'd':
					$('.location_city').eq(3).append(city);
						break;
					case 'e':
					$('.location_city').eq(4).append(city);
						break;
					case 'f':
					$('.location_city').eq(5).append(city);
						break;
					case 'g':
					$('.location_city').eq(6).append(city);
						break;
					case 'h':
					$('.location_city').eq(7).append(city);
						break;
					case 'i':
					$('.location_city').eq(8).append(city);
						break;
					case 'j':
					$('.location_city').eq(9).append(city);
						break;
					case 'k':
					$('.location_city').eq(10).append(city);
						break;
					case 'l':
					$('.location_city').eq(11).append(city);
						break;
					case 'm':
					$('.location_city').eq(12).append(city);
						break;
					case 'n':
					$('.location_city').eq(13).append(city);
						break;
					case 'o':
					$('.location_city').eq(14).append(city);
						break;
					case 'p':
					$('.location_city').eq(15).append(city);
						break;
					case 'q':
					$('.location_city').eq(16).append(city);
						break;
					case 'r':
					$('.location_city').eq(17).append(city);
						break;
					case 's':
					$('.location_city').eq(18).append(city);
						break;
					case 't':
					$('.location_city').eq(19).append(city);
						break;
					case 'u':
					$('.location_city').eq(20).append(city);
						break;
					case 'v':
					$('.location_city').eq(21).append(city);
						break;
					case 'w':
					$('.location_city').eq(22).append(city);
						break;
					case 'x':
					$('.location_city').eq(23).append(city);
						break;
					case 'y':
					$('.location_city').eq(24).append(city);
						break;
					case 'z':
					$('.location_city').eq(25).append(city);
						break;
					default:
					console.log(letter)
						break;
				}
			}
			$('.location_select .pointer,.location_city a').click(function(){
				sessionStorage.address = $(this).html();
				location.href = 'xjx_home.html';
//				$('.location_this').html($(this).html());
//				$('html,body').animate({scrollTop:'0px'},500);
			});
		}
	});
});