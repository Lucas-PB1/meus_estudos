const nomes = ['lucas', 'joão', 'samuel', 'pedro', 'thiago'];

let imprimir = (nome, indice) => console.log((indice + 1) + '. ' + nome);
// nomes.forEach(imprimir);

// Funções callback são funções que são chamadas quando um evento é disparado por outra função

const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let x = notas.filter((x) => {
    return x % 2 == 0;
});

console.log(x);