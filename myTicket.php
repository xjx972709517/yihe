<?php
$tab = $_REQUEST['tab'];
if($tab=='insert'){
	insert();
}else if($tab=='select'){
	select();
}else if($tab=='updata'){
	$phone = $_REQUEST['phone'];
	$newPhone=$_REQUEST['newPhone'];
	
	updateData($phone);
}


function insert(){
//	$id=$_REQUEST['id'];
	$phone=$_REQUEST['account'];
	$time=$_REQUEST['time'];
	$nums=$_REQUEST['tiket_num'];
	$sheng=$_REQUEST['moneyRemain'];
	$chong=$_REQUEST['enterMoney'];
	$mysqli=new mysqli('127.0.0.1','root','','yihe');
	 //外面要用上""❗myTicket	
	$insertsql="INSERT INTO `account` (`account`,`time`,`tiket_num`,`enterMoney`, `moneyRemain`) VALUES('{$phone}','{$time}','{$nums}','{$chong}','{$sheng}')";
	$result=$mysqli->query($insertsql);
//	echo  $phone;
	if($result){
	echo "插入数据库成功";
}else{
	echo "数据库插入数据失败";
}
	
	$mysqli->close();
	
	
	
}
function select(){
$mysqli=new mysqli('127.0.0.1','root','','yihe');
if($mysqli->connect_error){
	exit ('数据连接失败!');
}else{
//	echo "数据连接成功";
}
$mysqli->set_charset("utf8");
$selectSQL1 = "select * from  account ";
$result = $mysqli -> query($selectSQL1);
//echo json_encode($result -> fetch_object());
$arr = array();
while($row = $result -> fetch_object()){
	array_push($arr,$row);
}
echo json_encode($arr);


//关闭数据库
$mysqli->close();
	
}

function updateData($phone){
	$newPhone=$_REQUEST['newPhone'];
		echo $newPhone;
	//1.连接数据库
	$mysqli = new mysqli('127.0.0.1','root','','yihe');
	//修改编码格式
	$mysqli -> set_charset('utf8');
	//2.书写SQL语句'{$newPhone}'
	$updateSQL = "update account set account= '{$newPhone}' where account={$phone}";
	//同时修改一条数据的多个字段信息
	//3.执行SQL语句
	$result = $mysqli -> query($updateSQL);
	//4.关闭数据库
	$mysqli -> close();
}


?>