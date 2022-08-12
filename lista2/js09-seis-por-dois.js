/**
 * Nosso amigo Erick trabalha em uma jornada de seis por dois, ou seja,
 * ele trabalha 6 dias e folga 2 dias.
 * Problema: Ele nunca sabe se um dia específico no futuro ele vai estar
 * trabalhando ou de folga. Difícil fazer planos.
 * Exemplo, como saber no dia 12 de Outubro ele vai estar trabalhando ou de folga?
 * Como fazer um programa que liste os próximos 3 meses com dias de trabalho/folga?
 * 
 */

let date = new Date()
let folgaDaquiQuantosDias = 2
let cont = 0
let mes = {0:"janeiro", 1: "fevereiro", 2:"março", 3:"abril", 4:"maio", 5:"junho",
6:"julho", 7:"agosto", 8:"setembro", 9:"outubro", 10:"novembro", 11:"dezembro" }
let algumDia = new Date(date)


for (i=0; i< 89; i++){
    if (i ==0){
        for (j=0; j<folgaDaquiQuantosDias; j++){
            algumDia.setDate(algumDia.getDate()+1)
            console.log(`No dia ${algumDia.getDate()} de ${mes[algumDia.getMonth()]} você estará trabalhando`)
        }
    }
    else if((i - folgaDaquiQuantosDias) % 8 == 0 || (i - folgaDaquiQuantosDias-1) % 8 == 0){
        algumDia.setDate(algumDia.getDate()+1)
        console.log(`No dia ${algumDia.getDate()} de ${mes[algumDia.getMonth()]} você estará de folga`)
    }
    else{
        algumDia.setDate(algumDia.getDate()+1)
        console.log(`No dia ${algumDia.getDate()} de ${mes[algumDia.getMonth()]} você estará trabalhando`)
    }
    }
