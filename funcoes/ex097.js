/*
97) Refaça o exercício 91, só que agora em forma de função Maior(), mas faça uma
adaptação que vai receber TRÊS números como parâmetro e vai retornar qual foi o
maior entre eles.
*/
function Maior(a, b, c) {
  if ((a > b) && (a > c)) {
    return a;
  } else if ((b > a) && (b > c)) {
    return b;
  } else if ((c > a) && (c > b)) {
    return c;
  } else {
    return 'Números iguais';
  }
}
let n1 = Math.floor(Math.random() * 100 + 1),
  n2 = Math.floor(Math.random() * 100 + 1),
  n3 = Math.floor(Math.random() * 100 + 1);

let maiorNumero = Maior(n1, n2, n3);
console.log(`O maior número entre ${n1}, ${n2} e ${n3} é ${maiorNumero}`);