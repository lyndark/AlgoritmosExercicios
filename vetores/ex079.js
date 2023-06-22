/*
79) Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
No final, mostre quais são os números pares que foram digitados e em que
posições eles estão armazenados.
*/
let vet = [],
  num = 0, i;

for (i = 0; i < 10; i++) {
  num = Math.floor(Math.random() * 100 + 1);
  vet[i] = num;
  console.log(vet[i]);
}

for (i = 0; i < 10; i++) {
  if (vet[i] % 2 === 0) {
    console.log(`Número ${vet[i]} é Par e está na posição [${i}]`);
  }
}