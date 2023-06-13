/*
50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
mostre na tela:
a) Quais foram os números sorteados
b) Quantos números estão acima de 5
c) Quantos números são divisíveis por 3
*/
let sorteado = [],
  maiorQue5 = 0,
  divisíveisPor3 = 0,
  cont = 0;

while (cont <= 20) {
  numero = Math.floor(Math.random() * 10 + 1);
  sorteado.push(numero);

  if (numero > 5) {
    maiorQue5++;
  }
  if (numero % 3 === 0) {
    divisíveisPor3++;
  }
  cont = cont + 1;
}
console.log(`Números sorteados: ${sorteado}`);
console.log(`Números acima de 5: ${maiorQue5}`);
console.log(`Números divisivel por 3: ${divisíveisPor3}`);
