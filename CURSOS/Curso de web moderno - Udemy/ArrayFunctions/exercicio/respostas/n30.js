const notas = {
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}

const media = obj => {
    let now = [];
    for (const key in obj)
        now.push({
            aluno: key,
            media: obj[key].reduce((n1, n2) => n1 + n2) / obj[key].length
        });

    now = now.reduce((a, b) => a.media > b.media ? a : b)
    return console.log(now);

}

media(notas)