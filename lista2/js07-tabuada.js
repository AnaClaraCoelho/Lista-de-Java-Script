let numero = 7
let i = 1;

if (numero < 1 || numero > 10){
    console.log("Escolha um número entre 1 e 10")
}
else {
    console.log(`Tabuada de ${numero}`)
    while (i != 11){
        console.log(`${numero} X ${i} = ${numero * i}`)
        i++;
    }
}