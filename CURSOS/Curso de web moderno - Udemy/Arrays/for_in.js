let a = [1, 2, 3, 4, 5, 6];

for (let i in a) {
    console.log(`${i} = ${a[i]}`);
}

// Também pode ser usado em objetos

let lucas = {
    nome: 'Lucas',
    idade: '21',
    sexo: 'Masculino',
    altura: 1.72,
    exibir: () => {
        console.log(`${nome} que tem ${idade} anos, é do sexo ${sexo} com a altura de ${altura} metros`);
    }
}

for (const key in lucas) {
    if(typeof lucas[key] == 'function') return;
    console.log(`${key}: ${lucas[key]}`)
}