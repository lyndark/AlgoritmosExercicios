/*
46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
8 + 10 + 12 + 14 + ... + 98 + 100.
*/
let cont = 6,
  soma = 0;

while (cont <= 100) {
  soma = soma + cont;
  console.log(cont);
  cont = cont + 2;
}
console.log(`A soma dos números é: ${soma}`);