let pessoa = (nome, idade, altura) => {
    return {
        'nome': nome,
        'idade': idade,
        'altura': altura,
        exibir: function () {
            console.log(`${nome} tem ${idade} anos e mede ${altura}m`);
        }
    }
}

let Lucas = pessoa('Lucas', 21, 1.72);
Lucas.exibir();

// Desestruturando
let { nome, idade, altura, sexo = 'Não informado' } = Lucas;
console.log(`${nome} tem ${idade} e mede ${altura}m e seu sexo é: ${sexo}`);

// Desestruturando direto na função
function rand({ min = 0, max = 100 }) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(rand({ min: 1, max: 10 }));

// Desestruturando com array
function rand2([min = 10, max = 100]) {
    if (min > max) [max, min] = [min, max];
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(rand2([50, 40]));