let a = 1;
let b = 2;
let c = 3;
let param = 'valorFinal';
let result = a + b + c;

// Antiga forma
let calc1 = {
    a: a, b: b, c: c,
    printEnd: function () {
        console.log(this.a + this.b + this.c);
    }
}
calc1[param] = result;
console.log(calc1);

// Nova Forma
let calc2 = {
    a, b, c, [param]: result,
    printEnd: function () {
        console.log(this.a + this.b + this.c);
    }
}
console.log(calc2);