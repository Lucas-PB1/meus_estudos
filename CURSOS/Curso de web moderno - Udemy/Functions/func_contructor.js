function corredor(nome = 'velocista', velocidade = 10, trajeto = 100) {
    let tempo = trajeto / (velocidade * 0.1);

    this.nova_volta = () => {
        tempo = trajeto / (--velocidade * 0.1);
    }
    this.resultado = () => {
        console.log(`${nome} consegue correr ${(velocidade * 0.1).toFixed(1)}m por segundo e terminará este trajeto em ${tempo.toFixed(2)}s`);
    }
}

const lucas = new corredor('Hero', 30, 1000);
lucas.resultado();
lucas.nova_volta();
lucas.resultado();
