/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 * 
 */

// Considerando o primeiro dia de utilização do programa como o primeiro dia de trabalho de um ciclo....

let cont = 0;
let i = 0;
let mes = {1:"janeiro", 2: "fevereiro", 3:"março", 4:"abril", 5:"maio", 6:"junho",
7:"julho", 8:"agosto", 9:"setembro", 10:"outubro", 11:"novembro", 12:"dezembro" }
let seleciona_mes = 1
let cont_meses = 1
let contador = 0

while(cont_meses != 4){
    for (i=1; i < 31; i++){
        cont = i;
        if (i == 30){
            seleciona_mes += 1;
        }
        if (contador == 6){
            contador = -1
            for (i = cont; i< cont + 2; i++){
                console.log(`No dia ${i} de ${mes[seleciona_mes]} Erick estará de folga`)
            }
            i --
        }
        else {
            console.log(`No dia ${i} de ${mes[seleciona_mes]} Erick estará trabalhando`)
        }
        contador += 1
    }
    cont_meses += 1
}