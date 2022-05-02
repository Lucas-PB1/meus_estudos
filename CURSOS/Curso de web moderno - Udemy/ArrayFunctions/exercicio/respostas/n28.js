const x = (vetor, qtd) => vetor.filter(e => `${e}`.length == qtd);
console.log(x([38, 2, 365, 10, 125, 11], 2));