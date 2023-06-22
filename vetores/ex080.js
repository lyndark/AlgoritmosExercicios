/*
80) Faça um algoritmo que preencha um vetor de 30 posições com números entre 1 e
15 sorteados pelo computador. Depois disso, peça para o usuário digitar um
número (chave) e seu programa deve mostrar em que posições essa chave foi
encontrada. Mostre também quantas vezes a chave foi sorteada.
*/
let vet = [],
  num = 0,
  palpite = Math.floor(Math.random() * 15 + 1),
  sort = 0,
  i;

for (i = 0; i < 30; i++) {
  num = Math.floor(Math.random() * 15 + 1);
  vet[i] = num;
  console.log(vet[i]);
}

for (i = 0; i < 30; i++) {
  if (vet[i] === palpite) {
    sort++;
    console.log(`${palpite}, foi encontrado na posição [${i}].`)
  }
}
console.log(`Sorteado ${sort} vezes.`)