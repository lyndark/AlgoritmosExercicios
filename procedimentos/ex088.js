/*
88) Crie um programa que melhore o procedimento Gerador() da questão anterior
para que mostre uma mensagem vário
Ex: Ao chamar Gerador("Aprendendo Portugol", 4) aparece:
+-------=======------+
Aprendendo Portugol
Aprendendo Portugol
Aprendendo Portugol
Aprendendo Portugol
+-------=======------+
*/
function Gerador(mensagem, quantidade) {
  console.log('+-------=======------+');
  for (let i = 0; i < quantidade; i++) {
    console.log('| ' + mensagem + ' |');
  }
  console.log('+-------=======------+');
}
Gerador('Aprendendo Portugol', 4);