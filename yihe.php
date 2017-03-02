<?php

$operation = $_REQUEST['operation'];
if($operation == 'insert'){
	insertData();
}else if($operation == 'select'){
	$name = $_REQUEST['account'];
	selectData($name);
}

function insertData(){
	$account = $_REQUEST['user_name'];
	$password = $_REQUEST['pass_word'];
	
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//修改编码格式
	$mysqli -> set_charset('utf8');
	//2.书写SQL语句
	$insertSQL = "insert into account (account,password)values('{$account}','{$password}')";
	//3.执行SQL语句
	$result = $mysqli -> query($insertSQL);
	//4.关闭数据库
	$mysqli -> close();
}


//3.更新数据库中的数据
function updateData($id){
	//1.连接数据库
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//修改编码格式
	$mysqli -> set_charset('utf8');
	//2.书写SQL语句
	//$updateSQL = "update account set tea_name='老宋',tea_age=18 where tea_id={$id}";
	//同时修改一条数据的多个字段信息
	//3.执行SQL语句
	$result = $mysqli -> query($updateSQL);
	//4.关闭数据库
	$mysqli -> close();
}

//4.查询数据库中的数据
function selectData($name){
	//1.连接数据库
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//修改编码格式
	$mysqli -> set_charset('utf8');
	//2.书写SQL语句
	$selectSQL = "select * from cart where account={$name}";
	//3.执行SQL语句
	$result = $mysqli -> query($selectSQL);
	echo '3';
	print_r($result);
//	if($result){
//		//echo "查询数据成功";
//		//获取方式二：
//		$teaArr = array();//创建一个空数组，用来存储表中的所有数据
//		$i = 0;
//		while ($row = $result -> fetch_object()) {
//			$teaArr[$i] = $row;
// 			$i++;
//		}
//		echo json_encode(array('dataList'=>$teaArr));
//	}
	//4.关闭数据库
	$mysqli -> close();
}


?>