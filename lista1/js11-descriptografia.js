// Descriptografar
let mensagem_cript = "bcbdbuf%";
let lista_msg_cript = mensagem_cript.split("")
let lista_msg = [];
let msg = [];
const KEY = 1

for (var i in lista_msg_cript){
    lista_msg[i] = lista_msg_cript[i].charCodeAt() - KEY;
}
 
for (var indice in lista_msg_cript){
    msg[indice] = String.fromCharCode(lista_msg[indice]);
    if (msg[indice] == "@"){
        msg[indice] = "z";
    }
    else if (msg[indice] == "$"){
        msg[indice] = "Z";
    }
}
console.log(msg.join(""))
