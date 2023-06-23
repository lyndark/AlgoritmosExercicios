/*
95) Refaça o exercício 90, só que agora em forma de função Somador(), que vai
receber dois parâmetros e vai retornar o resultado da soma entre eles para o
programa principal.
*/
function Soma(a, b) {
  return a + b;
}
let n1 = Math.floor(Math.random() * 100 + 1),
  n2 = Math.floor(Math.random() * 100 + 1);

console.log(Soma(n1, n2));