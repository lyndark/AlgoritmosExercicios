/*
16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias.
*/
let cigarrosDia = 4;
let anosFumante = 20;

let minVida = cigarrosDia * 10;
let hourasVida = minVida / 60;
let diasVida = hourasVida / 24;

let totalPerdidos = anosFumante * diasVida * 365;

console.log(totalPerdidos)