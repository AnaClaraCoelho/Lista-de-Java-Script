/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]       34
 * [1,1,40]             40
 */
let lista = [10, 45, 67, 88, 3, 4, 32, 6]
let soma = 0;

for (var i in lista){
    soma += lista[i];
}
console.log(soma);