
/**
 * Faça um Programa que peça a temperatura em Fahrenheit, 
 * transforme e mostre graus Celsius. 
 * 
 * ENTRADA              SAÍDA
 * 102                  39
 * 89                   32
 * 70                   21
 */

let t_faren = 70;
let t_celsius = (t_faren - 32) / 1.8 ;
console.log(Math.round(t_celsius))
