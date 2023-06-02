/*
18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
dela e depois mostre se ela pode ou não votar.
*/
let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();
let anoNascimento = 1998;
let idade = anoAtual - anoNascimento;

if(idade >= 16){
  console.log(idade + ' anos.');
  console.log('Já pode votar!');
} else{
  console.log('Ainda não pode votar.');
}