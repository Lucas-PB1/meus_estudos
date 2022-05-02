// Impedindo de extender os objetos
const lucas = Object.preventExtensions({
    Nome: 'Lucas',
    Idade: 21,
})
lucas.Altura = 1.72;

// Verificando
console.log('Extensivel: ' + Object.isExtensible(lucas));
console.log(lucas);


// Impedindo de extender os objetos e excluir
const lucas2 = Object.seal({
    Nome: 'Lucas',
    Idade: 21,
})
delete lucas.Idade;
lucas.Nome = 'Pedro';

// Verificando
console.log('Selado: ' + Object.isSealed(lucas2));
console.log(lucas2);
