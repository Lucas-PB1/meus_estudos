<script src='functions.js'></script>

function createWeapon(ataque, velocidade, defesa) {
  return obj = {
    'ataque': ataque,
    'velocidade': velocidade,
    'defesa': defesa,
  };
};

function createEnemy(nome, ataque, defesa, velocidade) {
  let vida = Math.floor(Math.random() * (12 - 6 + 1)) + 6;
  return obj = {
    'nome': nome,
    'vida': calc.d12(),
    'ataque': ataque,
    'velocidade': velocidade,
    'defesa': defesa,
  };
};

function createPlayer(nome, arma) {
  return obj = {
    'nome': nome,
    'vida': calc.d12(),
    'arma': arma,
  };
};

logs = {
  damage: function (atacante, alvo, turno, dano, winner = '') {
    if (alvo['vida'] <= 0) {
      alvo['vida'] = 0;
      winner = `\n${atacante['nome']} venceu`;
    }
    return console.log(`\nTurno: ${turno}\n${atacante['nome']} ataca, ${alvo['nome']} recebeu ${dano} de dano restou ${alvo['vida']} \n${winner}`);
  },
}

calc = {
  d12: function () {
    return Math.floor(Math.random() * (12 - 6 + 1)) + 6;
  },
  d6: function () {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  },
  critical: function (element) {
    if (Math.floor(Math.random() * (element - 1 + 1)) + 1 == element) {
      return true;
    } else {
      return false;
    }
  },
  forca_ataque: function (ataque) {
    let atk = ataque + this.d6() + this.d6();
    if (this.critical(ataque)) {
      console.log('\nCRITICO, DANO AUMENTADO');
      atk = atk + (atk / 2);
    }
    console.log(`A força do ataque é: ${atk}`);
    return atk;
  },
  forca_defesa: function (defesa) {
    let def = defesa + this.d6();
    if (this.critical(defesa)) {
      console.log('\nPERFEITA DEFESA, DANO DESVIADO');
      def = def + (def / 2);
    }
    console.log(`A força da defesa é: ${def}`);
    return def;
  }
}

function battle(enemy, player) {

  let [turno, firstTurn] = ['0', true];

  while (player['vida'] > 0 && enemy['vida'] > 0) {

    if (firstTurn) {
      if (player['arma']['velocidade'] > enemy['velocidade']) {
        [turno, firstTurn] = [0, false];
      } else {
        [turno, firstTurn] = [1, false];
      }
    } else {
      if (turno % 2 == 0) {
        let dano = calc.forca_ataque(enemy['ataque']) - calc.forca_defesa(player['arma']['defesa']);
        if (dano < 0) dano = 0;
        player['vida'] = player['vida'] - dano;
        logs.damage(enemy, player, turno, dano);
        turno++;
      } else {
        let dano = calc.forca_ataque(player['arma']['ataque']) - calc.forca_defesa(enemy['defesa']);
        if (dano < 0) dano = 0;
        enemy['vida'] = enemy['vida'] - dano;
        logs.damage(player, enemy, turno, dano);
        turno++;
      }
    }

  }
};

const espada = createWeapon(10, 8, 5);
const lanca = createWeapon(6, 10, 8);
const machado = createWeapon(9, 5, 7);

window.onload = function () {
  const teste = document.getElementsByClassName('weapon');
  console.log(teste[0]);

  let enemy = createEnemy('Samuel', 6, 10, 8);
  let player = createPlayer('Lucas', lanca);

  // battle(enemy, player);
}