/*
72) Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
5 10 15 20 25 30 35 40 45 50
0 1 2 3 4 5 6 7 8 9
*/
let vet = [],
  value = 5,
  i;

for (i = 0; i < 9; i++) {
  vet[i] = value;
  value += 5
  console.log(vet[i])
}