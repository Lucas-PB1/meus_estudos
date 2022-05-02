let pessoa = {
    _idade: 1, // Convenção de usar _ quando se tratar de get e set
    get idade() { return this._idade; },
    set idade(x) {
        if (x > this._idade) this._idade = x;
    }
}

console.log(pessoa.idade);
pessoa.idade = 21;
console.log(pessoa.idade);
pessoa.idade = 10;
console.log(pessoa.idade);