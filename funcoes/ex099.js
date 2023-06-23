/*
99) Faça um programa que possua uma função chamada Potencia(), que vai receber
dois parâmetros numéricos (base e expoente) e vai calcular o resultado da
exponenciação.
Ex: Potencia(5,2) vai calcular 52 = 25
*/
function Potencia(base, expoente) {
  let resultado = 1;

  for (let i = 1; i <= expoente; i++) {
    resultado *= base;
  }
  return resultado;
}
let n1 = Math.floor(Math.random() * 10 + 1),
  n2 = Math.floor(Math.random() * 10 + 1);

console.log(Potencia(n1, n2));