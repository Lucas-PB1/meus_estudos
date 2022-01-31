<?php
/**
*
*@return \PDO
*/
function getConnection(){
	$dsn = "mysql:host=localhost;dbname=pdo_testes;charset=utf8";
	$user = "root";
	$password = "";

	try {
		$pdo = new PDO($dsn, $user , $password);
		echo "O banco de dados foi acessado!<br/>";
		return $pdo;
	} catch (PDOException $ex) {
		echo "Erro: ".$ex->getMessage();
	}
}