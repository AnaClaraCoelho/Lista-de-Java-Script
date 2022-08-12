/**
 * Faça um programa que faça a soma de todos os números de uma lista de números
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10]       34
 * [1,1,40]             40
 */
let lista = [1, 10, 56, 30, 72, 33, 6, 13];
let impar_par = []

for (var i in lista){
    if (lista[i] % 2 == 0){
        impar_par[i] = 'par'
    }
    else if (lista[i] % 2 != 0){
        impar_par[i] = 'ímpar'
    }
}
console.log(impar_par)

