const fs = require('fs');

const path = __dirname + '/archive.json';
// __dirname marca o caminho absoluto

// Lendo de forma sincrona
const content = fs.readFileSync(path, 'utf-8');
//console.log(content);

// Assincrono
fs.readFile(path, 'utf-8', (err, conteudo) => {
    if (err) return console.log('Deu erro');

    let config = JSON.parse(conteudo);
    // console.log(config.db.host);
});

// Lendo json diretamente
const configJson = require('./archive.json');
// console.log(configJson.db.senha);

// Lendo uma pasta
fs.readdir(__dirname, (err, content) => {
    if (err) return console.log('Deu erro');

    console.log(content);
})