let lista = [1, 4, 7 , 8 , 33, 8, 20]
let maior = 0

for (var i in lista){
    if (lista[i] > maior){
        maior = lista[i]
    }
}
console.log(maior)