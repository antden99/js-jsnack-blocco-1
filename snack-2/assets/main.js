console.log("tutto ok")


const string_1 = prompt("inserisci la prima parola");
const string_2 = prompt("inserisci la seconda parola");

console.log(string_1,string_2)

const lenght_1 = string_1.length;
const lenght_2 = string_2.length;


if(lenght_1 > lenght_2){
    console.log("la prima parola è più lunga della seconda");
} else if ( lenght_2 > lenght_1){
    console.log("la seconda parola è più lunga della prima");
} else {
    console.log("le parole sono lunghe uguali");

}