<?php 
function calculadora($n1,$n2,$operação){
	switch ($operação) {

		case 'Soma':
		$n3 = $n1+$n2;
		echo "Soma: $n3<br>";
		break;

		case 'Subtração':
		$n3 = $n1-$n2;
		echo "Subtração: $n3<br>";
		break;

		case 'Multiplicação':
		$n3 = $n1*$n2;
		echo "Multiplicação: $n3<br>";
		break;

		case 'Divisão':
		$n3 = $n1/$n2;
		echo "Divisão: $n3<br>";
		break;

		default:
		echo "Operação não definida";
		break;
	}
}

?>