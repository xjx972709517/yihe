<?php

$operation = $_REQUEST['operation'];

if($operation == 'insert'){
	insertData();
}else if($operation == 'select'){
	selectData();
}else if($operation == 'deleteAll'){
	$array = explode(',',$_REQUEST['str']);
	foreach ($array as $value) {
		deleteData($value);
	}
}else if($operation == 'delete'){
	$id = $_REQUEST['num'];
	deleteData($id);
}else if($operation == 'selectID'){
	$array = explode(',',$_REQUEST['str']);
	selectId($array);
}

function insertData(){
	$goodsName = $_REQUEST['goodsName'];
	$goodsImg = $_REQUEST['goodsImg'];
	$goodsInfo = $_REQUEST['goodsInfo'];
	$goodsSize = $_REQUEST['goodsSize'];
	$goodsColor = $_REQUEST['goodsColor'];
	$goodsPrice = $_REQUEST['goodsPrice'];
	$goodsNum = $_REQUEST['goodsNum'];
	
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//修改编码格式
	$mysqli -> set_charset('utf8');
	//2.书写SQL语句
	$insertSQL = "insert into cart (goodsName,goodsImg,goodsInfo,goodsSize,goodsColor,goodsPrice,goodsNum)values('{$goodsName}','{$goodsImg}','{$goodsInfo}','{$goodsSize}','{$goodsColor}','{$goodsPrice}','{$goodsNum}')";
	//3.执行SQL语句
	$result = $mysqli -> query($insertSQL);
	//4.关闭数据库
	$mysqli -> close();
}

//2.删除数据库中的数据
function deleteData($id){
	//1.连接数据库
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//2.书写SQL语句
	$deleteSQL = "delete from cart where id={$id}";
	//3.执行SQL语句
	$result = $mysqli -> query($deleteSQL);
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
	//$updateSQL = "update cart set tea_name='老宋',tea_age=18 where tea_id={$id}";
	//同时修改一条数据的多个字段信息
	//3.执行SQL语句
	$result = $mysqli -> query($updateSQL);
	//4.关闭数据库
	$mysqli -> close();
}

//4.查询数据库中的数据
function selectData(){
	//1.连接数据库
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//修改编码格式
	$mysqli -> set_charset('utf8');
	//2.书写SQL语句
	$selectSQL = "select * from cart";
	//3.执行SQL语句
	$result = $mysqli -> query($selectSQL);
	//当执行完SQL语句时，返回的$result是一个对象，属于mysqli_result类
	//echo $result -> num_rows;//是查询数据结果的条数
	if($result){
		//echo "查询数据成功";
		//获取方式二：
		$teaArr = array();//创建一个空数组，用来存储表中的所有数据
		$i = 0;
		while ($row = $result -> fetch_object()) {
			$teaArr[$i] = $row;
 			$i++;
		}
		echo json_encode(array('dataList'=>$teaArr));
	}
	//4.关闭数据库
	$mysqli -> close();
}

function selectId($array){
	//1.连接数据库
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//修改编码格式
	$mysqli -> set_charset('utf8');
	$teaArr = array();
	$i = 0;
	foreach ($array as $value) {
		//2.书写SQL语句
		$selectSQL = "select * from cart where id={$value}";
//		//3.执行SQL语句
		$result = $mysqli -> query($selectSQL);
		if($result){
			
			$row = $result -> fetch_object();
			$teaArr[$i] = $row;
			$i++;
		}
	}
	echo json_encode(array('dataList'=>$teaArr));
	//4.关闭数据库
	$mysqli -> close();
}


?>