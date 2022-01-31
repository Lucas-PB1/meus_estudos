<?php
include './connect.php';

$conn = getConnection();

/*
$sql = "INSERT INTO users (nome, email, senha) VALUES (?,?,?)";

$nome = "user-teste2";
$email = "email-teste2@gmail.com";
$senha = "senha-teste2";

$stmt = $conn -> prepare($sql);
$stmt -> bindParam(1, $nome);
$stmt -> bindParam(2, $email);
$stmt -> bindParam(3, $senha);
*/

$sql = "INSERT INTO users (nome, email, senha) VALUES (:nome,:email,:senha)";

$nome = "user-teste3";
$email = "email-teste3@gmail.com";
$senha = "senha-teste3";

$stmt = $conn -> prepare($sql);
$stmt -> bindParam(":nome", $nome);
$stmt -> bindParam(":email", $email);
$stmt -> bindParam(":senha", $senha);

if ($stmt->execute()) {
	echo "Os dados foram através do uso de Statement com PDO!";
}else {
	echo "Houve um erro ao inserir os dados!";
}