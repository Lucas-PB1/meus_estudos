const media = vetor => vetor.reduce((result, x) => result + x) / vetor.length
console.log(media([1, 2, 3, 4, 5]));