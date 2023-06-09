/*
29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
acordo com a tabela a seguir:
- Até 3 anos de empresa: aumento de 3%
- entre 3 e 10 anos: aumento de 12.5%
- 10 anos ou mais: aumento de 20%
*/
let nome = 'Maria';
let salario = 1000;
let anosTrabalho = 1;
let aumento;

if(anosTrabalho <= 3){
  total = salario + ((salario * 3) / 100);
  console.log(total + ' aumento de 3%');
}
if((anosTrabalho > 3) && (anosTrabalho <= 10)){
  total = salario + ((salario * 12.5) / 100);
  console.log(total + ' aumento de 12.5%');
} 
if(anosTrabalho > 10){
  total =  salario + ((salario * 10) / 100);
  console.log(total + ' aumento de 20%');
} 