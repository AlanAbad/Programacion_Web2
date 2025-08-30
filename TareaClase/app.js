console.log("Mi nombre es Alan");
console.log("Tengo 21 años");
console.log("Peso aproximadamente 65 kg");
console.log("Mido alrededor de 165 cm");

function deboMaterias(cadena) {
    const resultado = cadena.toLowerCase().includes("¿Debo Materias?");
    console.log('¿Debo Materias? ${resultado}');
    return resultado;
}

