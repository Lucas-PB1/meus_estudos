const x = (value, vezes) => {
    let n = value;
    for (let i = 1; i < vezes; i++) value += n;
    return value;
}

console.log(x(0, 7));