/*
70) [DESAFIO] Faça um programa que mostre os 10 primeiros elementos da Sequência
de Fibonacci:
1 1 2 3 5 8 13 21...
*/
let numero1 = 0,
  numero2 = 1,
  proximoNumero;

for (let i = 0; i < 10; i++) {
  if (i < 2) {
    proximoNumero = i;
  } else {
    proximoNumero = numero1 + numero2;
    numero1 = numero2;
    numero2 = proximoNumero;
  }
  console.log(proximoNumero);
}