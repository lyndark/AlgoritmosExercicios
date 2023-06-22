/*
76) Crie um programa que preencha automaticamente um vetor numérico com 7
números gerados aleatoriamente pelo computador e depois mostre os valores
gerados na tela.
*/
let vet = [],
  num = 0, i;

for (i = 0; i < 7; i++) {
  num = Math.floor(Math.random() * 100 + 1);
  vet[i] = num;
  console.log(vet[i]);
}