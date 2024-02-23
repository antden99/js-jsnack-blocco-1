console.log("funziona");

const listaInvitati = ["antonio","francesco","fabrizio"]

const nameUser = prompt("inserisci il tuo nome");


let cont=0;
for (let index = 0; index < listaInvitati.length; index++) {
    const element = listaInvitati[index];
    
    if(nameUser === element){
        cont++
    }
}

if(cont > 0){
    console.log("puoi entrare alla festa");
} else {
    console.log("non puoi entrare alla festa");
}