<?php
$call=$_REQUEST['account'];
$pass=$_REQUEST['password'];
$mysqli=new mysqli('127.0.0.1','root','','yihe');
	//*插入数据
$insetsql="insert into account(account,password)values('{$call}','{$pass}')";
$result=$mysqli->query($insetsql);
echo $call;
//if($result){
//	echo "修改成功";
//}else{
//	echo "数据库插入数据失败";
//}

$mysqli->close();


	





















?>