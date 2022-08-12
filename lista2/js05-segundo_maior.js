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
let lista = [1, 4, 7 , 8 , 33, 8, 20]
let maior = 0
let indice = 0;

for (var i in lista){
    if (lista[i] > maior){
        maior = lista[i]
        indice = i
    }
}
lista.splice(indice, 1)
console.log(lista)
seg_maior = 0
indice = 0;
for (var i in lista){
    if (lista[i] > seg_maior){
        seg_maior = lista[i]
        indice = i
    }
}
console.log(`O segundo maior é ${seg_maior}`)
