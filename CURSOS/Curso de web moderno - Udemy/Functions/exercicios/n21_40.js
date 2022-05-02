// 21
let calc = function () {
    let valor = 100, acrescimo;

    if (10 > arguments[0]) {
        acrescimo = 80;
    } else if (30 > arguments[0]) {
        acrescimo = 50;
    } else if (60 > arguments[0]) {
        acrescimo = 95;
    } else {
        acrescimo = 130;
    }
    return console.log(valor += acrescimo);
}

calc(5);

// 22
let calc1 = (mes) => {
    let valor = 100;
    if (mes > 1 && mes < 13) return valor += valor * ((mes - 1) * 0.05);
    return valor;
}
console.log(calc1(5));

// 23
let nota = function (x, y, z, aluno) {
    const media = (x + y + z) / 3;
    console.log(`${aluno}, teve as seguintes notas: ${x}, ${y}, ${z}.
    Media: ${media} ~ ${media < 5 ? 'Reprovado' : 'Aprovado'} ~`);
}

nota(10, 10, 10, 'Lucas');

// 24
let x = 0;
while (x < 11) {
    console.log('Hello world');
    x++;
}

// 25
function count() {
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }
}
count();

// 26
function par(x) {
    for (let i = 1; i <= x; i++) {
        if (i % 2 == 0) console.log(i);
    }
}

par(100);

// 27
function calc3(alt1, alt2, taxa1, taxa2) {
    if (alt1 == alt2) {
        if (taxa1 > taxa2) return 'A criança 1 ultrapassara a 2 em 1 ano';
        if (taxa1 < taxa2) return 'A criança 2 ultrapassara a 1 em 1 ano';
        return 'Elas sempre terão o mesmo tamanho';
    }
    if (alt1 > alt2) {
        return on(alt1, alt2, taxa1, taxa2);
    } else {
        return on(alt2, alt1, taxa2, taxa1);
    }
}

function on(maior, menor, taxaMaior, taxaMenor) {
    let count = 0;
    if (taxaMenor < taxaMaior) return 'O menor nunca passará do maior';
    while (menor < maior) {
        menor += taxaMenor;
        maior += taxaMaior;
        count++;
    }
    return `Em ${count} anos o menor passará o maior`;
}

console.log(calc3(1.40, 1.40, 0.1, 0.09));

// 28
function calc4(vetor) {
    let par = 0, impar = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 0) {
            par++
        } else {
            impar++;
        }
    }
    console.log(`Pares: ${par} || Impares: ${impar}`);
}

calc4([1, 1, 1, 1, 4, 4, 4]);

// 29
function calc4(vetor) {
    let dentro = 0, fora = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 10 && vetor[i] <= 20) {
            dentro++;
        } else {
            fora++;
        }
    }
    console.log(`Dentro: ${dentro} || Fora: ${fora}`);
}

calc4([14, 10, 10, 1, 4, 4, 4]);

// 30
function max() {
    let maior = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maior) maior = arguments[i];
    }
    return maior;
}

// 31
function negative(vetor) {
    let count = 0;
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < 0) count++;
    }
    return console.log('Existem ' + count + ' números negativos');
}

negative([1, 3, 4, 41, -2, -1, -1, 12, -1.2]);

// 32
function media(vetor) {
    let media = 0;
    for (let i = 0; i < vetor.length; i++) {
        media += vetor[i];
    }
    return media / vetor.length;
}

console.log(media([7, 8, 9]));

// 33
function concatenar() {
    let inteiro = [1, 2, 3, 4, 5];
    let txt = ['um', 'dois', 'tres', 'quatro', 'cinco'];
    let decimal = [1.1, 2.1, 3.1, 4.1, 5.1];

    console.log(inteiro.concat(txt));

    console.log(inteiro.concat(decimal));
}

// 34
function compare1(txt1, txt2) {
    let x = true;
    for (let j = 0; j < txt2.length; j++) {
        if (!txt1.includes(txt2[j])) x = false;
    }
    return x;
}

console.log(compare1('abc', 'cabq'));

// 35
let pilha = [1, 2, 3, 4, 5];
let plus = [6, 5, 7, 8, 9];

function add(pilha, plus) {
    for (let i = 0; i < plus.length; i++) {
        pilha.push(plus[i]);
    }
    console.log(pilha);
}

add(pilha, plus);

// 36
function some(vetor, num) {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] *= num;
    }

    return vetor;
}

function some5(vetor, num) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) vetor[i] *= num;
    }

    return vetor;
}

console.log(some5([2, 3, 4, 5], 2));

// 37
let x = [14, 18, 22, 26];
let y = [2, 4, 8, 16, 32];

let aritmetica = (prog, termo) => prog[0] + (termo - 1) * (prog[1] - prog[0]);
let geometrica = (prog, termo) => prog[0] * ((prog[1] - prog[0]) ** (termo - 1));

console.log(geometrica(y, 3));

// 38
let s = [2, 41, 4, 5, 7, 1, 2, 51, 5, 2, 5];

function sortInterval(init, end) {
    s = s.sort((a, b) => a - b);
    s.forEach((element) => {
        if (element > init && element < end && element % 2 != 0) console.log(element);
    })
}

sortInterval(1, 10);

// 39
let a = [1, 2, 3];
let b = [3, 2, 1];

let troca = (a, b) => {
    [b, a] = [a, b];
    console.log('A: ' + a);
    console.log('B: ' + b);
}

troca(a, b);

// 40
let notas = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >= 0 && vetor[i] < 4.9) {
            console.log(`Conceito D: ${vetor[i]}`)
        }
        else if (vetor[i] >= 5 && vetor[i] <= 6.9) {
            console.log(`Conceito C: ${vetor[i]}`);
        } else if (vetor[i] >= 7 && vetor[i] <= 8.9) {
            console.log(`Conceito B: ${vetor[i]}`);
        } else if (vetor[i] >= 9 && vetor[i] <= 10) {
            console.log(`Conceito A: ${vetor[i]}`);
        } else {
            console.log(`Esta nota: ${vetor[i]}, na posição ${i} é invalida`);
        }
    }
}

notas([1, 3, 4, 5, 6, 7, 8, 9, 10, 'Lucas', 124.2, 2.1]);