/*
74) Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 10 posições, conforme abaixo:
5 3 5 3 5 3 5 3 5 3
0 1 2 3 4 5 6 7 8 9
*/
let vet = [],
  value1 = 5,
  value2 = 3,
  i;

for (i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    vet[i] = value1
  } else {
    vet[i] = value2
  }
  console.log(vet[i]);
}