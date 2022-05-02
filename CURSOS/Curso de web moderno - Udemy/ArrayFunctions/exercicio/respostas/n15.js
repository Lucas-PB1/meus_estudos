let x = [10, 70, 22, 43]

const compare = vetor => vetor.filter((e, i) => e % 2 == 0 && i % 2 == 0)

console.log(compare(x));