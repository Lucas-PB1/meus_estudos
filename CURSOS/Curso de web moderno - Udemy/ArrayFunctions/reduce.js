const produtos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Pedro', nota: 9.2, bolsista: true },
    { nome: 'Sam', nota: 9.8, bolsista: false },
    { nome: 'Lucas', nota: 8.7, bolsista: true },
]

let x = produtos.map(a => a.bolsista).reduce((result, value) => result && value);
let y = produtos.map(a => a.bolsista).reduce((result, value) => result || value);
console.log(y);