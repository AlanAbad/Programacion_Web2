let num1 = parseInt(prompt("Ingresa número 1"));
let num2 = parseInt(prompt("Ingresa número 2"));
let num3 = parseInt(prompt("Ingresa número 3"));

let numMayor, numMenor;

if(num1 >= num2 && num1 >= num3) {
    numMayor = num1;
} else if (num2 >= num3 && num2 >= num1){
    numMayor = num2;
} else {
    numMayor = num3;
}

if(num1 <= num2 && num1 <= num3) {
    numMenor = num1;
} else if (num2 <= num3 && num2 <= num1){
    numMenor = num3;
} else {
    numMenor = num3;
}

if(num1 === num2 && num2 === num3) {
    console.log("Los numeros son iguales");
} else {
    console.log("El número mayor es " + numMayor);
    console.log("El numero menor es " + numMenor);
}