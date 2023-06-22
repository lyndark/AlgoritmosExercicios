/*
81) Crie um programa que leia a idade de 8 pessoas e guarde-as em um vetor. No
final, mostre:
a) Qual é a média de idade das pessoas cadastradas
b) Em quais posições temos pessoas com mais de 25 anos
c) Qual foi a maior idade digitada (podem haver repetições)
d) Em que posições digitamos a maior idade
*/
let idades = 0,
  vet = [], i,
  somaIdade = 0,
  mediaIdade = 0,
  posicaoMaiorIdade = 0,
  maiorIdade = 0;

for (i = 0; i < 8; i++) {
  idades = Math.floor(Math.random() * 30 + 1);
  vet[i] = idades;

  somaIdade += idades;

  console.log(vet[i]);
}

mediaIdade = somaIdade / 8;
console.log(`Média idades cadastradas > ${mediaIdade}`);

for (i = 0; i < 8; i++) {
  if (vet[i] > 25) {
    console.log(`Na posição [${i}], há pessoas com mais de 25 anos`);
  }

  if (vet[i] > maiorIdade) {
    maiorIdade = vet[i];
    posicaoMaiorIdade = i;
  }
}
console.log(`Maior idade digitada > ${maiorIdade} anos.`);
console.log(`Na posição [${posicaoMaiorIdade}], está a pessoa mais velha.`);