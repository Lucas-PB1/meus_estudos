const compare = (buscar, vetor) => vetor.filter(e => e.includes(buscar));

console.log(compare('Lu', ['Lucas']));