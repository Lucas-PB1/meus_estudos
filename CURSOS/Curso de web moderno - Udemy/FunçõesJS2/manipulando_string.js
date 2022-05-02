// Pegando a posição
let nome = 'Lucas';
console.log(nome.charAt(0));

// Pegando na tabela asc
console.log(nome.charCodeAt(0));

//Buscando a posição
console.log(nome.indexOf('L'));

//Pegando a partir da posição
console.log(nome.substring(2,4));

// Concatenar
console.log("Meu nome é: ".concat(nome))

//Replace comum
console.log(nome.replace('L', 'l'));

/*Replace com expressão regular pra substituir o todos os digito
*Obs: Veja que o 'g' marca como uma expressão global, sem ele apenas o primeiro seria trocado*/
let now = 'L1uc9as';
console.log(now.replace(/\d/g, ''));

// Split
let n1 = 'Lucas, João, Samuel';
console.log(n1.split(','));

// Arrow fuction com uppercase
let up = text => text.toUpperCase();
console.log(up(nome));