/**
 * Faça um programa que gere apenas os números ímpares entre 1 e 150. 
 * 
 * ENTRADA              SAÍDA
 * [1,150]              [1,3,5,7,9,11...147,149]
 * 
 */
let num = 1;
let impares = [];
while (num != 150){
    if (num % 2 != 0){
        impares.push(num);
    }
    num ++;
}
console.log(impares)