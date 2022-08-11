/** Faça um programa que inverta um texto  */
let texto = "casebre";
let lista = [];
for (i=texto.length-1; i >= 0; i--){
    lista.push(texto[i]);
}
console.log(lista.join(""));