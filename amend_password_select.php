<?php
//连接数据库
$mysqli=new mysqli('127.0.0.1','root','','yihe');
if($mysqli->connect_error){
	exit ('数据连接失败!');
}else{
//	echo "数据连接成功";
}

$mysqli->set_charset("utf8");
$selectSQL1 = "select * from  account";
$result = $mysqli -> query($selectSQL1);
//echo json_encode($result -> fetch_object());
$arr = array();
while($row = $result -> fetch_object()){
	array_push($arr,$row);
}
echo json_encode($arr);

//关闭数据库
$mysqli->close();



?>