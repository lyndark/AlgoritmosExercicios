/*
33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra
de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
ela não pode exceder 30% do salário ou então o empréstimo será negado.
*/
let valorCasa = 200.000;
let salario = 1.000;
let anos = 10;

let prestacao = valorCasa / (anos * 12);
let total = (anos * 3) / 100;

if(prestacao > total){
  console.log('Empréstimo será negado');
} else{
  console.log('Empréstimo aprovado!');
}