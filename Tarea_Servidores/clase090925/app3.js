const frutas = [];
const fruta = prompt("¿Qué fruta quieres comprar?");

frutas.push(fruta);

while (confirm ("¿Quieres seguir agregando frutas?")) {
    const fruta = prompt("Agrega la fruta que deseas");
    frutas.push(fruta);
}

console.log("Tu compra es: ");
for (let fruta of frutas) {
    console.log(fruta);
}
