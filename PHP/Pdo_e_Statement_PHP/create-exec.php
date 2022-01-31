<?php
include './connect.php';

$conn = getConnection();

$sql = "INSERT INTO users (nome, email, senha) VALUES ('user-teste','email-teste@gmail.com','senha-teste')";

if ($conn -> exec($sql)) {
	echo "Os dados foram através da execução direta com PDO!";
}else{
	echo "Houve um erro ao inserir os dados!";
}