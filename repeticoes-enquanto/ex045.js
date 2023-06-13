/*
45) O programa acima vai ter um problema quando digitarmos o primeiro valor
maior que o último. Resolva esse problema com um código que funcione em qualquer
situação.
*/
let valorInicial = Math.floor(Math.random() * 100),
  valorFinal = Math.floor(Math.random() * 100),
  incremento = Math.floor(Math.random() * 10);

if (valorInicial <= valorFinal && incremento > 0) {
  while (valorInicial <= valorFinal) {
    console.log(valorInicial);
    valorInicial = valorInicial + incremento;
  }
} else if (valorInicial >= valorFinal && incremento < 0) {
  while (valorInicial >= valorFinal) {
    console.log(valorInicial);
    valorInicial = valorInicial + incremento;
  }
} else {
  console.log("Valores inválidos. Verifique se o primeiro valor é menor ou igual ao último valor e se o incremento é positivo ou negativo.");
}