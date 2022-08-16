/** Faça um Programa que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.),
 *  se digitar outro valor deve aparecer valor inválido.  */
let dia = 2;
let dias = ["Domingo    ", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Dia inválido"]
switch (dia){
    case 1:
        dia = dias[0];
        break;
    case 2:
        dia = dias[1];
        break;
    case 3:
        dia = dias[2];
        break;
    case 4:
        dia = dias[3];
        break;
    case 5:
        dia = dias[4];
        break;
    case 6:
        dia = dias[5];
        break;
    case 7:
        dia = dias[6];
        break;
    default:
        dia = dias[7];
}
console.log(dia);