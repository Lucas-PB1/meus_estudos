const x = e => e.filter((value) => typeof value == 'number')

console.log(x([1, {}, 3, 'a', 4]));