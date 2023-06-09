/*
32) [DESAFIO] Crie um jogo onde o computador vai sortear um número entre 1 e 5 o
jogador vai tentar descobrir qual foi o valor sorteado.
*/
let sorteado = Math.floor(Math.random() * 5 + 1);
let n1 = 0;

if(n1 === sorteado){
  console.log('Acertou');
  console.log('Número sorteado: ' + sorteado)
} else{
  console.log('Tente novamente');
  console.log('Número sorteado: ' + sorteado)
}