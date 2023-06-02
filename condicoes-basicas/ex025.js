/*
25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
Analise seus comprimentos e diga se é possível formar um triângulo com essas
retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
de cada lado deve ser menor que a soma dos outros dois.
*/

let a = 1;
let b = 9;
let c = 5;

if((a < b + c) && (b < a + c)){
  console.log('Forma um triângulo');
} else{
  console.log('não forma um triângulo')
}