const mes = x => {
    const meses = [
        'janeiro', 'fevereiro', 'março', 'abril',
        'maio', 'junho', 'julho', 'agosto',
        'setembro', 'outubro', 'novembro', 'dezembro'
    ]

    if (x > 0 < 13) return console.log(meses[--x]);
}

mes(2);