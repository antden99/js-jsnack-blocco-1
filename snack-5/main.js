console.log("tutto ok");


console.log("Tutto funziona");

let number = [];

/*
for (let i = 0; i < 6; i++) {  
    let numeroInserito = Number(prompt("Inserisci un numero: "));   
    
    if (numeroInserito % 2 === 0) {
		
	} else {
		number.push(numeroInserito);
	}
}
*/

let i = 0;
while(i < 6){

    let numeroInserito = Number(prompt("Inserisci un numero: "));  
    if (numeroInserito % 2 === 0) {
		
	} else {
		number.push(numeroInserito);
	}

    i++;
}


for (let index = 0; index < number.length; index++) {
    const element = number[index];
    console.log(element);
}
