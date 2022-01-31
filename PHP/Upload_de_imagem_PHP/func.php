<?php

function exibir()
{
	if (isset($_FILES['img']['name'])) {
		$arquivo = $_FILES['img'];

		$_UP['pasta'] = 'data/';
		$_UP['tamanho'] = 1024 * 1024 * 100; //5mb
		$_UP['extensoes'] = array('png', 'jpg', 'jpeg', 'gif');

		$_UP['erros'][0] = 'Não houve erro';
		$_UP['erros'][1] = 'O arquivo no upload é maior que o limite do PHP';
		$_UP['erros'][2] = 'O arquivo ultrapassa o limite de tamanho especificado no HTML';
		$_UP['erros'][3] = 'O upload do arquivo foi feito parcialmente';
		$_UP['erros'][4] = 'Não foi feito o upload do arquivo';

		if ($arquivo['error'] !== 0) {
			die("<div>Não foi possivel fazer o upload, Erro: <br />" . $_UP['erros'][$arquivo['error']]);
			die();
		}

		$extensao = explode('.', $arquivo['name'])[1];

		if (array_search($extensao, $_UP['extensoes']) === false) {
			echo "<div>Extensão invalida</div>";
			die();
		} else if ($_UP['tamanho'] < $arquivo['size']) {
			echo "<div>Tamanho invalido!</div>";
			die();
		}

		$nome_final = explode('.', $arquivo['name'])[0] . '--save.jpg';

		if (move_uploaded_file($arquivo['tmp_name'], $_UP['pasta'] . $nome_final)) {

			echo "<div>Imagem salva</div>";
		} else {
			echo "<div>Houve um erro, tente novamente</div>";
		}
	}
}
