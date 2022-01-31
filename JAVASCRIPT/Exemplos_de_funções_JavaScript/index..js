//variaveis
let cor = "antiga";
let cor_nova = "Nova";
console.log(cor);
exibirMsg(cor_nova);

function exibirMsg(novacor, tom){
	cor = novacor + " " + tom;
	console.log(cor);
};
let tom = "escuro";
exibirMsg(cor_nova, tom);



//void function
function exibir(exibir){
	for(let value in exibir){
		console.log(`Value: ${value}`);
	}
	for(let key in exibir){
		console.log(`Chave: ${key}, Value: ${exibir[key]} `);
	}
	
}
function somar(valor1, valor2){
	let soma = valor1 + valor2;
	return soma;
}
let resultado  = somar(2,2)**2;

for (let i = 0; i < 20; i++) {
	resultado++;
	if (resultado > 20) {
		resultado--;
	}
}
resultado += resultado;
let ok = resultado >= 40 ? "maior ou igual 40" : "menor que 40";
let real = true;

if (ok === "maior ou igual 40" && real === true) {
	if (resultado > 40) {
		ok = "Maior que 40";
	}else{
		ok = "Igual a 40";
	}
}
ok = ok === "Igual a 40" ? ok + "!" : ok + " )-:";
let complete = {
	final : resultado,
	question: ok
};
exibir(complete);

//compare
function compare(value1, value2){
	return value1 < value2 ? value2 : value1;
}
let result = compare(3,3);
exibir(result);
function exibir(exibir){
	console.log(exibir);
}


//fizzbuzz
function fizzbuzz(value){
	if (isNaN(value)) return console.log("Erro de entrada");
	if (value % 3 != 0 && value % 5 != 0) return console.log("Não é divisivel");
	let final = null;
	if (value % 3 === 0){
		final = "fizz";
	}
	if (value % 5 === 0){
		final = final === null ? "" : final;
		final = final + "buzz";
	}
	console.log(final);
}

fizzbuzz(1);


//Velocimentro
medir(80);
function medir(velocidade){
	if (velocidade > 70) {
		velocidade = Math.floor((velocidade - 70) / 5);
		if (velocidade > 12) {
			return console.log("Carteira suspensa");
		}else{
			return console.log(`Infrigiu a lei, pontos: ${velocidade}`);
		}
	}else{
		return console.log("Dentro da lei");
	}
}


//Interação de propriedade de objetos
let obj = {
	nome: "Lucas",
	pontos: 10,
	idade: 20,
	estado_civil: "solteiro"
}
property(obj);
function property(object){
	for(let property in object){
		if (property == "nome") {
			return console.log(`${property}: ${object[property]}`)
		}
	}
}


//media com array
let value = [70, 70, 70];

media(value);

function media(value){
	let total = 0;
	for(let i = 0; i <= value.length-1; i++){
		if (!value[i] || isNaN(value[i]) || value[i] < 0) return console.log("Algum valor foi informado erroneamente");
		total = total + value[i];
	}
	total  = total/value.length;
	return console.log(total >= 70 ? `Aprovado nota ${total}` : `Reprovado nota: ${total}`);
}


//astericos
linha(5);

function linha(pontos){
	if (pontos === 0) return;
	let count = 1;
	let linha = "";
	do{
		linha += "*";
		console.log(linha);
		count++;

	}while(pontos >= count);
}


//Numeros primos
primos(15);

function primos(number){
	for (let i = 2; i <= number; i++) {
		if (ehprimo(i)) console.log(i);
	}
}

function ehprimo(numero){
	for (let div = 2; div < numero; div++) {
		if (numero % div === 0) {
			return false;
		}
	}
	return true;
}



//Factory funtions, camelCase
function registrarPessoa(nome, idade, sexo){
	return {
		nome,
		idade,
		sexo,
		andar(){
			console.log(`${nome} está andando...`);
		}
	}
}

let pessoa = registrarPessoa("Lucas", 20, "masculino");

//Function constructor, PascalCase
function Pessoa(nome, idade ,sexo){
	this.nome = nome,
	this.idade = idade,
	this.sexo = sexo,
	this.falar = function(){
		console.log(`${nome} está falando.....`);
	}
}

const people = new Pessoa("Samuel", 12, "masculino");
console.log(people);


//Dinamica de propriedades e clonagem
const correr = {
	devagar: false,
	medio: false,
	rapido: true
}

correr.fast = "ainda mais rapido";
correr.hyperfast = function(){
	console.log("Tão rapido que o narrador esqueceu de contar");
}
delete correr.devagar;
delete correr.medio;

//object assign
const object = Object.assign({ dancar: "enquanto corre?" }, correr);

//sprets
const object2 = {...correr};
console.log(object2);

//Math
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(1,2,3,4,5));

//tipos de string
const msg = "Ola, bom dia";
let msg2 = new String("   Ola bom dia   ");

//if (msg2.includes("dia")) console.log("ta dentro");
//if (msg2.endsWith("dia")) console.log("no final");
msg2 = msg2.trim();
//console.log(msg2.indexOf("bom"));
msg2 = msg2.replaceAll(" ", "|");
msg2 = msg2.split("|");
console.log(`Menssagem: ${msg2}, Tamanho: ${msg2.length}`);

//template literal

//metodo antigo
const menssagem  = "ola, meu nome é lucas \n \'Ola ola ola\'";
//metodos novo
const messagem2 = `olha so desse modo 
ele mantém tudo`;
console.log(messagem2);



//DATEEEEEE
const data  = new Date();
const niver  = new Date(`March 09 09 2000 13:00`);
const date = new Date(2020,7,19,7,30);

date.setFullYear(2030)
//string data
let f = date.toDateString();
//string hora
let g = date.toTimeString();
//banco de dados
let h = date.toISOString();

console.log(h);
