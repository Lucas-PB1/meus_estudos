const http = require('http');

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = '';

            res.on('data', dados => {
                resultado += dados;
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado));
                } catch (error) {
                    reject(error);
                }
            })
        })
    })
}

/*
Imitando callback
let nomes = [];

getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map((value) => `A: ${value.nome}`));
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map((value) => `B: ${value.nome}`));
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map((value) => `C: ${value.nome}`));
            console.log(nomes);
        })
    })
})
*/

Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(value => value.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e))