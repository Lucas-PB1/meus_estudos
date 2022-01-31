<?php
include './connect.php';

$conn = getConnection();

$sql = "DELETE FROM users WHERE id=:id";

$id = 1;

$stmt = $conn -> prepare($sql);
$stmt -> bindParam(":id", $id);

if ($stmt->execute()) {
	echo "Excluido com sucesso";
}else {
	echo "Erro ao Excluir";
}