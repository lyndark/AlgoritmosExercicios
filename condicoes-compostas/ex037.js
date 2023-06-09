/*
37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um
aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
No final, mostre o seu novo salário, baseado na tabela a seguir:
- Mulheres
- menos de 15 anos de empresa: +5%
- de 15 até 20 anos de empresa: +12%
- mais de 20 anos de empresa: +23%
- Homens
- menos de 20 anos de empresa: +3%
- de 20 até 30 anos de empresa: +13%
- mais de 30 anos de empresa: +25%
*/
console.log('Feminino[1] e Masculino[2]')
let sexo = 2;
let salario = 1000;
let anosEmpresa = 5;

if(sexo == 1){
  if(anosEmpresa < 15){
    total = salario + ((salario * 5) / 100);
    console.log('Salário com reajuste de 5% R$' + total);
  }
  if((anosEmpresa >= 15) && (anosEmpresa < 20)){
    total = salario + ((salario * 12) / 100);
    console.log('Salário com reajuste de 12% R$' + total);
  }
  if(anosEmpresa > 20){
    total = salario + ((salario * 23) / 100);
    console.log('Salário com reajuste de 23% R$' + total);
  } 
}
if(sexo == 2){
  if(anosEmpresa < 20){
    total = salario + ((salario * 3) / 100);
    console.log('Salário com reajuste de 3% R$' + total);
  }
  if((anosEmpresa >= 20) && (anosEmpresa < 30)){
    total = salario + ((salario * 13) / 100);
    console.log('Salário com reajuste de 13% R$' + total);
  }
  if(anosEmpresa > 30){
    total = salario + ((salario * 25) / 100);
    console.log('Salário com reajuste de 25% R$' + total);
  } 
}