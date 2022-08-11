/** Faça um Programa que imprima a soma de dois numeros deve exibir uma mensagem caso nao seja números válidos  */
let n1 = 8;
let n2 = 9;
let soma = 0;
if (isNaN(n1) || isNaN(n2)){
    soma = "Não é um número válido";
}
else{
    soma = parseInt(n1) + parseInt(n2); 
}
console.log(soma);
