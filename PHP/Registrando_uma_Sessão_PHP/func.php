<?php

function exibir()
{
	if (isset($_POST['login'])) {

		$login = $_POST['login'];
		$senha = $_POST['senha'];

		if (strlen($login) === 0) {
			echo '<div>Por favor insira um nome de usuario valido</div>';
			die();
		}
		if (strlen($senha) === 0) {
			echo '<div>Por favor insira uma senha</div>';
			die();
		}
		session_start();

		if ($login == "Lucas" && $senha == "Senha") {
			$_SESSION['logou'] = 1;
			header("location: main.html");
		} else {
			$_SESSION['logou'] = 0;
			echo '<div>Email ou Senha estão errados!</div>';
		}
	}
}
