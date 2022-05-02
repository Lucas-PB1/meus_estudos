const entre = (value, min, max, inclusivo = false) => {
    if (inclusivo) return value <= max && value >= min ? true : false;
    return value < max && value > min ? true : false;
}

console.log(entre(7, 2, 4));