/*
87) Crie um programa que melhore o procedimento Gerador() da questão anterior
para que mostre uma mensagem personalizada, passada como parâmetro.
Ex: Ao chamar Gerador("Aprendendo Portugol") aparece:
+-------=======------+
Aprendendo Portugol
+-------=======------+
*/
function Gerador(mensagem) {
  console.log('+-------=======------+');
  console.log('| ' + mensagem + ' |');
  console.log('+-------=======------+');
}

Gerador('Aprendendo Portugol');