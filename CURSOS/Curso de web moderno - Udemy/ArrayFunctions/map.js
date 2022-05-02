const carrinho = [
    '{"nome":"Borracha", "valor": 3.45}',
    '{"nome":"Caderno", "valor": 13.90}',
    '{"nome":"Kit de lapis", "valor": 41.22}',
    '{"nome":"Caneta", "valor": 7.50}',
];

const x = carrinho.map((e) => JSON.parse(e).valor);

console.log(x);