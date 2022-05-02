Number.prototype.entre = function(x, y) {
    return this >= x && this <= y
}
const result = (n) => {
    if (n.entre(9, 10)) {
        console.log('Quadro de Honra')
    } else if (n.entre(7, 8.99)) {
        console.log('Aprovado');
    } else if (n.entre(4, 6.99)) {
        console.log('Recuperação');
    } else if (n.entre(0, 3.99)) {
        console.log('Reprovado');
    } else {
        console.log('Nota invalida');
    }
}

result(9);