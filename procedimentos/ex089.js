/*
89) Crie um programa que melhore o procedimento Gerador() da questão anterior
para que o programador possa escolher uma entre três bordas:
+-------=======------+ Borda 1
~~~~~~~~:::::::~~~~~~~ Borda 2
<<<<<<<<------->>>>>>> Borda 3
Ex: Uma chamada válida seria Gerador("Portugol Studio", 3, 2)
~~~~~~~~:::::::~~~~~~~
Portugol Studio
Portugol Studio
Portugol Studio
~~~~~~~~:::::::~~~~~~~
*/
function Gerador(mensagem, quantidade, bordas) {
  var linha = '';
  switch (bordas) {
    case 1:
      linha = '+-------=======------+';
      break;
    case 2:
      linha = '~~~~~~~~:::::::~~~~~~~';
      break;
    case 3:
      linha = '<<<<<<<<------->>>>>>>';
      break;
  }
  console.log(linha);

  for (let i = 0; i < quantidade; i++) {
    console.log('| ' + mensagem + ' |');
  }
  console.log(linha)
}
Gerador('Portugol Studio', 3, 1)