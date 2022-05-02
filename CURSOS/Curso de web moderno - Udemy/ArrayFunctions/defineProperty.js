const obj = { 0: 'Lucas', 1: 'Sam', 2: 'João' };

Object.defineProperty(obj, 'toString', {
    value: function () { return Object.values(this) },
    enumerable: false
})

console.log(obj.toString());