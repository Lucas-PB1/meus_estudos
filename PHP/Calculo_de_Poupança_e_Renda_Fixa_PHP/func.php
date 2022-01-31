<?php

function exibir()
{
    if (isset($_REQUEST['value'])) {
        $valor = $_REQUEST['value'];
        $option =  $_REQUEST['op'];

        if ($option == 'null') {
            echo '<div><p>Por favor selecione uma opção valida</p><a href="index.php">Voltar</a></div>';
            die();
        }

        if ($option == 1) {
            echo "<div><p>O ganho anual da poupança é:" . ($valor * 0.1) . "</p></div>";
        } else {
            echo "<div><p>O ganho anual da renda fixa é:" . ($valor * 12) . "</p></div>";
        }
    }
}
