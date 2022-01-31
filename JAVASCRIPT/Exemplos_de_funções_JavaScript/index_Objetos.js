//Projeto 1 - Objeto endereço"
function endereco(Rua, Cidade, Cep) {
	return {
		Rua,
		Cidade,
		Cep
	}	
}

function exibirEndereco(casa){
	for (let key in casa) {
		console.log(`${key}: ${casa[key]}`);
	}
}

let casa = endereco("Bom jesus", "João Pessoa", "00058070-060");
let casa2 = endereco("Bom jesus", "João Pessoa", "00058070-060");

property(casa,casa2);

function property(index, index2){
	return index.Rua === index2.Rua &&
		   index.Cidade === index2.Cidade &&
		   index.Cep === index2.Cep;
}

function memomyindex(index, index2){
	return index2 === index;
}

