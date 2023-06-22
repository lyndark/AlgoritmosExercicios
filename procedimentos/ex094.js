/*
94) [DESAFIO] Desenvolva um aplicativo que tenha um procedimento chamado
Fibonacci() que recebe um único valor inteiro como parâmetro, indicando quantos
termos da sequência serão mostrados na tela. O seu procedimento deve receber
esse valor e mostrar a quantidade de elementos solicitados.
Obs: Use os exercícios 70 e 75 para te ajudar na solução
Ex:
Fibonacci(5) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> FIM
Fibonacci(9) vai gerar 1 >> 1 >> 2 >> 3 >> 5 >> 8 >> 13 >> 21 >> 34 >> FIM
*/
function Fibonacci(a) {
  let n1 = 0,
    n2 = 1,
    proximoN;
  for (let i = 0; i < a; i++) {
    if (i < 2) {
      proximoN = i;
    } else {
      proximoN = n1 + n2;
      n1 = n2;
      n2 = proximoN;
    }
    console.log(proximoN);
  }
  console.log('FIM');
}
let n1 = Math.floor(Math.random() * 10 + 1);

Fibonacci(n1);
