/*
56) Crie um programa que leia vários números pelo teclado e mostre no final o
somatório entre eles.
Obs: O programa será interrompido quando o número 1111 for digitado
*/
let flag = true,
  n = 0,
  soma = 0;

while (flag) {
  n = Math.floor(Math.random() * 1111 + 1);
  console.log(n);

  if (n === 1111) {
    flag = false;
  }
  soma += n;
}
console.log(`A soma os números é: ${soma}`);