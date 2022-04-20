// Criando um Map
const tecnologia = new Map();

// Função para setar valores
tecnologia.set('react', { framework: false });
tecnologia.set('angular', { framework: true });

// Pegando um valor
console.log(tecnologia.get('react'));

// Usando chaves diversificadas
const chaves = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número']
])

// Percorrendo como objeto
chaves.forEach((value, index, array) => {
    console.log(value, index);
})

// Se existe tal objeto
console.log(chaves.has(123));
chaves.delete(123);

// Tamanho do objeto
console.log(chaves.size);