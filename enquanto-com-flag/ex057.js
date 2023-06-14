/*
57) Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários.
No final, mostre o total de salários pagos aos homens e o total pago às
mulheres. O programa vai perguntar ao usuário se ele quer continuar ou não
sempre que ler os dados de um funcionário.
*/
let flag = true,
  salario = 0,
  sexo = 0,
  salarioPagosHomens = 0,
  salarioPagosMulheres = 0,
  finalizar = 0;

while (flag) {
  salario = Math.floor(Math.random() * 1000.0 + 1);
  sexo = Math.floor(Math.random() * 2 + 1);
  finalizar = Math.floor(Math.random() * 3 + 1);
  console.log(`Salário R$${salario} Sexo: ${sexo}`);

  if (sexo === 1) {
    salarioPagosHomens += salario;
  }
  if (sexo === 2) {
    salarioPagosMulheres += salario;
  }

  if (finalizar === 3) {
    flag = false;
  }
}
console.log(`Salários pagos aos homens: R$${salarioPagosHomens}`);
console.log(`Salários pagos as mulheres: R$${salarioPagosMulheres}`);
