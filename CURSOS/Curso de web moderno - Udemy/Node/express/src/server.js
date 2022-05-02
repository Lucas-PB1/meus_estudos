const bd = require('./banco');
const express = require('express');
const bodyParser = require('body-parser');

const porta = 3003;
const app = express();

//Requisição geral que limpa
app.use(bodyParser.urlencoded({ extended: true }))

// Get de produtos
app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos()) // Pegando todos os produtos
})

// Pegando produto especifico
app.get('/produtos/:id', (req, res, next) => {
    res.send(bd.getProduto(req.params.id)) // Pegando produto especifico
})

// Criando um produto
app.post('/produtos', (req, res, next) => {
    const produto = bd.salvaProdutos({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto);
})

// Atualizando um produto
app.put('/produtos/:id', (req, res, next) => {
    const produto = bd.salvaProdutos({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto);
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bd.deletaProdutos(req.params.id);
    res.send(produto);
})

app.listen(porta, () => {
    console.log('Porta: ' + porta);
})

/*
// Requisições no mesmo endereço usando next executara as duas
app.get('/produtos', (req, res, next) => {
    console.log('Mid 1 ------');
    next();
})
*/