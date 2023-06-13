/*
48) Faça um programa que leia 7 números inteiros e no final mostre o somatório
entre eles.
*/
let cont = 1,
  soma = 0,
  n = 0;

while (cont <= 7) {
  n = Math.floor(Math.random() * 10);
  soma = soma + n;
  console.log(n);
  cont = cont + 1;
}
console.log(`A soma dos números é: ${soma}`);