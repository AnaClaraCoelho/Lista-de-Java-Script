/**  Faça um Programa que verifique se uma letra digitada é vogal ou consoante.  */
let letra1= "a";
let vogais = ["a","e","i","o","u"];
if (vogais.includes(letra1.toLowerCase())) {
    console.log("É uma vogal!");
}
else {
    console.log("É uma consoante!")
}