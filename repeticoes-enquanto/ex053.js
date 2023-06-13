/*
53) Faça um programa que leia a idade e o sexo de 5 pessoas, mostrando no final:
a) Quantos homens foram cadastrados
b) Quantas mulheres foram cadastradas
c) A média de idade do grupo
d) A média de idade dos homens
e) Quantas mulheres tem mais de 20 anos
*/
let sexo = 0,
  idade = 0,
  homensCadastrados = 0,
  mulheresCadastradas = 0,
  somaIdade = 0,
  somaIdadeHomens = 0,
  mulheresComMaisDe20 = 0,
  cont = 0;

while (cont < 5) {
  sexo = Math.floor(Math.random() * 2 + 1);

  idade = Math.floor(Math.random() * 100);

  if (sexo === 1) {
    homensCadastrados++;
    somaIdadeHomens += idade;
  } else if (sexo === 2) {
    mulheresCadastradas++;
  }

  if ((sexo === 2) && (idade > 20)) {
    mulheresComMaisDe20++;
  }
  somaIdade += idade;
  console.log('Sexo: ' + sexo);
  console.log('Idade ' + idade);
  cont = cont + 1;
}
let mediaIdadeGrupo = somaIdade / 5;
let mediaIdadeHomens = somaIdadeHomens / homensCadastrados;

console.log(`Homens cadastrados: ${homensCadastrados}`);
console.log(`Mulheres cadastradas: ${mulheresCadastradas}`);
console.log(`Média idade Homens: ${mediaIdadeHomens}`);
console.log(`Média idade Grupo: ${mediaIdadeGrupo}`);
console.log(`Mulheres com mais de 20: ${mulheresComMaisDe20}`);