// Usando classe
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    };
    info = () => console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nAltura: ${this.altura}`);
}

let x = new Pessoa('Lucas', 21, 1.72);
// x.info();

// Usando factory
let Pessoa2 = (nome, idade, altura) => {
    return {
        nome,
        idade,
        altura,
        info() {
            console.log(`Nome: ${nome}\nIdade: ${idade}\nAltura: ${altura}`)
        }
    }
}

x = Pessoa2('Lucas', 21, 1.72);
// x.info();


// Usando constructor
function Pessoa3(nome, idade, altura) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.info = () => console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\nAltura: ${this.altura}`);
}

x = new Pessoa3('Lucas', 21, 1.72);
x.info();