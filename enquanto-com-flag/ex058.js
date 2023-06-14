/*
58) Faça um algoritmo que leia a idade de vários alunos de uma turma. O programa
vai parar quando for digitada a idade 999. No final, mostre quantos alunos
existem na turma e qual é a média de idade do grupo.
*/
let flag = true,
  idades = 0,
  quantidadeAlunos = 0,
  somaIdade = 0,
  mediaIdadeGrupo = 0;

while (flag) {
  idades = Math.floor(Math.random() * 1000 + 1);
  console.log(idades);
  quantidadeAlunos++;

  if (idades === 999) {
    flag = false;
  }
  somaIdade += idades;
}
mediaIdadeGrupo = somaIdade / quantidadeAlunos;
console.log(`Quantidade de alunos: ${quantidadeAlunos}.`)
console.log('Média idade do grupo: ', (mediaIdadeGrupo).toFixed(2));