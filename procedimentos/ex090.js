/*
90) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
valores para um procedimento Somador() que vai calcular e mostrar a soma entre
eles
*/
function Somar(a, b) {
  let soma = a + b;
  console.log(soma);
}
let n1 = Math.floor(Math.random() * 100 + 1),
  n2 = Math.floor(Math.random() * 100 + 1);

Somar(n1, n2);