/*
98) Crie um programa que tenha uma função SuperSomador(), que vai receber dois
números como parâmetro e depois vai retornar a soma de todos os valores no
intervalo entre os valores recebidos.
Ex:
SuperSomador(1, 6) vai somar 1 + 2 + 3 + 4 + 5 + 6 e vai retornar 21
SuperSomador(15, 19) vai somar 15 + 16 + 17 + 18 + 19 e vai retornar 85
*/
function SuperSomador(inicio, fim) {
  let soma = 0, i;
  for (i = inicio; i <= fim; i++) {
    soma += i;
  }
  return soma;
}
let n1 = Math.floor(Math.random() * 10 + 1),
  n2 = Math.floor(Math.random() * 100 + 1);

console.log(SuperSomador(n1, n2));