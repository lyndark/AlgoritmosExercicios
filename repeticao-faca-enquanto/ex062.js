/*
62) Faça um programa usando a estrutura “faça enquanto” que leia a idade de
várias pessoas. A cada laço, você deverá perguntar para o usuário se ele quer ou
não continuar a digitar dados. No final, quando o usuário decidir parar, mostre
na tela:
a) Quantas idades foram digitadas
b) Qual é a média entre as idades digitadas
c) Quantas pessoas tem 21 anos ou mais.
*/

let idade = 0,
  totalIdade = 0,
  mediaIdade = 0,
  somaIdade = 0,
  maisDe20 = 0,
  totalCadastrados = 0,
  fim = 0;

do {
  idade = Math.floor(Math.random() * 100 + 1);
  fim = Math.floor(Math.random() * 2 + 1);
  console.log(`Idade: ${idade}`);

  totalCadastrados++;
  totalIdade += idade;
  somaIdade += idade;

  if (idade > 21) {
    maisDe20++;
  }
} while (fim == 2);

mediaIdade = somaIdade / totalCadastrados;

console.log(`Total idades: ${totalIdade}`);
console.log(`Média entre as idades digitadas: ${mediaIdade}`);
console.log(`Pessoas tem 21 anos ou mais: ${maisDe20}`);