/**
 * Percorra a entrada com uma lista de nros e retorne qtos numeros impares/pares
 * 
 * ENTRADA:
 * [1,2,3,4,5,6,7]
 * 
 * SAIDA
 * 4 3
 */
let lista = [1, 10, 56, 30, 72, 33, 6, 13];
let pares = 0;
let impares = 0;

for (var i in lista){
    if (lista[i] % 2 == 0){
        pares += 1
    }
    else if (lista[i] % 2 != 0){
        impares += 1
    }
}
console.log(`Qtd de números pares: ${pares}`);
console.log(`Qtd de números ímpares: ${impares}`);