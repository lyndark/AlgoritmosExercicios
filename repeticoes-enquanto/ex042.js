/*
42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
qualquer e mostre uma contagem até esse valor:
Ex: Digite um valor: 35
Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!
*/
let cont = 0,
  numPositivo = Math.floor(Math.random() * 100);

while (cont <= numPositivo) {
  console.log(cont);
  cont = cont + 1;
}
console.log('Acabou!');