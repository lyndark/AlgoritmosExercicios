/*
27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
mostrando uma mensagem no final, de acordo com a média atingida:
- Média até 4.9: REPROVADO
- Média entre 5.0 e 6.9: RECUPERAÇÃO
- Média 7.0 ou superior: APROVADO
*/
let n1 = 5;
let n2 = 1;
let media = (n1 + n2) / 2;

if(media >= 7){
  console.log('Aprovado');
} 
if((media >= 5) && (media <= 7)){
  console.log('Recuperação');
} else{
  console.log('Reprovado');
}