// Estrutura não indexada sem repetição
const times = new Set();

// É possivel encadear
times.add('vasco');
times.add('flamento').add('palmeiras');

console.log(times);

// Temos a função size e has por padrão, assim como delete