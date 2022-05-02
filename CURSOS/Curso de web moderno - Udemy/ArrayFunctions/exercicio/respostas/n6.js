const inverse = x => {
    let a = typeof x;
    if (a != 'boolean' && a != 'number')
        return "booleano ou número esperados, mas o parâmetro é do tipo " + a
    if (a == 'boolean') return !x;
    if (a == 'number') return -x;

}

console.log(inverse(false));