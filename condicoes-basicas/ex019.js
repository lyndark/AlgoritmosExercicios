/* 
19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
média e mostre na tela. No final, analise a média e mostre se o aluno teve ou
não um bom aproveitamento (se ficou acima da média 7.0).
*/
let nome = 'Maria';
let n1 = 7;
let n2 = 5;
let media = (n1 + n2) / 2;

if(media >= 7){
  console.log('Media: ' + media);
  console.log(nome + ', teve um bom aproveitamento.');
} else{
  console.log(nome + ', não teve um bom aproveitamento.');
}