<?php include_once('./models/header.php');

if(empty($_SERVER["QUERY_STRING"])){
	$var = './models/content.php';
	include_once("$var");
}else{
	$pg = $_GET['pg'];
	if(!file_exists("$pg.php")){
		include_once("./404.php");
	}else{
		include_once("$pg.php");
	}
}
include_once("./models/footer.php") ?>