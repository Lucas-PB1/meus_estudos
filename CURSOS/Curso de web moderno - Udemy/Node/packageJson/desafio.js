const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

axios.get(url).then(r => {
    let func = r.data
    func = func.filter(e => e.pais == 'China' && e.genero == 'F' ? true : false)
        .reduce((min, atual) => min.salario < atual.salario ? min : atual);
    console.log(func);
});

