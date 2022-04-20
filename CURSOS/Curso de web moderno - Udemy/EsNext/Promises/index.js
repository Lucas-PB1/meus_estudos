function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase);
        }, segundos * 1000);
    })
}

// o Then espera que a promise seja resolvido para encadear
falarDepoisDe(3, 'Sei...').then((frase) => frase.concat('?!?')).then((outraFrase) => console.log(outraFrase)).catch(e => console.log('erro: ' + e));