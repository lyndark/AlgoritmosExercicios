/*
44) Crie um algoritmo que leia o valor inicial da contagem, o valor final e o
incremento, mostrando em seguida todos os valores no intervalo:
Ex: Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!
*/
let valorInicial = Math.floor(Math.random() * 100),
  valorFinal = Math.floor(Math.random() * 150),
  incremento = Math.floor(Math.random() * 10);

while (valorInicial <= valorFinal) {
  console.log(valorInicial);
  valorInicial = valorInicial + incremento;
}
console.log('Acabou!');