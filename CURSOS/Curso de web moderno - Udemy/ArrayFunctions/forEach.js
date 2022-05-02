const aprovados = ['Lucas', 'Sam', 'Pedro', 'Thiago'];
// aprovados.forEach((valor, chave, arrayCompleto) => console.log(`${chave + 1}- ${valor}`))

// Exercicio
Array.prototype.myEach = function (func) {
    for (let i = 0; i < this.length; i++) {
        func(this[i], i, this);
    }
}
aprovados.myEach((valor, chave, arrayCompleto) => console.log(`${chave + 1}- ${valor}`))

