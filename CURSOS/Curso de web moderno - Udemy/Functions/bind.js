const pessoa = {
    saudacao: 'bom dia',
    falar() {
        console.log(this.saudacao);
    }
}

// O bind passa uma função cujo o endereço de memoria sempre vai apontar pra o objeto indicado
let x = pessoa.falar.bind(pessoa);
// x();
// Neste caso este x o seu 'this' aponta diretamente para os dados de pessoa


// 2, amarrando o this
function test() {
    this.idade = 0;
    setInterval(function () {
        this.idade++
        console.log(this.idade);
    }.bind(this), 1000);
}

// Sem o uso do bind o this interno do set interval seria invalido pelo fato de não haver chamada
new test