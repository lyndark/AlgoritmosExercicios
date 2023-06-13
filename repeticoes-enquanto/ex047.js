/*
47) Desenvolva um aplicativo que mostre na tela o resultado da expressão 500 +
450 + 400 + 350 + 300 + ... + 50 + 0
*/
let cont = 500,
  soma = 0;

while (cont >= 0) {
  soma = soma + cont;
  console.log(cont);
  cont = cont - 50;
}
console.log(`A soma dos valores são: ${soma}`);