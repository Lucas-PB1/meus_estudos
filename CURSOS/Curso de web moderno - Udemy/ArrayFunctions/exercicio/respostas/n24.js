const count = (buscar, txt) => [...txt]
    .filter(txt => txt === buscar).length


console.log(count('m', 'Conhece-te a ti mesmo'));