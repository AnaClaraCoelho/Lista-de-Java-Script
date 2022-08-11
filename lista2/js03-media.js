let lista = [10, 45, 67, 88, 3, 4, 32, 6]
let soma = 0;
let media = 0;

for (var i in lista){
    soma += lista[i];
}
media = soma / lista.length
console.log(media);