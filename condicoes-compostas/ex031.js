/*
31) [DESAFIO] Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)
*/
console.log('________________________');
console.log('    REGRAS DO JOGO');
console.log('________________________');
console.log('Pedra ganha da Tesoura;');
console.log('Tesoura ganha do Papel;');
console.log('Papel ganha da pedra;');
console.log('________________________');
console.log('Pedra[1], Papel[2] e Tesoura[3];');

let play1 = 1;
let play2 = 3;

if(play1 == 1){
  if(play2 == 1){
    console.log('Resultado: Empate');
  } if(play2 == 2){
    console.log('Resultado: Jogador 2 ganhou!');
  } if(play2 = 3){
    console.log('Resultado: Jogador 1 ganhou!');
  }
}
if(play1 == 2){
  if(play2 == 2){
    console.log('Resultado: Empate');
  } if(play2 == 2){
    console.log('Resultado: Jogador 2 ganhou!');
  } if(play2 = 3){
    console.log('Resultado: Jogador 1 ganhou!');
  }
}
if(play1 == 3){
  if(play2 == 3){
    console.log('Resultado: Empate');
  } if(play2 == 2){
    console.log('Resultado: Jogador 2 ganhou!');
  } if(play2 = 3){
    console.log('Resultado: Jogador 1 ganhou!');
  }
}


