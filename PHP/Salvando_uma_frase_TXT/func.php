<?php
$arquivo = fopen('frases.txt', 'a+');

if (isset($_REQUEST['texto'])) {
    $frase = $_REQUEST['texto'];
    if (strlen($frase) === 0) {
        echo "<div class='Container text-center'><p>Por favor escreva algo!</p><div>";
        die();
    }
    if ($arquivo == true) {
        $frase = "$frase<>\n";
        fwrite($arquivo, $frase);
    } else {
        echo "<div class='Container text-center'><p>Houve uma falha na escrita do arquivo!</p><div>";
        die();
    }
}

function exibir()
{
    $content = file_get_contents('frases.txt');
    $arrayFrases =  explode('<>', $content);
    echo "
    <h2>Frases ja registradas!</h2>
    <ul class='text-center'>
    ";
    for ($i = 0; $i < sizeof($arrayFrases) - 1; $i++) {
        echo "<li>$arrayFrases[$i]</li>";
    }
    echo "</ul>";
}
