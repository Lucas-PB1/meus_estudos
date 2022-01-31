// Geralmente o javascript é descrito dentro da tag <script> 
function TrocaNome(){
	document.getElementById("nome").innerHTML="Lucas";
}
function exibir(){
	document.getElementById("Inner").innerHTML= 5+5;
}
function alerta(){
	window.alert("Funciona!");
}
function alerta2(){
	alert("Funciona! sem referencia");
}
function consolelog(){
	console.log("Bem aqui");
}
function imprimir(){
	window.print();
}
function soma(){
	var x = 5;
	var y = 5;
	var xy = x + y;
	document.getElementById("some").innerHTML = "5 + 5 é: "+ xy + ".";
}
function contagem(){
	var txt = "Meu texto aqui";
	var sln = txt.length;
	document.getElementById("txt").innerHTML = sln;
}

function primeira(){
	var txt2 = "texto";
	var pos = txt2.indexOf("texto");
	document.getElementById("txt2").innerHTML = pos;
}
function ultima(){
	var txt3 = "nop";
	var pos2 = txt3.lastIndexOf("texto");
	document.getElementById("txt3").innerHTML = pos2;
}
function pesquisa_pos(){
	var txt4 = "Esse é meu texto, o meu";
	var pos3 = txt4.lastIndexOf("texto", 10);
	document.getElementById("txt4").innerHTML = pos3;
}
function search(){
	var texto = "O grande texto";
	var lugar = texto.search("teste");
	document.getElementById("texto").innerHTML = lugar;
}
function slice(){
	var newtext = "Meu nome é Lucas";
	var corte = newtext.slice(11,16);
	document.getElementById("newtexto").innerHTML = corte;
}
function replace(){
	// "/i" ignorara a distinção de caracteres
	// .toUpperCase aumentara a caixa de texto
	// .toLowerCase diminuira a caixa de texto
	var othertext = "Meu nome é Random"
	var replace = othertext.replace(/Random/i, "Lucas");
	document.getElementById("othertext").innerHTML = replace;
}
function concat(){
	//O metodo concat, apenas concatena 2 strings
	var nome = "Lucas";
	var sobrenome = "Soares";
	var concat = nome.concat(" ",sobrenome);
	document.getElementById("nome_completo").innerHTML = concat;
}
function trim(){
	var number  = "1 2 3 4 5 6       9";
	var newnumber =number.trim();
	document.getElementById("metodo_trim").innerHTML = newnumber;
}
function charAt(){
	var myname = "Lucas";
	var third = myname.charAt(3);
	document.getElementById("metodo_charAt").innerHTML = third;
}
function split(){
	var nome = "Lucas";
	var arr_nome = nome.split("");
	var text = "";
	var i;
	for (i = 0; i<=arr_nome.length-1; i++) {
		text += arr_nome[i] + "<br>";
	}
	document.getElementById("name").innerHTML = text;
}