const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {};

function salvaProdutos(produto) {
    if (!produto.id) produto.id = sequence.id;
    produtos[produto.id] = produto;
    return produto;
}

function deletaProdutos(id) {
    const produto = produtos[id];
    delete produtos[id];
    return produto;
}

let getProduto = id => produtos[id] || {};

let getProdutos = () => Object.values(produtos);

module.exports = { salvaProdutos, getProduto, getProdutos, deletaProdutos };


