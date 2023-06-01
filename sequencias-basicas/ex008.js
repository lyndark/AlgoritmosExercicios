/*
8) Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm
*/
let metro = 185.72;
let km = metro / 1000;
let hm = metro / 100;
let dam = metro / 10;
let dm = metro / 0.1;
let cm = metro / 0.01;
let mm = metro / 0.001;