/*
52) Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final:
a) Qual é a média de idade do grupo
b) Quantas pessoas tem mais de 18 anos
c) Quantas pessoas tem menos de 5 anos
d) Qual foi a maior idade lida
*/
let somaIdade = 0,
  maiorIdade = 0,
  menorQue5 = 0,
  maiorQue18 = 0,
  cont = 1;

while (cont <= 10) {
  var idade = Math.floor(Math.random() * 100);
  somaIdade += idade;
  console.log(idade);

  if (idade > 18) {
    maiorQue18++;
  }
  if (idade < 5) {
    menorQue5++;
  }
  if (idade > maiorIdade) {
    maiorIdade = idade;
  }
  cont = cont + 1;
}
console.log(`Tem mais de 18 anos: ${maiorQue18} pessoas`)
console.log(`Tem menos de 5 anos: ${menorQue5} pessoas`)
console.log(`Maior idade lida: ${maiorIdade} anos`)