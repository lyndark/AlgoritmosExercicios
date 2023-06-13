/*
55) [DESAFIO] Vamos melhorar o jogo que fizemos no exercício 32. A partir de
agora, o computador vai sortear um número entre 1 e 10 e o jogador vai ter 4
tentativas para tentar acertar.
*/
let sorteado = Math.floor(Math.random() * 10 + 1),
  palpite = 0,
  cont = 0,
  tentativas = 4,
  acertou = 0;
console.log('Sorteado: ' + sorteado);
while (cont < tentativas) {
  palpite = Math.floor(Math.random() * 10 + 1)
  console.log('Palpites ' + palpite)
  if (palpite === sorteado) {
    acertou = true;
    break;
  }
  cont = cont + 1;
}
if (acertou) {
  console.log('Parabéns! Você acertou o número.');
} else {
  console.log('Suas tentativas acabaram. O número era ' + palpite + '.');
}