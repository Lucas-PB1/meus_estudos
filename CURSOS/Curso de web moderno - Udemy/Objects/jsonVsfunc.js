const pessoa = {
    nome: 'Lucas',
    altura: 1.72,
    idade: 21,
    falar() {
        console.log('Oi');
    }
}

// Transformando em json
let txt = JSON.stringify(pessoa);
console.log(txt);

// Retirando do json
console.log(JSON.parse(txt));
