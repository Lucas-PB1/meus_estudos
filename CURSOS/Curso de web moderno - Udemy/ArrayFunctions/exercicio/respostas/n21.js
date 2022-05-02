const x = vetor => vetor.reduce((anterior, atual) => anterior < atual ? anterior : atual);

const y = vetor => Math.min(...vetor);

console.log(y([6, 2, -3, 4, 5]));