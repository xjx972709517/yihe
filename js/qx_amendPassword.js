$(function (){
		$("#header").load("xjx_top.html");
		$("#footer").load("jx_bottom.html");
	});
$(function() {
	var header = '<div id="header"></div>'
	var footer = '<div id="footer"></div>'
	$('body').append(header);
	$('body').append(footer);
	$("#header").load("xjx_top.html");
	$("#footer").load("jx_bottom.html");
	// 手机号码的验证**************************
	$('.white_right').css('display', 'none')
	$('.please_again').css('display', 'none')
	$('.write_again').css('display', 'none')
	$('#progress_checkPhone').focus(function() {
		var phone_reg = /^1[34578]\d{9}$/
		var inpVal = $('#progress_checkPhone').val()
		if(phone_reg.test(inpVal)) {
			$('white_right1').css('display', 'block')
			$('#please_again').css('display', 'none')
			$('#write_again').css('display', 'none')
		} else if(!phone_reg.test(inpVal) && inpVal != "") {
			$('#please_again').css('display', 'block')
			$('#write_again').css('display', 'none')
			$('#white_right').css('display', 'none')
		} else {
			$('#please_again').css('display', 'none')
			$('#write_again').css('display', 'block')
			$('#white_right').css('display', 'none')
		}
	});

	$('#progress_checkPhone').blur(function() {
		var phone_reg = /^1[34578]\d{9}$/
		var inpVal = $('#progress_checkPhone').val()
		if(phone_reg.test(inpVal)) {
			$('#white_right').css('display', 'block')
			$('#please_again').css('display', 'none')
			$('#write_again').css('display', 'none')
		} else if(!phone_reg.test(inpVal) && inpVal != "") {
			$('#please_again').css('display', 'block')
			$('#write_again').css('display', 'none')
			$('#white_right').css('display', 'none')
		} else {
			$('#please_again').css('display', 'none')
			$('#write_again').css('display', 'block')
			$('#white_right').css('display', 'none')
		}
	});

	//密码  6-20字母和数字组合的正则***************

	$('#progress_checkPhone1').focus(function() {
		var password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
		var inpVal = $(this).val()
		if(password.test(inpVal)) {
			$('#white_right1').css('display', 'block')
			$('#please_again1').css('display', 'none')
			$('#write_again1').css('display', 'none')
		} else if(!password.test(inpVal) && inpVal != "") {
			$('#please_again1').css('display', 'block')
			$('#write_again1').css('display', 'none')
			$('#white_right1').css('display', 'none')
		} else {
			$('#please_again1').css('display', 'none')
			$('#write_again1').css('display', 'block')
			$('#white_right1').css('display', 'none')
		}
	});

	$('#progress_checkPhone1').blur(function() {
		var password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/
		var inpVal = $(this).val()
		if(password.test(inpVal)) {
			$('#white_right1').css('display', 'block')
			$('#please_again1').css('display', 'none')
			$('#write_again1').css('display', 'none')
		} else if(!password.test(inpVal) && inpVal != "") {
			$('#please_again1').css('display', 'block')
			$('#write_again1').css('display', 'none')
			$('#white_right1').css('display', 'none')
		} else {
			$('#please_again1').css('display', 'none')
			$('#write_again1').css('display', 'block')
			$('#white_right1').css('display', 'none')
		}
	});

	//	密码验证*************
	$('#progress_checkPhone2').focus(function() {
		var inpVal = $('#progress_checkPhone1').val()
		var inpVal1 = $(this).val()

		if(inpVal == inpVal1 && inpVal1 != "") {
			$('#white_right2').css('display', 'block')
			$('#please_again2').css('display', 'none')
			$('#write_again2').css('display', 'none')
		} else if(inpVal != inpVal1 && inpVal1 != "") {
			$('#please_again2').css('display', 'block')
			$('#write_again2').css('display', 'none')
			$('#white_right2').css('display', 'none')
		} else {
			$('#please_again2').css('display', 'none')
			$('#write_again2').css('display', 'block')
			$('#white_right2').css('display', 'none')
		}
	});

	$('#progress_checkPhone2').blur(function() {
		var inpVal = $('#progress_checkPhone1').val()
		var inpVal1 = $(this).val()

		if(inpVal == inpVal1 && inpVal1 != "") {
			$('#white_right2').css('display', 'block')
			$('#please_again2').css('display', 'none')
			$('#write_again2').css('display', 'none')
		} else if(inpVal != inpVal1 && inpVal1 != "") {
			$('#please_again2').css('display', 'block')
			$('#write_again2').css('display', 'none')
			$('#white_right2').css('display', 'none')
		} else {
			$('#please_again2').css('display', 'none')
			$('#write_again2').css('display', 'block')
			$('#white_right2').css('display', 'none')
		}
	});

	//点击获取验证码*******************
	var timer ;
	var bool = true;	
$('.shade_wrap').hide()
var stopTimer = setInterval(function(){},1000);
//执行点击的函数*-******************************************

		var nums = [];
	$('.searchButton1').click(function(){
		$('.shade_wrap').show()
	
//	alert(nums)
function ButtonCode() {
		timer--
		if(timer < 0) {
			clearInterval(stopTimer);
			$('.searchButton1').val('点击获取验证码');
			//此时让遮罩层消失
			$(launch).hide()
			$('.shade_wrap').hide()
			bool = true;
		}else{
			$('.shade_wrap').show()
			$('.searchButton1').val(timer + '秒后重新获取');
		}
	}
	


		if (bool) {
//			$('#please_again5').css('display', 'block')
//			$('#write_again5').css('display', 'none')
//			$('#white_right5').css('display', 'none')
			while( nums.length!=6){
			nums.push(randomNum(0,9))

		}
			bool = false;
			timer=10;
			stopTimer = setInterval(function(){
				ButtonCode()
			},1000);
			ButtonCode();
		}
	var launch=$('<div class="launch_windows">您获取的验证码是:<span></span></div>')
	console.log(launch)
	$(launch).appendTo('body')
	//answer = nums.join('')
$(".launch_windows>span").html(nums)
//视角和对焦时的效果************
  $('#phone_auth_code1').focus(function() {
  var nums_contents= $(".launch_windows>span").html()
  var inpVal2 = $(this).val()
  
  if(inpVal2== "") {
			$('#please_again5').css('display', 'none')
			$('#write_again5').css('display', 'block')
			$('#white_right5').css('display', 'none')
		}else if(inpVal2= !""&&nums_contents!= $('#phone_auth_code1').val()){
			$('#please_again5').css('display', 'block')
			$('#write_again5').css('display', 'none')
			$('#white_right5').css('display', 'none')
			
		}else{
			$('#white_right5').css('display', 'block')
			$('#please_again5').css('display', 'none')
			$('#write_again5').css('display', 'none')
			$(launch).hide()
			clearInterval(stopTimer)
		}
		})
    $('#phone_auth_code1').blur(function() {
      var nums_contents= $(".launch_windows>span").html()
     var inpVal2 = $(this).val()
  if(inpVal2== "") {
			$('#please_again5').css('display', 'none')
			$('#write_again5').css('display', 'block')
			$('#white_right5').css('display', 'none')
		}else if(inpVal2!=""&&nums_contents!= $('#phone_auth_code1').val()){
			$('#please_again5').css('display', 'block')
			$('#write_again5').css('display', 'none')
			$('#white_right5').css('display', 'none')
			
		}else{
			$('#white_right5').css('display', 'block')
			$('#please_again5').css('display', 'none')
			$('#write_again5').css('display', 'none')
			$(launch).hide()
			$('.searchButton1').val('点击获取验证码')
			clearInterval(stopTimer)
		}
		})
})

    	
	function randomNum(x, y) {
							return Math.floor(Math.random() * (y - x + 1) + x);
						}
	
//验证码的引用插件的方法*****************
	var nums1;
    var chars=[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ]
    //获取到六个随机的字符串,用来验证,记得要先把数组制空一次.*****
	$('.change1').click(function(){
		nums1=[]
		for(var i in chars){
			while(nums1.length!=4){
			nums1.push(chars[randomNum(0,chars.length-1)])
			}
			}
		
	$('#code').html(nums1)
 $('#inputCode1').blur(function() {
 	var value=$('#inputCode1').val()
	if(value=""||value!=$('#code').html()){
		alert('请重新输入')
	}else{
		alert('输入正确')
	}
	
})
})




	
	});