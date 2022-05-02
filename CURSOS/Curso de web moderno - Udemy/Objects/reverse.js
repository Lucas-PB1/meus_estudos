// Todo tipo tem seu prototype

String.prototype.reverse = function () {
    return this.split('').reverse().join('');
}

// Assim adicionamos uma função diretamente para todas as strings
console.log('Lucas'.reverse());