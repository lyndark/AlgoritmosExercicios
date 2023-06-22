/*
91) Desenvolva um algoritmo que leia dois valores pelo teclado e passe esses
valores para um procedimento Maior() que vai verificar qual deles é o maior e
mostrá-lo na tela. Caso os dois valores sejam iguais, mostrar uma mensagem
informando essa característica.
*/
function Maior(a, b) {
  if (a > b)
    console.log(`${a} é maior que ${b}`);
  else if (b > a)
    console.log(`${b} é maior que ${a}`);
  if (a === b)
    console.log(`Números iguais.`);
}
let n1 = Math.floor(Math.random() * 100 + 1),
  n2 = Math.floor(Math.random() * 100 + 1);

Maior(n1, n2);