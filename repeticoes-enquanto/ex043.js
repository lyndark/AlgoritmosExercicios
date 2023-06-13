/*
43) Desenvolva um algoritmo que mostre uma contagem regressiva de 30 até 1,
marcando os números que forem divisíveis por 4, exatamente como mostrado abaixo:
30 29 [28] 27 26 25 [24] 23 22 21 [20] 19 18 17 [16]...
*/
let cont = 30;

while (cont >= 0) {
  if (cont % 4 === 0) {
    console.log(`[${cont}]`)
  } else {
    console.log(cont);
  }
  cont = cont - 1;
}