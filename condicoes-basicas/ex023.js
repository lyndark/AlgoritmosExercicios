/*
23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
para todos, mas especialmente para mulheres. Faça um programa que leia nome,
sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
que:
- Homens ganham 5% de desconto
- Mulheres ganham 13% de desconto
*/
let nome = 'Maria';
let sexo = 'M';
let precoCompras = 1000;

let descontoM = (precoCompras * 13) / 100;
let descontoH = (precoCompras * 0.5) / 100;

if(sexo === 'F'){
let total = precoCompras - descontoM;
console.log(total);
} else{
let total = precoCompras - descontoH;
console.log(total);
}

