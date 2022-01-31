<?php include("functions.php")  ?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<title>Aprendendo PHP</title>
</head>
<body>
<h1 id="title">Aprendendo PHP</h1>
	<?php
	echo "<br>TESTE DE STRINGS E COMANDOS BASICOS<br>";
	$nome="Lucas";
$tm =strlen("Lucas");//strlen conta as letras presentes numa String
echo $tm." É o número de letras no nome ".$nome."<br>";//A função de concatenação funciona com "."
$lindo = "Lindo";
echo "Lucas é $lindo<br>";


echo "<br>TESTE DE FUNÇÕES";
//Variaveis:
//Funcão:
function teste(){
	global $nome;//Comando global da direito a puxar um variavel gloval
	$textlocal="Texto local";//Criando uma varivel local
	echo "<br>Esse é um $textlocal criado por $nome<br>";//printando a variavel
	$GLOBALS['nome'] = $GLOBALS['lindo'];//Comando que permite atualizar as variaveis locais em qualquer lugar
}
teste();//Chamando a função
echo "$nome<br>";//Printado o nome atualizado
function cont(){
	static $cont = 1;//Todas vez que uma função e chamada ela reinicia suas variaveis, no entanto o comando static tem a função de preservar a variavel independente da chamada
	echo "$cont Teste de contagem<br>";
	$cont++;//O contador de auto incremento
}
cont();//A contagem de "cont"
cont();//Muda a cada vez que é chamado
cont();//não perdendo seu valor mesmo dps do fim da execução


echo "<br>TESTE DE COMANDOS CLASSES E ARRAYS<br>";
$ver=print "O comando print também pode se usado aqui";//a unica diferença serão marcações em html e a velocidade de execução e que print retorna 1 que pode ser usado para certos processos
echo "<br>'$ver' número extraido do print<br>";//mostrando o número retirado do print
echo "A função var_dump retorna o tipo de dado contido".var_dump($ver)."<br>";//sempre no inicio da expressão pelo visto
$testeBolleano=false; //teste do elemento bolleano falso
if ($testeBolleano==false) {
	echo "Funciona o false<br>";
}
$testeBolleano=true;  //teste do elemento bolleano verdadeiro
if ($testeBolleano==true) {
	echo "Funciona o verdadeiro<br>";
}
$matriz = array('1','2','3');//declaração de matriz
for ($i=0; $i <3 ; $i++) { 
	echo "So os valores da matriz ".$matriz[$i]."<br>";//Print contendo so os valores
}
print_r($matriz);//Print da matriz completa
class Humano{//Criando uma classe
	public $halibity="Correr muito";//Dando caracteristicas
	public $halibity2="Andar muito";//Caracteristicas devem contem diferentes nomes
	public $Need="Respirar muito";
	function contar($numero){//Funções especificas de humanos
		static $contar=1;//Static variavel
		echo "<br>Número adicionado $numero<br>";
		echo "Contagem: ".$contar;
		$contar++;
	}
}
$Lucas = new Humano();//Definindo um humano
$Lucas->contar(3);
$Lucas->contar(6);//Chamando suas funções
$Lucas->contar(9);
echo "<br>".$Lucas->halibity;
echo "<br>".$Lucas->Need;//Chamando suas caracteristicas
echo "<br>".$Lucas->halibity2."<br>";
var_dump($Lucas);//Verificando o Humano.
echo "<br>";


echo "<br>TESTE DE COMANDO 'STR'<br>";
echo strrev("ovO gnirts a odnetrevnI");//strrev inverte uma string Obs: quando invertido corre um risco de bugar os assentos
echo "<br>contagem de palavras: ".str_word_count("contagem de palavras")."<br>";//Essa função conta a quantidade de palavras em uma String
echo "Faz procura de uma 'palavra' dentro de uma string e da sua posição: ".strpos("Faz procura de uma 'palavra' dentro de uma string e da sua posição: ", "palavra");//Essa função pega o número na exata posição em que a palavra procurada sem encontra
echo str_replace("Lindo", "Lucas"," <br>Trocando a variavel Lindo por ".$nome."<br>");//Essa função busca uma palavra no texto e a substitui.


//Verificando inteiros
echo "<br>TESTE DE INTEIROS";
$n1="Nop";
$n2=1;
$n3=1.2;
$n4=acos(2);
echo "<br>Teste n1: é inteiro? ";//Essa funções que funcionam junto com var_dump, verificam se são
var_dump(is_int($n1));			 //os tipos correpondentes aos buscados, existe um tipo de 
echo "<br>Teste n1: é String? "; //variavel que supera  compreensão de números float
var_dump(is_string($n1));		 //essa variavel é chamada de "infinity" pode ser verificada
echo "<br>Teste n3: é inteiro? ";//com o comando var_dump(is_inf) ou var_dump(is_finite).
var_dump(is_int($n3));			//Também existe o tipo de variavel NAM, que indica operações
echo "<br>Teste n2: é inteiro? ";//matematicas impossiveis.
var_dump(is_int($n2));
echo "<br>Teste n2: teste de tipo 'NAM'? ";
var_dump($n4);
echo "<br>";


echo "<br>TESTE DE NUMERICOS";
 //Verificações numericas
$n1="Nop";
$n2=123;
$n3=1.2+3.2;
$n4=acos(2);
$n5="12345";
echo "<br>Teste n1: é Númerico?? "; //A função is_numeric verifica num contexto geral se a variave
var_dump(is_numeric($n1));			//é composta por números, independente do tipo
echo "<br>Teste n2: é Númerico?? "; 
var_dump(is_numeric($n2));
echo "<br>Teste n3: é Númerico?? "; 
var_dump(is_numeric($n3));
echo "<br>Teste n4: é Númerico?? "; 
var_dump(is_numeric($n4));
echo "<br>Teste n4: é Númerico?? "; 
var_dump(is_numeric($n5));
echo "<br>";


//Cast ou conversões
echo "<br>TESTE DE CASTS";
$StringType ="12345";//Iniciamos com um tipo String
$IntType=intval($StringType);//Podemos usar "intval" ou (int) para fazer o cast
echo "<br>Teste StringType: é inteiro? "; //O primeiro valor não se altera
var_dump(is_int($StringType));
echo "<br>Teste IntType: é inteiro? "; //O recebido vira um int
var_dump(is_int($IntType));
echo "<br>";


echo "<br>TESTE DE CONSTANTS<br>";
define("Noite", "Lua");//Constante são elemento que jamais se alteraram, toda constante é global
echo "Exibindo a constante 'Noite' = ".Noite;//Sempre que noite for chamada seu valor "LUA" será exibido, Matrizes também podem ser usadas em constantes.
echo "<br>";

//O operadores em PHP são
//+, Soma/-, Subtração/*, Multiplicação/'/', Divisão/'%', Modulo/'**', exponencial
//==, igual/===, indentico(mesmo tipo)/!=, diferente/<>, diferente/!==, não e igual ou não é o mesmo tipo/>, maior que/<, menor que/<=>, se for maior, menor ou igual a zero.

//Decremento
//--$variavel, pre decremento
//$variavel--, pós decremento
//++$variavel, pre incremento
//$variavel++, pós incremento

//Operadores Logicos
//and ou &&, se os dois forem
//or ou ||, se um dos dois forem
//xor, se um dos dois for, mas não os dois
//not ou !, se não forem iguais

//Concatenação
//"." ou ".=", para concatenar.

//OBS: No PHP nos temos um novo operador no "IF", que serve para pularmos algumas etapas
//"ELSEIF", que retira a necessidade de fazer no if no final.

//Novo elemento tb adicionado no PHP é o FOREACH, que serve para percorrer matrizes o mesmo renomeia os nomes da colunas e valores na matrizer e pecorre a mesma.


echo "<br>TESTE DE FOREACH<br>";
$array = array("Lucas"=>19,"João"=>14,"Samuel"=>9 );

foreach ($array as $x => $val) {//O foreache percorrera por default todo o vetor
	echo "$x => $val<br>";
}
echo "<br>";

//Por PHP ser uma liguagem de tipo "fraco" existem casos onde certas funções e números se combinaram aleatoriamente para negarmos esse tipo de problema usamos a função strict, que tem como função imperdir junções de tipos difentes sua declaração deve ser no inicio do codigo e sua declaração padrão é "declare(strict_types=1);"


echo "<br>TESTE DE FUNÇÕES COM VALOR PADRÃO<br>";
function teste_($nome ="anonimo"){//Declaração padrão caso o "nome" não seja pego
echo "Nomes pegos: ".$nome."<br>";
}
teste_("Lucas");//Nesses dois exemplo o exibido será o nomes pegos
teste_("João");
teste_();		//Ja nesse ultimo por falta de dados teremos o "default"
echo "<br>";

//Obs: No caso do comando "return" lembre-se que deve se sempre esta de olho no tipo retornado e no tipo inserido para evita erros


echo "<br>TESTE DE MATRIZES<br>";
$matriz = array();//Declaração do vetor vazio
for ($i=0; $i <10 ; $i++) { //Inserindo valores
	$matriz[$i] =$i;
}
for ($i=0; $i <10 ; $i++) { 
	echo "Valor na casa {".$i."}= $matriz[$i]<br>";//Exibindo valores
}
echo "Quantidade de elementos na matriz: ".count($matriz)."<br>";//Mosntrando a quantidade de espaços usados


echo "<br>MATRIZ ASSOCIATIVA:";
$matrizAssociativa = array('Lucas' => "Correr" ,'Samuel' =>"Desenhar", 'João Pedro'=>"Jogar Bola" );//Uma matriz associativa um matriz cujo "$key" vai definir o modo
foreach ($matrizAssociativa as $key => $value) {//de chamada daquela matriz e o valor vai ser inse
	echo "<br>Uma das habilidades de $key é $value";//-rido depois do "$key"
}


echo "<br><br>MATRIZ BIDEMENSIONAL:";
$matrizBidemensional = array(//Metodos de fazer um matriz bidemensional
array('Lucas' => "Correr","Pensar" ),//Obs: Pesquise modos de exibição
array('Samuel' => "Desenhar","Sorte" ),
array('João Pedro'=>"Jogar Bola","Musica")
);
$count = count($matrizBidemensional);//Ele conta as colunas
echo "<br>Numero de colunas: $count";
echo "<br>";


echo "<br>SORTS MATRIZ:";
$matrizSorts = array(7,5,3,7,7,247,8,15,10);
echo "<br>Matriz desordenada: ";
foreach ($matrizSorts as $value) {
	echo "[$value] ";
}
sort($matrizSorts);//Ordem crescente
//rsort($matrizSorts);//Ordem decrescente
//asort($matrizSorts);//Matriz asssociativa em ordem crescente, valor
//ksort($matrizSorts);//Matriz asssociativa em ordem crescente, chave
//arsort($matrizSorts);//Matriz asssociativa em ordem decrescente, valor
//krsort($matrizSorts);//Matriz asssociativa em ordem decrescente, chave
echo "<br>Matriz ordenada: ";
foreach ($matrizSorts as $value) {
	echo "[$value] ";
}
echo "<br><br>Matriz associativa: ";
$array2 = array("Lucas"=>19,"João"=>14,"Samuel"=>9, "Abraão"=>22,"Bruna"=>10);
ksort($array2);//Obs: Quando se trata de "Strings" a matriz reordena alfabeticamente
foreach ($array2 as $key=>$value) {
	echo "<br> Idades: $key => [$value] ";
}


echo "<br><br>TESTE GLOBAL @SERVERS: ";
//$GLOBALS é a variavel que é usada para chamar variaveis globais em todo o codigo, ela tb é responsavel por salvar todas as variaveis globais.
echo "<br> Nome do servidor: ".$_SERVER['SERVER_NAME'];//Nome do server
echo "<br>Nome do arquivo: ".$_SERVER['PHP_SELF'];//Nome do arquivo
echo "<br>Nome do host: ".$_SERVER['HTTP_HOST'];//Host, o endereço
//echo "<br>".$_SERVER['HTTP_REFERER']; este é um comando de pesquisa de referencia no entando esta dando erro
echo "<br>Referencias:: ".$_SERVER['HTTP_USER_AGENT'];//Referencia de suporte
echo "<br>Nome do script: ".$_SERVER['SCRIPT_NAME'];//Nome do script
echo "<br>Ip: ".$_SERVER['SERVER_ADDR'];//Ip do servidor
//Existem alguns outros comandos não listados.


echo "<br><br>TESTE REQUEST: <br>";
?>
<form method="post" action="<?php echo $_SERVER['PHP_SELF'];?>">
  Nome: <input type="text" name="fname">
  <input type="submit">
</form>
<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {//Com esse metodo vc pode pegar elementos de um metodo
    //pegando o valor do campo "post"
    $name = $_REQUEST['fname'];//se existir exibira o nome
    if (empty($nome)) {
        echo "Sem nome";
    } else {
        echo $name;
    }
}
 ?>
</body>
</html>
