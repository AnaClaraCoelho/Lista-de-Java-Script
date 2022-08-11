/** Faça um programa q criptografia/decriptografia de uma mensagem (string) */
let msg = "abacateZ";
let lista_msg = msg.split("")
let lista_msg_cript = [];
let mensagem_cript = [];

// // Criptografar

for (var i in lista_msg){
    if (lista_msg[i] == "z"){
        lista_msg[i] = "@";
    }
    else if (lista_msg[i] == "Z"){
        lista_msg[i] = "&";
    }
    lista_msg_cript[i] = 1 + lista_msg[i].charCodeAt();
}
 
for (var indice in lista_msg_cript){
    mensagem_cript[indice] = String.fromCharCode(lista_msg_cript[indice]);
}
console.log(mensagem_cript.join(""));

