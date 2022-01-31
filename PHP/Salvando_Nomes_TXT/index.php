<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Salvando 5 Nomes</title>

	<!-- CDNS -->
	<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
	
	<!-- PERSONALIZADO -->
	<link rel="stylesheet" href="styles/style.css">
	<?php include_once('func.php') ?>
</head>

<body>
	<div class="container text-center">
		<form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
			<input placeholder="Escreva o Primeiro nome!" name="n1">
			<input placeholder="Escreva o Segundo nome!" name="n2">
			<input placeholder="Escreva o Terceiro nome!" name="n3">
			<input placeholder="Escreva o Quarto nome!" name="n4">
			<input placeholder="Escreva o Quinto nome!" name="n5">
			<button type="submit">Salvar</button>
		</form>
		<?php exibir() ?>
	</div>
</body>

</html>