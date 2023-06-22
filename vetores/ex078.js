/*
78) Escreva um programa que leia 15 números e guarde-os em um vetor. No final,
mostre o vetor inteiro na tela e em seguida mostre em que posições foram
digitados valores que são múltiplos de 10.
*/
let vet = [],
  num = 0,
  i;

for (i = 0; i < 15; i++) {
  num = Math.floor(Math.random() * 100 + 1);
  vet[i] = num;
  console.log(vet[i]);
}

for (i = 0; i < 15; i++) {
  if (vet[i] % 10 === 0) {
    console.log(`Posição [${i}], valor múltiplo de 10.`)
  }
}