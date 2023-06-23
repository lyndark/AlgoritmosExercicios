/*
100) Melhore o exercício 96, criando além da função Media() uma outra função
chamada Situacao(), que vai retornar para o programa principal se o aluno está
APROVADO, em RECUPERAÇÃO ou REPROVADO. Essa nova função, vai receber como
parâmetro o resultado retornado pela função Media().
*/
function Media(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

function Situacao(media) {
  if (media >= 7) {
    return 'Aprovado';
  } else if (media >= 5) {
    return 'Recuperação';
  } else {
    return 'Reprovado';
  }
}

let notasAluno = [8, 7, 6, 5, 9, 5.5],
  mediaAluno = Media(notasAluno),
  situacaoAluno = Situacao(mediaAluno);

console.log('Media: ', mediaAluno);
console.log('Situação: ', situacaoAluno);