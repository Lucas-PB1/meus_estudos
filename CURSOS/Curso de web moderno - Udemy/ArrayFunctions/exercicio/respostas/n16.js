const bissexto = ano => new Date(ano, 1, 29).getDate() === 29

console.log(bissexto(2100));