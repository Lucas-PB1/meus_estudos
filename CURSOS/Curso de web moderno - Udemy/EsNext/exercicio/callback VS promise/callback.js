const http = require('http');

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    http.get(url, res => {
        let resultado = '';

        res.on('data', dados => {
            resultado += dados;
        })

        res.on('end', () => {
            callback(JSON.parse(resultado));
        })
    })
}

let nomes = [];

getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map((value) => `A: ${value.nome}`));
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map((value) => `B: ${value.nome}`));
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map((value) => `C: ${value.nome}`));
            console.log(nomes);
        })
    })
})

