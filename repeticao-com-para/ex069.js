/*
69) [DESAFIO] Desenvolva um programa que leia o primeiro termo e a razão de uma
PA (Progressão Aritmética), mostrando na tela os 10 primeiros elementos da PA e
a soma entre todos os valores da sequência.
*/

// Leitura do primeiro termo e da razão da PA
let primeiroTermo = Math.floor(Math.random() * 100 + 1),
  razao = Math.floor(Math.random() * 100 + 1),
  soma = 0;

for (let i = 0; i < 10; i++) {
  const elemento = primeiroTermo + i * razao;
  console.log('Elemento', i + 1, ':', elemento);
  soma += elemento;
}
console.log('Soma dos elementos:', soma);