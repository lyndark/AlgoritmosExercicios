/*
68) Crie um programa que leia sexo e peso de 8 pessoas, usando a estrutura
“para”. No final, mostre na tela:
a) Quantas mulheres foram cadastradas
b) Quantos homens pesam mais de 100Kg
c) A média de peso entre as mulheres
d) O maior peso entre os homens
*/
let i,
  peso = 0,
  sexo = 0,
  mulheresCadastradas = 0,
  homensPesamMaisDe100 = 0,
  somaPeso = 0,
  mediaPesoMulheres = 0,
  maiorPesoHomens = 0;

for (i = 0; i <= 8; i++) {
  peso = Math.floor(Math.random() * 150.0);
  sexo = Math.floor(Math.random() * 2 + 1);
  console.log(`Sexo: ${sexo}, Peso: ${peso}`);

  if (sexo === 1) {
    if (peso > 100) {
      homensPesamMaisDe100++;
    }
    if (peso > maiorPesoHomens) {
      maiorPesoHomens = peso;
    }
  }

  if (sexo === 2) {
    mulheresCadastradas++;
    somaPeso += peso;
  }

}
mediaPesoMulheres = somaPeso / mulheresCadastradas;

console.log(`Mulheres cadastradas: ${mulheresCadastradas}`);
console.log(`Homens que pesam mais de 100Kg: ${homensPesamMaisDe100}`);
console.log(`A média de peso entre as mulheres: ${mediaPesoMulheres}`);
console.log(`O maior peso entre os homens: ${maiorPesoHomens}`);