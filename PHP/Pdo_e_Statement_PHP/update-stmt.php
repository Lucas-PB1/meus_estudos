<?php
include './connect.php';

$conn = getConnection();

$sql = "UPDATE users SET nome = :nome, email = :email, senha = :senha WHERE id=:id";

$id = 6;
$nome = "update-user-teste";
$email = "update-email-teste@gmail.com";
$senha = "update-senha-teste";

$stmt = $conn -> prepare($sql);
$stmt -> bindParam(":id", $id);
$stmt -> bindParam(":nome", $nome);
$stmt -> bindParam(":email", $email);
$stmt -> bindParam(":senha", $senha);

if ($stmt->execute()) {
	echo "Atualizado com sucesso";
}else {
	echo "Erro ao atualizar";
}