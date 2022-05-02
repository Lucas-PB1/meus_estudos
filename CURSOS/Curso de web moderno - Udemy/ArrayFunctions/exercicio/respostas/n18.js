const depesas = [
    { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
    { nome: "Cinema", categoria: "Entretenimento", preco: 150 }
];

const x = vetor => vetor.map(element => element.preco).reduce((final, init) => final + init);

console.log(x(depesas));