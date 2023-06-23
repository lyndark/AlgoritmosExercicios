/* 
96) Crie um programa que tenha uma função Media(), que vai receber as 2 notas de
um aluno e retornar a sua média para o programa principal.
*/
function Media(a, b) {
  return (a + b) / 2;
}

let n1 = Math.floor(Math.random() * 10 + 1),
  n2 = Math.floor(Math.random() * 10 + 1);

console.log(`${n1} ${n2}`);
console.log(Media(n1, n2));
