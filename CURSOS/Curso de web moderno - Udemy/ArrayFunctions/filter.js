const produtos = [
    { nome: 'Notebook', valor: 2245, fragil: true },
    { nome: 'Ipad', valor: 5230.2, fragil: true },
    { nome: 'Copo de vidro', valor: 10.99, fragil: true },
    { nome: 'Copo de plastico', valor: 15.5, fragil: false },
]

const y = produtos.filter((x) => x.valor > 2000 && x.fragil ? true : false);
// console.log(y);


// Implemetando
Array.prototype.myFill = function (func) {
    let x = [];
    for (let i = 0; i < this.length; i++) {
        func(this[i], i, this) ? x.push(this[i]) : '';
    }
    return x;
}

const a = produtos.myFill((x) => x.valor > 2000 && x.fragil ? true : false);
// console.log(a);