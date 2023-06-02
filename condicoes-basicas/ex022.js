/*
22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
situação em relação ao alistamento militar.
- Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
alistamento.
- Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
alistamento.
*/
let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let anoNascimento = 2020;
let idade = anoAtual - anoNascimento;
let anosPassaram;

if(idade < 18){
  anosPassaram = 18 - idade;
  console.log(idade + ' anos');
  console.log('Faltam ' + anosPassaram + ' anos para o alistamento.');
} else{
  console.log('Já se passaram ' + anosPassaram + ' anos para o alistamento.');
  console.log(idade);
}