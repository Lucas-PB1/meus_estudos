<?php
$arquivo = fopen('nomes.txt', 'a+');

if (isset($_REQUEST['n1'])) {

    $n1 = $_REQUEST['n1'];
    $n2 = $_REQUEST['n2'];
    $n3 = $_REQUEST['n3'];
    $n4 = $_REQUEST['n4'];
    $n5 = $_REQUEST['n5'];

    if (strlen($n1) === 0 || strlen($n2) === 0 || strlen($n3) === 0 || strlen($n4) === 0 || strlen($n5) === 0) {
        echo "<div class='Container text-center'><p>Por favor escreva todos os nomes!</p><div>";
        die();
    }
    if ($arquivo == true) {
        $grupo = "$n1<>\n$n2<>\n$n3<>\n$n4<>\n$n5<>||\n";
        fwrite($arquivo, $grupo);
    } else {
        echo "<div class='Container text-center'><p>Houve uma falha na escrita do arquivo!</p><div>";
        die();
    }
}

function exibir()
{
    $content = file_get_contents('nomes.txt');
    $arrayGrupos =  explode('||', $content);
    echo "
    <h2>Nomes ja registrados!</h2>
    <ul>
    ";
    for ($i = 0; $i < sizeof($arrayGrupos) - 1; $i++) {
        echo "<li><h3>Grupo " . ($i + 1) . "</h3><ul>";
        $arrayNomes =  explode('<>', $arrayGrupos[$i]);
        for ($j = 0; $j < sizeof($arrayNomes) - 1; $j++) {
            echo "<li>$arrayNomes[$j]</li>";
        }
        echo "</ul></li>";
    }
    echo "</ul>";
}
