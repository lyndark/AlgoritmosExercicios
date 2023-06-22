/*
82) Faça um algoritmo que leia a nota de 10 alunos de uma turma e guarde-as em
um vetor. No final, mostre:
a) Qual é a média da turma
b) Quantos alunos estão acima da média da turma
c) Qual foi a maior nota digitada
d) Em que posições a maior nota aparece
*/
let vet = [],
  notas = 0,
  somaMedia = 0,
  mediaTurma = 0,
  posicaoMaiorNota = 0,
  maiorNota = 0,
  i;

for (i = 0; i < 10; i++) {
  notas = Math.floor(Math.random() * 10.1 + 1);
  vet[i] = notas;

  somaMedia += notas;

  console.log(vet[i]);
}

mediaTurma = somaMedia / 10;

for (i = 0; i < 10; i++) {
  if (vet[i] > mediaTurma) {
    console.log(`Posição [${i}], aluno acima da média da turma.`);
  }

  if (vet[i] > maiorNota) {
    maiorNota = vet[i];
    posicaoMaiorNota = i;
  }
}
console.log(`Média Turma > ${mediaTurma}`);
console.log(`Maior nota > ${maiorNota}`);
console.log(`Maior nota na posição [${posicaoMaiorNota}].`);