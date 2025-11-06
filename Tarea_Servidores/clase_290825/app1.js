let numusuario = parseInt("ingresa nuero mmayor a 10");
if(numusuario >= 10){
    //clave true
    console.log("Exito");
}else{
    console.log("mal");
}


// let port = 3000;

// if (port){
    // console.log("Definicion de puerto correcto");
// }else{
    // console.error("Error en puerto");
// }

/* //IF
if(condicion => false){
    //algo
}else{
    //ese algo
}
    */


let clave = prompt("ingresa la clave secreta");
if(clave === "123456"){
    //clave true
    console.log("Exito");
}
console.log("Continua el flujo");