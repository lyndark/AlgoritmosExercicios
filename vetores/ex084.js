/*
84) Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses
valores em dois vetores, em posições relacionadas. No final, mostre uma listagem
contendo apenas os dados das pessoas menores de idade.
*/
let vetNomes = [],
  vetIdades = [], i;

for (i = 0; i < 9; i++) {
  let nomes = Math.floor(Math.random() * 99 + 1);
  vetNomes[i] = nomes;

  let idades = Math.floor(Math.random() * 100 + 1);
  vetIdades[i] = idades;

  console.log(`Nome: ${vetNomes[i]} Idade: ${vetIdades[i]}`);
}
console.log('____________________________');
console.log(`Dados menores de idade:`);


for (i = 0; i < 9; i++) {
  if ((vetIdades[i] > 0) && (vetIdades[i] < 18))
    console.log(`Nome: ${vetNomes[i]} Idade: ${vetIdades[i]}.`);
}
console.log('____________________________');