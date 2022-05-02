const less = palavra => ['a', 'e', 'i', 'o', 'u']
    .reduce((e, atual) => e.replace(atual, ''), palavra.toLowerCase())

console.log(less('Lucas'));

// Menor ainda
const less2 = frase => frase.replace(/[aeiou]/ig, '');
console.log(less('Lucas'));
