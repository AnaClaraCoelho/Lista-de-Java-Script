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
