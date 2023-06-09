/*
30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
de triângulo será formado:
- EQUILÁTERO: todos os lados iguais
- ISÓSCELES: dois lados iguais
- ESCALENO: todos os lados diferentes
*/
let a = 3;
let b = 5;
let c = 7;

if((a === b ) && (a === c)){
  console.log('Forma um triângulo EQUILÁTERO');
}
if((a === b) && (c != a)){
  console.log('Forma um triângulo ISÓSCELES')
} else{
  console.log('Forma um triângulo ESCALENO')
}