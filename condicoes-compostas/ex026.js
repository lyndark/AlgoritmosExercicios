/*
26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
na tela uma das mensagens abaixo:
- O primeiro valor é o maior
- O segundo valor é o maior
- Não existe valor maior, os dois são iguais
*/
let n1 = 3;
let n2 = 3;

if(n1 > n2){
  console.log('O primeiro valor é o maior')
} 
if(n2 > n1){
  console.log('O segundo valor é o maior')
} 
if(n1 === n2){
  console.log('Não existe valor maior, os dois são iguais')
}