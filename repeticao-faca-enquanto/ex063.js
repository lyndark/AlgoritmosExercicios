/*
63) Crie um programa usando a estrutura “faça enquanto” que leia vários números.
A cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na
tela:
a) O somatório entre todos os valores
b) Qual foi o menor valor digitado
c) A média entre todos os valores
d) Quantos valores são pares
*/
let numeros = 0,
  soma = 0,
  menorValor = Infinity,
  somaValores = 0,
  mediaValores = 0,
  valoresPares = 0,
  numerosCadastrados = 0,
  fim = 0;

do {
  numeros = Math.floor(Math.random() * 100 + 1);
  fim = Math.floor(Math.random() * 2 + 1);
  console.log(numeros);

  soma += numeros;

  if (numeros < menorValor) {
    menorValor = numeros;
  }

  if (numeros % 2 === 0) {
    valoresPares++;
  }
  somaValores += numeros;
  numerosCadastrados++;
} while (fim === 2)

mediaValores = somaValores / numerosCadastrados;

console.log(`Soma: ${soma}`);
console.log(`Menor valor digitado: ${menorValor}`);
console.log(`Valores pares: ${valoresPares}`);
console.log(`Média entre todos os valores: ${mediaValores}`);