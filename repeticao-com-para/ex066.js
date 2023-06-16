/*
66) Escreva um programa que leia um número qualquer e mostre a tabuada desse
número, usando a estrutura “para”.
Ex: Digite um valor: 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15 ...
*/
let i,
  num = n = Math.floor(Math.random() * 100 + 1),
  result = 0;

for (i = 0; i <= 10; i++) {
  result = num * i;
  console.log(`${num} X ${i} = ${result}`);
}