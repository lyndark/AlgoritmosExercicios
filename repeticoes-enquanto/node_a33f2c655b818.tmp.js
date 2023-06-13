/*
53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
a) Quantos homens foram cadastrados
b) Quantas mulheres foram cadastradas
c) A média de idade do grupo
d) A média de idade dos homens
e) Quantas mulheres tem mais de 20 anos
*/
let nomes = 0,
  sexo = 0,
  idade = 0,
  homensCadastrados = 0,
  mulheresCadastradas = 0,
  mediaIdadeGrupo = 0,
  mediaIdadeHomens = 0,
  mulheresComMaisDe20 = 0,
  cont = 0;

while (cont < 5) {
  sexo = ['F', 'M', 'M', 'M', 'F'];

  if (sexo === 'M') {
    homensCadastrados++;
  }
}

console.log(`Homens cadastrados: ${homensCadastrados}`);