/**
 * Faça um programa que mostre o segundo maior número da lista 
 * 
 * ENTRADA              SAÍDA
 * [1,3,5,7,8,10,3]      8
 * [1,1,40]              1
 * [40,42,1,0,-10]      40
 * 
 * IMPORTANTE:
 * Não usar sort
 * Não usar funções built-ins da linguagem
 */
 var lista = [42, 44, 57, 44, 77, 39, 51, 46, 32, 93,
    40, 32, 98, 97, 50, 27, 70, 12, 46, 90, 52, 40, 26, 91, 5, 55, 4, 61, 26, 88,
    51, 53, 47, 94, 49, 25, 60, 77, 98, 20, 17, 81, 79, 32, 48, 98, 31, 100, 43, 78];
let maior = 0
let seg_maior = 0

for (var i in lista){
    if (lista[i] > maior){
        seg_maior = maior
        maior = lista[i]
    }
    // if (lista[i] > seg_maior && lista[i] < maior){
    //     seg_maior = lista[i]
    // }
}
console.log(`O maior é ${maior}`)
// lista.splice(indice, 1)
// console.log(lista)
// seg_maior = 0
// indice = 0;
// for (var i in lista){
//     if (lista[i] > seg_maior){
//         seg_maior = lista[i]
//         indice = i
//     }
// }
console.log(`O segundo maior é ${seg_maior}`)
