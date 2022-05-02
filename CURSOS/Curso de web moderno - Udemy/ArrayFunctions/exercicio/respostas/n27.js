let obj = { a: 1, b: 2, c: 3 };

const reverse = obj => {
    let result = {};
    for (const key in obj) result[obj[key]] = key;
    return result;
}

console.log(reverse(obj));