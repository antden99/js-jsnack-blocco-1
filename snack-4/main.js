console.log("Tutto funziona");

let number = [];
let somma = 0;

for (let i = 0; i < 10; i++) {  
    let numeroInserito = Number(prompt("Inserisci un numero: "));   
    number.push(numeroInserito);
}


/*for (let i = 0; i < number.length; i++) {
    somma += number[i];
}
*/

let i = 0;
while (i < number.length){
    somma += number[i];
    i++;
}

console.log("La somma dei numeri inseriti è: " + somma);
