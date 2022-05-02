let pessoa = {
    nome: 'Lucas',
    idade: 21,
    altura: 1.72
}

// Transforma todo objeto em 1 array
console.log(Object.entries(pessoa));

// Retorna um array com as chaves de um objeto
console.log(Object.keys(pessoa));

// Retorna o valores em uma array
console.log(Object.values(pessoa));

// Percorrendo um objeto com entries e usando destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

// Definindo uma propriedade com defineProperty, vc terá mais opções de controle
Object.defineProperty(pessoa, 'sexo', {
    writable: false,
    enumerable: true,
    value: 'M'
});

console.log(pessoa);

// Concatenando objetos obs: em caso de propriedade repetida o ultimo valor prevalece
let a = { nome: 'Lucas' };
let b = { idade: 21 };
let c = { altura: 1.72, nome: 'Pedro' };

let newObj = Object.assign(a, b, c);
console.log(newObj);
