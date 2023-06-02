/*
24) Faça um algoritmo que pergunte a distância que um passageiro deseja
percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
viagens até 200Km e R$0.45 para viagens mais longas.
*/
let km = 200;

if(km <= 200){
let precoPassagem = km * 0.50;
console.log(precoPassagem);
} else{
let precoPassagem = km * 0.45;
console.log(precoPassagem);
}