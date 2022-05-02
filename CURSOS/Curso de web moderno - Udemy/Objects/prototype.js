const Lucas = {
    idade: 21,
    altura: 1.72,
    sexo: 'M'
}

const Joao = {
    idade: 16,
    altura: 1.74,
    sexo: 'M'
}

console.log(Lucas.__proto__ == Object.prototype);
console.log(Object.prototype);

// Nas funções construtoras isso muda
function pessoa(nome, idade, altura, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.sexo = sexo;
}

// O prototipo apontado é a propria função
let samuel = new pessoa('samuel', 12, 1.50, 'M');
console.log(samuel.__proto__ == Object.prototype);
console.log(samuel.__proto__);