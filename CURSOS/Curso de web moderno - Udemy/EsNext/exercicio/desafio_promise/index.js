const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

const getTxt = async () => {
    return new Promise((resolve, reject) => {

        fs.readFile(caminho, (_, e) => {
            resolve(e.toString());
        })
    })
}

console.time('promise');

getTxt().then(a => {
    console.log(a)
    console.timeEnd("promise");
})