/*
35) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O
aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para
carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e
quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a
tabela a seguir:
- Carros populares (aluguel de R$90 por dia)
- Até 100Km percorridos: R$0,20 por Km
- Acima de 100Km percorridos: R$0,10 por Km
- Carros de luxo (aluguel de R$150 por dia)
- Até 200Km percorridos: R$0,30 por Km
- Acima de 200Km percorridos: R$0,25 por Km
*/
console.log('Carro Popular[1] e Carro de Luxo[2]'); // Carro P = 90, Carro de Luxo = 150
let carro = 1;
let diasAluguel = 1;
let km = 150;

if(carro === 1){
  if(km <= 100){
  let total = (diasAluguel * 90) + (km * 0.20);
  console.log('Carro Popular');
  console.log('Total a pagar R$' +total)
  } 
  if(km > 100){
    total = (diasAluguel * 90) + (km * 0.10);
    console.log('Carro Popular');
    console.log('Total a pagar R$' + total);
  }
} 
if(carro === 2){
  if(km <= 200){
  let total = (diasAluguel * 150) + (km * 0.30);
    console.log('Carro de Luxo $$');
    console.log('Total a pagar R$' + total)
  } if(km > 200){
    total = (diasAluguel * 150) + (km * 0.25);
    console.log('Carro de Luxo $$');
    console.log('Total a pagar R$' + total);
  }
}

