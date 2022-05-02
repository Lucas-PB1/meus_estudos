const fs = require('fs');

const obj = {
    host: 'localhost',
    database: 'teste-geral',
    user: 'root',
    senha: '123'
}

// Local, Nome, Texto, callback de erro
/* fs.writeFile('config.json', JSON.stringify(obj), err => {
   
}) */

// Escrevendo na pasta desejada
fs.writeFileSync(__dirname + '/config.json', JSON.stringify(obj));