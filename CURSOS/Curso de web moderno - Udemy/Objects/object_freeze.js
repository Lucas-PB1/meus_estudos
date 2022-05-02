const pessoa = {
    nome: 'Lucas',
    Idade: '20',
};

pessoa.Idade = ++pessoa.Idade;
console.log(pessoa);

// No entanto eu congelarei a atribuição de novos atributos
Object.freeze(pessoa);
pessoa.Idade = ++pessoa.Idade;
pessoa.altura = 1.72;
console.log(pessoa);