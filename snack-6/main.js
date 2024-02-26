console.log("tutto ok");


const listNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];


const user = prompt("inserisci un numero: ");
console.log(user);

if (user > listNumber.length) {
    alert("mi spiace, ma la lista al momento ha solo 10 numeri, inserisci un numero più basso");
}

/*
for (let index = 0; index < user; index++) {
let cubo = listNumber[index] * listNumber[index] * listNumber[index];

const element = cubo;
 
console.log(element);
 
}*/

let index = 0;
while (index < user) {
    let cubo = listNumber[index] * listNumber[index] * listNumber[index];

    const element = cubo;

    console.log(element);

    index++;
}

