/*
28) Faça um programa que leia a largura e o comprimento de um terreno
retangular, calculando e mostrando a sua área em m². O programa também
devemostrar a classificação desse terreno, de acordo com a lista abaixo:
- Abaixo de 100m² = TERRENO POPULAR
- Entre 100m² e 500m² = TERRENO MASTER
- Acima de 500m² = TERRENO VIP
*/
let altura = 30;
let largura = 5;
let total = largura * altura;

if(total >= 500){
  console.log('TERRENO VIP');
} 
if((total >= 100) && (total < 500)){
  console.log('TERRENO MASTER')
} else {
  console.log('TERRENO POPULAR');
}