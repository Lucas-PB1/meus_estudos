const x = [1, 2, 3, 4];

// Tirando ultimo elemento
x.pop();

// Adicionando
x.push(5)

// Tirando primeiro elemento
x.shift()

// Adicionando no começo do array
x.unshift(6);

// Adicionar elementos com e remover elementos
// Array.splice(posição, quantidade de elementos a remover, ....novos elementos adicionados)

// Adicionando
x.splice(2, 0, 7, 8)
// Removendo
x.splice(2, 1)

// Cortando um array
const newX = x.slice(2);
console.log(x);