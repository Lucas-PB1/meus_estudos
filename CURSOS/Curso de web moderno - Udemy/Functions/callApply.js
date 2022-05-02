function delta(nome, sala) {
    let result = (this.b ** 2) - 4 * this.a * this.c;
    return console.log(`O aluno ${nome} da sala ${sala}ª chegou ao resultado Δ = ${result}`);
}

let x = {
    a: 2,
    b: 8,
    c: -24,
    delta,
}

x.delta('Lucas', 8);
delta.call(x, 'Pedro', 7);
delta.apply(x, ['Samuel', 6]);