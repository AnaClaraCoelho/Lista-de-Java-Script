/**  Faça um programa que retorne true ou false conforme a entra Y,y,yes,S,sim */
let entrada = "yes";
let lista = [ "Y", "S", 1, "👍","YES", "SIM"];
if (lista.includes(entrada.toUpperCase())){
    console.log("true");
}
else {
    console.log("false");
}