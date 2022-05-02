// Toda função tem um parametro chamado arguments que contém todos os argumentos passados
function listaNomes() {
    for (let key in arguments) {
        console.log("-" + arguments[key] + "-")
    }
}

// listaNomes('Lucas', 'João', 'Samuel', 'Edna', 'Luciano');


function replaceList() {
    let lastPos = arguments.length - 2;
    for (let key in arguments) {
        if (key == lastPos) break;
        arguments[lastPos] = arguments[lastPos].replaceAll(arguments[key], arguments[lastPos + 1]);
    }

    return arguments[lastPos];
}
let txt = 'L2u@c123as';

console.log(replaceList('2', '@', '1', '3', txt, ''));


// Maior
function max() {
    let maior = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > maior) maior = arguments[i];
    }
    return maior;
}