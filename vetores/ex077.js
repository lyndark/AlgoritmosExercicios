/*
77) Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No
final, mostre uma listagem com todos os nomes informados, na ordem inversa
daquela em que eles foram informados.
*/
let nomes = [],
  pessoas = 0, i;

for (i = 0; i < 7; i++) {
  pessoas = Math.floor(Math.random() * 100 + 1);
  nomes[i] = pessoas;
  console.log(nomes[i]);
}
console.log('    Ordem inversa');
console.log('________________________');

for (i = 6; i >= 0; i--) {
  console.log(nomes[i]);
}