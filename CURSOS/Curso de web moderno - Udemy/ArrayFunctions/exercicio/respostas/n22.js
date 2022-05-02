const x = num => {
    let txt = 'Que pena!';
    let compare = Math.floor(Math.random() * (10 - 1 + 1) + 1);

    if (compare == num) txt = 'Parabéns!';
    return console.log(`${txt} o número sorteado foi ${compare}`);
}

x(8);