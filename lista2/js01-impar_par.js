let lista = [1, 10, 56, 30, 72, 33, 6, 13];

for (var i in lista){
    if (lista[i] % 2 == 0){
        console.log(`O número ${lista[i]} é par`)
    }
    else if (lista[i] % 2 != 0){
        console.log(`O número ${lista[i]} é ímpar`)
    }
}

