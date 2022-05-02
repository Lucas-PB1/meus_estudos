function MyObj() { }
console.log(MyObj.prototype);

const x = new MyObj;
console.log(x.prototype == Object.prototype);

// O objeto sempre aponta pra o prototype de seu tipo, função = Function.__proto__
console.log(MyObj.__proto__ == Function.prototype);

// E os objetos filhos como Function.__proto sempre apontam pra o pai, Object.prototype
console.log(Function.prototype.__proto__ == Object.prototype);