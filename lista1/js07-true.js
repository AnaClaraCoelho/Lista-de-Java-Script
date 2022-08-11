/**  Faça um programa que retorne true ou false conforme a entra Y,y,yes,S,sim */
let entrada = "n";
let lista = [ "Y", "y", "S", "s", 1];
if (lista.includes(entrada)){
    console.log("true");
}
else {
    console.log("false");
}