/*
92) Crie uma lógica que leia um número inteiro e passe para um procedimento
ParOuImpar() que vai verificar e mostrar na tela se o valor passado como
parâmetro é PAR ou ÍMPAR.
*/
function ParOuImpar(a) {
  if (a % 2 === 0) {
    console.log(a);
    console.log('PAR');
  } else {
    console.log(a);
    console.log('ÍMPAR');
  }
}
let n1 = Math.floor(Math.random() * 100 + 1);

ParOuImpar(n1);