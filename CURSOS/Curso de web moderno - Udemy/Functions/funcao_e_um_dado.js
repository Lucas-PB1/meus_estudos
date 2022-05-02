function soma(a, b) {
    return a + b;
}

const soma2 = function (a, b) {
    return a + b;
}

const soma3 = [function (a, b) { return a + b; }, 1, 2, 3];

const soma4 = {
    func: function (a, b) {
        return a + b;
    }
}

function soma5() {
    return function soma6(a, b){
        console.log(a + b);
    }
}