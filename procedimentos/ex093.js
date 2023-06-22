/*
93) Faça um programa que tenha um procedimento chamado Contador() que recebe
três valores como parâmetro: o início, o fim e o incremento de uma contagem. O
programa principal deve solicitar a digitação desses valores e passá-los ao
procedimento, que vai mostrar a contagem na tela.
Ex: Para os valores de início (4), fim (20) e incremento(3) teremos
Contador(4, 20, 3) vai mostrar na tela 4 >> 7 >> 10 >> 13 >> 16 >> 19 >> FIM
*/
function Contador(inicio, fim, incremento) {
  for (let i = inicio; i < fim; i += incremento) {
    console.log(i);
  }
  console.log('FIM');
}
let ini = Math.floor(Math.random() * 10 + 1),
  fim = Math.floor(Math.random() * 100 + 1),
  inc = Math.floor(Math.random() * 10 + 1);

Contador(ini, fim, inc);
