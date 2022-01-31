<!DOCTYPE html>
<html lang="pt-br">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- CDNS -->
	<script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

	<!-- PERSONALIZADO -->
	<link rel="stylesheet" href="styles/style.css">
	<?php include_once('func.php') 
	?>

	<title>Calculo de poupança e Renda Fixa</title>
</head>

<body>
	<div class="container text-center">
		<form method="POST">
			<h2>Calcular Poupança e Renda Fixa</h2>
			<input type="number" placeholder="Insira o valor" name="value">
			<select name="op">
				<option value="null">-- Selecionar --</option>
				<option value="1">Poupança</option>
				<option value="2">Fundos de renda fixa</option>
			</select>
			<button type="submit">Calcular</button>
		</form>
		<?php exibir() ?>
	</div>
</body>

</html>