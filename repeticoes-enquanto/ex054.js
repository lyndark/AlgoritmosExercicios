/*
54) Desenvolva um aplicativo que leia o peso e a altura de 7 pessoas, mostrando
no final:
a) Qual foi a média de altura do grupo
b) Quantas pessoas pesam mais de 90Kg
c) Quantas pessoas que pesam menos de 50Kg tem menos de 1.60m
d) Quantas pessoas que medem mais de 1.90m pesam mais de 100Kg.
*/
let cont = 0,
  peso = 0,
  altura = 0,
  somaAlturas = 0,
  pessoasMaisDe90Kg = 0,
  pessoasMenosDe50KgEMenosDe160m = 0,
  pessoasMaisDe190mEPesamMaisDe100Kg = 0;

while (cont < 7) {
  peso = Math.floor(Math.random() * 200);

  altura = Math.random() * 2.0 + 1;

  somaAlturas += altura;

  if (peso > 90) {
    pessoasMaisDe90Kg++;
  }

  if (peso < 50 && altura < 1.60) {
    pessoasMenosDe50KgEMenosDe160m++;
  }

  if (altura > 1.90 && peso > 100) {
    pessoasMaisDe190mEPesamMaisDe100Kg++;
  }

  cont = cont + 1;
}
let mediaAlturaGrupo = somaAlturas / 7;

console.log(`Média de altura do grupo: ${mediaAlturaGrupo}`);
console.log(`Quantidade de pessoas com mais de 90Kg: ${pessoasMaisDe90Kg}`);
console.log(`Quantidade de pessoas com menos de 50Kg e menos de 1.60m: ${pessoasMenosDe50KgEMenosDe160m}`);
console.log(`Quantidade de pessoas com mais de 1.90m e que pesam mais de 100Kg: ${pessoasMaisDe190mEPesamMaisDe100Kg}`);