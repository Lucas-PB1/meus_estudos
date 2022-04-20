// For OF percorrer os valores contidos no array
for (let letra of 'Lucas'){
    // console.log(letra);
}

// Ja for in percorre as chaves
const teste =  ['aaa', 'bbb', 'ccc'];

for (let i in teste){
    // console.log(i);
}

for (let i of teste){
    // console.log(i);
}

// Percorrendo com for OF

let pessoas = new Map([
    ['Lucas', {estado: 'PB'}],
    ['Sam', {estado: 'SP'}],
    ['João Pedro', {estado: 'AC'}],
])

// Total
for (const i of pessoas) {
    console.log(i);
}

// Chaves
for (const i of pessoas.keys()) {
    console.log(i);
}

// Valores
for (const i of pessoas.values()) {
    console.log(i);
}

// Entries
for (const [ch, vl] of pessoas.entries()) {
    console.log(ch, vl);
}