let precoFinal = 0;
const entrada = '4 5';
console.log(`A entrada foi: ${entrada.replace(' ', ' | ')}`);

const precos = [
	{ nome: 'Especificação', valor: 'Valor em reais' },
	{ nome: 'Batata Frita', valor: 4.23 },
	{ nome: 'X-salada', valor: 3.56 },
	{ nome: 'X-Bacon', valor: 4.41 },
	{ nome: 'Chachorro Quente', valor: 8.99 },
	{ nome: 'Refrigerante', valor: 0.50 },
];

const prod = entrada.split(' ');

for (let i = 0; i < prod.length; i++) {
	if (prod[i] == 0 || prod[i] > precos.length - 1) return console.log('Você informou uma entrada invalida');
	precoFinal = precos[prod[i]].valor + precoFinal;
};

console.log('Total: R$ ' + (precoFinal.toString()).replace('.', ','));


