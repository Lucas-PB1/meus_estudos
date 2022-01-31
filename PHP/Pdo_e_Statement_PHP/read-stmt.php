<?php
include './connect.php';
$conn = getConnection();
$sql = "SELECT * FROM users WHERE id = :id";

$stmt = $conn -> prepare($sql);
$stmt -> bindValue(":id", 1);
$stmt -> execute();

$result = $stmt->fetchAll();

foreach ($result as $value) {
	echo "Nome: ".$value['nome']."<br>";
	echo "Email: ".$value['email']."<br>";
	echo "Senha: ".$value['senha']."<br><br>";
}
