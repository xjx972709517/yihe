<?php

$operation = $_REQUEST['operation'];
if($operation == 'insert'){
	insertData();
}else if($operation == 'select'){
	selectData();
}else if($operation == 'update'){
	$id = $_REQUEST['id'];
	updateData($id);
}else if($operation == 'reset'){
	$id = $_REQUEST['id'];
	updateReset($id);
}else if($operation == 'delete'){
	$id = $_REQUEST['id'];
	deleteData($id);
}

function insertData(){
	$name = $_REQUEST['name'];
	$province = $_REQUEST['province'];
	$city = $_REQUEST['city'];
	$district = $_REQUEST['district'];
	$detail = $_REQUEST['detail'];
	$all = $_REQUEST['all'];
	if ($_REQUEST['phone']){
		$phone = $_REQUEST['phone'];
	}
	if ($_REQUEST['telephone']){
		$telephone = $_REQUEST['telephone'];
	}
	$moren = $_REQUEST['moren'];
	
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//修改编码格式
	$mysqli -> set_charset('utf8');
	//2.书写SQL语句
	$insertSQL = "insert into address (name,province,city,district,detail,phone,telephone,moren,all)values('{$name}','{$province}','{$city}','{$district}','{$detail}','{$phone}','{$telephone}','{$moren}','{$all}')";
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
	$deleteSQL = "delete from address where id={$id}";
	//3.执行SQL语句
	$result = $mysqli -> query($deleteSQL);
	//4.关闭数据库
	$mysqli -> close();
}

//3.更新数据库中的数据
function updateData($id){
	$name = $_REQUEST['name'];
	$province = $_REQUEST['province'];
	$city = $_REQUEST['city'];
	$district = $_REQUEST['district'];
	$detail = $_REQUEST['detail'];
	if ($_REQUEST['phone']){
		$phone = $_REQUEST['phone'];
	}
	if ($_REQUEST['telephone']){
		$telephone = $_REQUEST['telephone'];
	}
	$moren = $_REQUEST['moren'];
	//1.连接数据库
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//修改编码格式
	$mysqli -> set_charset('utf8');
	//2.书写SQL语句
	$updateSQL = "update address set name='{$name}',province='{$province}',city='{$city}',district='{$district}',detail='{$detail}',phone='{$phone}',telephone='{$telephone}',moren='{$moren}' where id={$id}";
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
	$selectSQL = "select * from address";
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

function updateReset($id){
	//1.连接数据库
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//修改编码格式
	$mysqli -> set_charset('utf8');
	//2.书写SQL语句
	$resetSQL = "update address set moren='no' where moren='yes'";
	$updateSQL = "update address set moren='yes' where id={$id}";
	//同时修改一条数据的多个字段信息
	//3.执行SQL语句
	$result = $mysqli -> query($resetSQL);
	$result = $mysqli -> query($updateSQL);
	//4.关闭数据库
	$mysqli -> close();
}

?>