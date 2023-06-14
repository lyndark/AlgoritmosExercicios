/*
60) Desenvolva um algoritmo que leia o nome, a idade e o sexo de várias pessoas.
O programa vai perguntar se o usuário quer ou não continuar. No final, mostre:
a) O nome da pessoa mais velha
b) O nome da mulher mais jovem
c) A média de idade do grupo
d) Quantos homens tem mais de 30 anos
e) Quantas mulheres tem menos de 18 anos
*/
let flag = true,
  nome = 0,
  idade = 0,
  sexo = 0,
  finalizar = 0,
  nomePessoaVelha = 0,
  nomeMulherJovem = Infinity,
  pessoasCadastradas = 0,
  somaIdadeGrupo = 0,
  mediaIdadeGrupo = 0,
  homensMaisDe30 = 0,
  mulheresComMenos18 = 0;

while (flag) {
  nome = Math.floor(Math.random() * 1000 + 1);
  idade = Math.floor(Math.random() * 100 + 1);
  sexo = Math.floor(Math.random() * 2 + 1);
  finalizar = Math.floor(Math.random() * 3 + 1);
  console.log(`Nome: ${nome}, Idade: ${idade}, Sexo ${sexo}`);

  if (idade > nomePessoaVelha) {
    nomePessoaVelha = idade;
  }
  if (sexo === 2) {
    if (idade < nomeMulherJovem) {
      nomeMulherJovem = idade;
    }
    if (idade < 18) {
      mulheresComMenos18++;
    }
  }

  if ((sexo === 1) && (idade > 30)) {
    homensMaisDe30++;
  }

  if (finalizar === 3) {
    flag = false;
  }

  pessoasCadastradas++;
  somaIdadeGrupo += idade;
}
mediaIdadeGrupo = somaIdadeGrupo / pessoasCadastradas;
console.log(`Nome pessoa mais velha: ${nomePessoaVelha}`);
console.log(`Nome da mulher mais jovem: ${nomeMulherJovem}`);
console.log(`Média de idade grupo: ${mediaIdadeGrupo}`);
console.log(`Homens tem mais de 30 anos: ${homensMaisDe30}`);
console.log(`Mulheres com menos de 18 anos: ${mulheresComMenos18}`);