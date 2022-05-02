const pessoa = {
    idade: 21,
    nome: 'Lucas'
}
const x = (element, property) => {
    delete element[property]
    const a = element.clone
    return a;
}

console.log(Object.is(x(pessoa, "idade"), pessoa));

