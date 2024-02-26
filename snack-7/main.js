console.log("tutto ok");

let somma=0;

let userNumber = prompt("inserisci un numero di 4 cifre: ");

for (let index = 0; index < userNumber.length; index++) {
    let element = userNumber[index];
    element = Number(element);
    somma +=element;
}
console.log(somma);


userNumber = Number(userNumber);
console.log(userNumber);

