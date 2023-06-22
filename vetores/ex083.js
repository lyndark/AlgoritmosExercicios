/*
83) [DESAFIO] Crie uma lógica que preencha um vetor de 20 posições com números
aleatórios (entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os
números gerados e depois coloque o vetor em ordem crescente, mostrando no final
os valores ordenados.
*/
let vet = [],
  num = 0,
  i;

for (i = 0; i < 20; i++) {
  num = Math.floor(Math.random() * 99 + 1);
  vet[i] = num;

  console.log(vet[i]);
}

console.log('\n        Números ordenados')
console.log('________________________________');

for (i = 0; i < vet.length - 1; i++) {
  var min = i;
  for (var j = i + 1; j < vet.length; j++) {
    if (vet[j] < vet[min]) {
      min = j;
    }
  }
  var temp = vet[i];
  vet[i] = vet[min];
  vet[min] = temp;

  console.log(vet[i])
}