class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    falar() {
        console.log('oi');
    }
}

class Paraibano extends Pessoa {
    constructor(cidade, nome, idade, altura) {
        super(nome, idade, altura)
        this.cidade = cidade
    }
}

const Lucas = new Paraibano('JP', 'Lucas', 21, 1.72);
console.log(Lucas);