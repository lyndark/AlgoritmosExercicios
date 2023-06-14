/*
59) Crie um programa que leia o sexo e a idade de várias pessoas. O programa vai
perguntar se o usuário quer continuar ou não a cada pessoa. No final, mostre:
a) qual é a maior idade lida
b) quantos homens foram cadastrados
c) qual é a idade da mulher mais jovem
d) qual é a média de idade entre os homens
*/
let flag = true,
  finalizar = 0,
  idades = 0,
  maiorIdadeLida = 0,
  sexo = 0,
  homensCadastrados = 0,
  mulherMaisJovem = Infinity,
  somaIdadeHomens = 0,
  mediaIdadeHomens = 0;

while (flag) {
  idades = Math.floor(Math.random() * 100 + 1);
  sexo = Math.floor(Math.random() * 2 + 1);
  finalizar = Math.floor(Math.random() * 3 + 1);
  console.log(`Idade: ${idades} Sexo ${sexo}`);

  if (idades > maiorIdadeLida) {
    maiorIdadeLida = idades;
  }
  if ((sexo === 1)) {
    homensCadastrados++;
    somaIdadeHomens += idades;
  }
  if (sexo === 2) {
    if (idades < mulherMaisJovem) {
      mulherMaisJovem = idades;
    }
  }
  if (finalizar === 3) {
    flag = false;
  }
}
mediaIdadeHomens = somaIdadeHomens / homensCadastrados;

console.log(`Maior idade lida: ${maiorIdadeLida} anos.`);
console.log(`Quantidade de homens cadastrados: ${homensCadastrados}`);
console.log(`Idade da mulher mais jovem: ${mulherMaisJovem} anos.`);
console.log(`Média de idade homens: ${mediaIdadeHomens} anos.`);