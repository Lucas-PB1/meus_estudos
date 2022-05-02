// Numero 1
let calc = (n1, n2, op) => {
    if (op == '+') return n1 + n2;
    if (op == '-') return n1 - n2;
    if (op == '*') return n1 * n2;
    if (op == '/') return n1 / n2;
}
console.log(calc(1, 2, '/'));

// Numero 2
let triangulo = [2, 2, 2];

let compare = (triangulo) => {
    let [a, b, c] = triangulo;

    if (a === b && b === c) return 'Equilátero';
    if (a === b || a === c || b === c) return 'Isósceles';
    return 'Escaleno';
}

console.log(compare(triangulo));

// Numero 3
let calc = (base, expoente) => console.log(base ** expoente);
calc(4, 4);

// Numero 4
let calc = (x, y) => {
    console.log((x / y).toFixed(1) + " é o resultado resta: " + (x % y).toFixed(3));
}

calc(10, 3);

// Numero 5
let convert = (num) => `R$ ${num.toFixed(2).replace('.', ',')}`;

console.log(convert(0.30000000000000004));

// Numero 6
let calc = (cptinicial, taxa, tmpAplicacao, opcao = 'simples') => {
    taxa = taxa / 100;
    if (opcao == 'simples') return cptinicial + (cptinicial * taxa * tmpAplicacao);
    if (opcao == 'composto') return cptinicial * (1 + taxa) ** tmpAplicacao;
}

console.log(calc(620, 1.5, 24, 'composto').toFixed(2));

// Numero 7
function bhaskara(a, b, c) {
    let delta = (b ** 2) - 4 * a * c, x1, x2;
    if (delta < 0) return console.log('Delta é negativo');

    x1 = (-b + Math.sqrt(delta)) / (2 * a);
    x2 = (-b - Math.sqrt(delta)) / (2 * a);
    return [x1, x2];
}

console.log(bhaskara(2, 8, -24));

// Numero 8
(function pontuacao(a = '10 20 20 8 25 3 0 30 1', r = 0, s = Infinity, pos, count = -1) {
    a = a.split(' ');
    for (let key in a) {
        if (parseInt(a[key]) > r) {
            r = a[key];
            count++;
        }

        if (s > parseInt(a[key])) {
            s = a[key];
            pos = key;
        }   
    }
    console.log(`Você quebrou seu resultado ${count} vezes, no seu pior jogo marcou: ${s} este foi o ${++pos} jogo.`);
})()

// Numero 9
let nota = '35';

function calc(nota) {
    let x;

    if (nota < 38) return console.log('Reprovado');

    while (nota[1] != 0 && nota[1] != 5) {
        x = parseInt(nota);
        x++;
        nota = x.toString();
    }

    console.log(nota);
}


calc(nota);

// Numero 10
let func = (x) => x % 3 == 0;
console.log(func(12));

// Numero 11
function calc(y) {
    if (y % 400 == 0) return true;
    if (y % 100 == 0) return false;
    if (y % 4 == 0) return true;
    return false;
}

console.log(calc(2020));

// Numero 12
let factorial = (x) => {
    for (let i = x - 1; i > 0; i--) {
        x *= i;
    }
    console.log(x);
}

factorial(2);

// Numero 13
let key = 2;
switch (key) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log('Dia Util');
        break;

    case 1:
    case 7:
        console.log('Final de semana');
        break;

    default:
        console.log('Dia Invalido')
        break;
}

// Numero 14
let fruta = 'maca';

switch (fruta) {
    case "maca":
        console.log("Não vendemos esta fruta aqui");
        break;
        
    case "kiwi":
        console.log("Estamos com escassez de kiwis");
        break;

    case "melancia":
        console.log("Aqui está, são 3 reais o quilo");
        break;
    default:
        console.log('Erro, pedido invalido');
        break;
}

// Numero 15
let carro = 'maca';

switch (carro) {
    case "hatch":
        console.log("Não vendemos esta fruta aqui");
        break;

    case "caminhonetes":
    case "motocicletas":
    case "sedans":
        console.log("Tem certeza que não prefere este modelo?");
        break;

    default:
        console.log('Não trabalhamos com este tipo de automóvel aqui');
        break;
}

// Numero 16
function calc(n1, key, n2) {


    switch (key) {
        case "+":
            return n1 + n2;

        case "-":
            return n1 - n2;

        case "*":
            return n1 * n2;

        case "/":
            return n1 / n2;

        default:
            console.log('Erro, valores invalidos');
            break;
    }
}

console.log(calc(2, '+', 2));

// Numero 17
function calc(salario, plano) {
    let p = { 'A': 0.1, 'B': 0.15, 'C': 0.2 };
    return salario += (salario * p[plano]);
}

console.log(calc(1000, 'A'));

// Numero 18
function calc(key) {
    switch (key) {
        case 1:
            return console.log('Um');
        case 2:
            return console.log('Dois');
        case 3:
            return console.log('Tres');
        case 4:
            return console.log('Quatro');
        case 5:
            return console.log('Cinco');
        case 6:
            return console.log('Seis');
        case 7:
            return console.log('Sete');
        case 8:
            return console.log('Oito');
        case 9:
            return console.log('Nove');
        case 10:
            return console.log('Dez');

        default:
            return console.log('Erro, fora de intervalo');
    }
}

calc(1);

// Numero 19
function calc(key) {
    switch (key) {
        case 100:
            return console.log('Cachorro Quente: R$ 3,00');
        case 200:
            return console.log('Hambúrguer Simples: R$ 4,00');
        case 300:
            return console.log('Cheeseburguer: R$ 5,50');
        case 400:
            return console.log('Bauru: R$ 7,50');
        case 500:
            return console.log('Refrigerante: R$ 3,50');
        case 600:
            return console.log('Suco: R$ 2,80');

        default:
            return console.log('Produto não encontrado!');
    }
}

calc(100);

// Numero 20
function decompor(x = 100) {
    let nota100 = 0, nota50 = 0, nota10 = 0, nota5 = 0, nota1 = 0;

    let key = compare(x);

    while (x != 0) {
        if (key == 100) { x -= 100; nota100++; }
        if (key == 50) { x -= 50; nota50++; }
        if (key == 10) { x -= 10; nota10++; }
        if (key == 5) { x -= 5; nota5++; }
        if (key == 1) { x -= 1; nota1++; }

        key = compare(x);
    }

    console.log(result(nota100, nota50, nota10, nota5, nota1));
}

function result(nota100, nota50, nota10, nota5, nota1) {
    let txt = `Você vai precisar de: `;
    if (nota100 != 0) txt += ` || ${nota100} notas de 100`;
    if (nota50 != 0) txt += ` || ${nota50} notas de 50`;
    if (nota10 != 0) txt += ` || ${nota10} notas de 10`;
    if (nota5 != 0) txt += ` || ${nota5} notas de 5`;
    if (nota1 != 0) txt += ` || ${nota1} notas de 1`;
    return txt;
}

function compare(y) {
    if (y >= 100) return 100;
    if (y >= 50) return 50;
    if (y >= 10) return 10;
    if (y >= 5) return 5;
    if (y >= 1) return 1;
}

decompor(1113);