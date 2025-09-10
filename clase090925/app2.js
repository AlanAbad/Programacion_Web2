const frutas = ["Banana"];
//frutas.push("sandia");
frutas.unshift("sandia");
frutas.push("pera");
frutas.push("melon");
frutas.push("papaya");
frutas.push("guayaba");

console.log(frutas);

for(let fruta of frutas) {
    console.log(fruta);
}

console.log("---------------------");
frutas.pop();

for(let fruta of frutas) {
    console.log(fruta);
}

console.log("---------------------");
frutas.shift();

for(let fruta of frutas) {
    console.log(fruta);
}




/*
const puerto = 3306;
puerto = 3308;
console.log(puerto);
*/

