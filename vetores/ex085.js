/*
85) Faça um algoritmo que leia o nome, o sexo e o salário de 5 funcionários e
guarde esses dados em três vetores. No final, mostre uma listagem contendo
apenas os dados das funcionárias mulheres que ganham mais de R$5 mil.
*/
let vetNomes = [],
  vetSexo = [],
  vetSalarios = [], i;

for (i = 0; i < 5; i++) {
  let nomes = Math.floor(Math.random() * 100 + 1);
  vetNomes[i] = nomes;

  let sexo = Math.floor(Math.random() * 2 + 1);
  vetSexo[i] = sexo;

  let salarios = Math.random() * 10.00;
  vetSalarios[i] = salarios;

  console.log(`Nome: ${vetNomes[i]} Sexo: ${vetSexo[i]} Salário: ${vetSalarios[i]} `);
}

console.log('Mulheres com salário > 5.000');
for (i = 0; i < 5; i++) {
  if ((vetSexo[i] === 2) && (vetSalarios[i] > 5.000))
    console.log(`Nome: ${vetNomes[i]} Sexo: ${vetSexo[i]} Salário: ${vetSalarios[i]}`);
}