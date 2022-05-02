let animais = {
    home: 'Terra',
    energia: 100,
    limiteEnergia: 100,
    need: ['agua', 'oxigenio', 'sociedade'],
    exercicio(gasto) {
        this.energia -= gasto;
        console.log(`Você tem ${this.energia}`);
        if (this.energia <= 20) console.log('Cuidado vc vai desmaiar!');
    },
    comer(peso) {
        this.energia += peso / 2;
        console.log(`Você tem ${this.energia}`);
    }
}

const neanderthal = {
    __proto__: animais,
    nome: 'Adam',
    escrever() {
        console.log('Meu nome é: ' + this.nome);
    },
    caca(peso, qtd) {
        super.exercicio((peso / 2) / qtd);
        for (let i = 0; i < qtd; i++) {
            super.comer(peso);
            console.log(`Você tem ${super.energia}`);
        }
    }
}

let humano = {
    nome: 'Thiago',
    sexo: 'M',
    ocupacao: 'Medico',
    treinar(gasto, ganho) {
        super.limiteEnergia += ganho;
        super.exercicio(gasto);
    },
}

Object.setPrototypeOf(humano, neanderthal);

console.log(humano.energia);
humano.treinar(30, 20);

console.log(humano.limiteEnergia);
console.log(neanderthal.limiteEnergia);

humano.escrever();
