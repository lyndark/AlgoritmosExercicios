/*
51) Faça um aplicativo que leia o preço de 8 produtos. No final, mostre na tela
qual foi o maior e qual foi o menor preço digitados.
*/
let precos = [],
  i = 1;

while (i <= 8) {
  var preco = Math.random() * 110.0;
  precos.push(preco);
  i = i + 1;
}

let menorPreco = precos[0],
  maiorPreco = precos[0],
  ii = 1;

while (ii < precos.length) {
  if (precos[ii] < menorPreco) {
    menorPreco = precos[ii];
  }
  if (precos[ii] > maiorPreco) {
    maiorPreco = precos[ii];
  }
  ii = ii + 1;
}
console.log('Maior: ' + (maiorPreco).toFixed(2));
console.log('Menor: ' + (menorPreco).toFixed(2));