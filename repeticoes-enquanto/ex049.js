/*
49) Crie um programa que leia 6 números inteiros e no final mostre quantos deles
são pares e quantos são ímpares.
*/
let par = 0,
  impar = 0,
  cont = 0,
  num = 0;

while (cont <= 6) {
  num = Math.floor(Math.random() * 10);

  if (num % 2 === 0) {
    par++;
  } else {
    impar++;
  }
  cont = cont + 1;
}
console.log(`Pares: ${par}`);
console.log(`Impares: ${impar}`);
