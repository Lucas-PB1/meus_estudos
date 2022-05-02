const pai = {
    cabelo: 'Preto',
    olhos: 'Verdes'
}
const filha = Object.create(pai);
// console.log(filha.cabelo);

// Criação direta
const filho = Object.create(pai, {
    cabelo: { value: 'verde', writable: true, enumerable: false }
})

// console.log(filho.cabelo);

// Percorrendo

for (const key in filho) {
    Object.hasOwnProperty.call(filho, key) ?
        console.log('Pessoal: ' + key) : console.log('Herança: ' + key);
}