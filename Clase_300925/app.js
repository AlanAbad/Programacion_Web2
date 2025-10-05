let tareas = [];

//MENU
function mostrarMenu(){
	return parseInt(prompt(`
		Opciones Disponibles:
		1.- Agregar Tareas,
		2.- Ver todas las tareas,
		3.- Marcar tarea como completada,
		4.- Eliminar tarea,
		5.- Salir
		"Elige una opcion"
	`));
}

//AGREGAR TAREAS
function agregarTarea(){
	let nombre = prompt("Introduce el nombre de la tarea");
	if(nombre) {
		let tarea = {
			nombre: nombre,
			completado: false	
		};
		tareas.push(tarea);
		alert("La tarea se agrego correctamente");
	} else {
		alert("El nombre de la tarea no puede estar vacío");
	}
}

//VER TAREAS
function verTareas(){
	if(tareas.length === 0) {
		alert("No hay tareas en esta lista");
	} else {
		let mensaje = "Lista de Tareas\n";
		tareas.forEach((tarea, index) => {
			mensaje += `${index + 1}.- ${tarea.nombre} [${tarea.completado ? "Completada" : "Pendiente"}]\n`;
		});
		alert(mensaje);
	}
}

//Marcar tarea como completada
function marcarTareaCompletada(){
    let numero = parseInt(prompt("Introduce el numero de la tarea que se desea marcar como completada"));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero - 1].completado = true;
        alert(`La tarea "${tareas[numero-1].nombre}" ha sido marcada como completada.`);
    } else {
        alert("Numero de tarea invalido");
    }
} 

// Función eliminar tarea
function eliminarTarea(){
    let numero = parseInt(prompt("¿Qué tarea deseas eliminar?"));
    if(numero > 0 && numero <= tareas.length){
		let tareaEliminada = tareas.splice(numero - 1, 1);
		alert(`Tarea "${tareaEliminada[0].nombre}" Eliminada`);
    } else {
        alert("Numero de tarea invalido");
    }
}  

// funcion para manejar el flujo de nuestro programa
function iniciarPrograma(){
    let continuar = true;

    while(continuar){
        let opcion = mostrarMenu();

        switch(opcion){
            case 1: 
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                eliminarTarea();
                break;
            case 5:
                alert("Saliendo del programa");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta de nuevo");
        }
    }
    alert("Programa finalizado");
}

//Iniciar programa
iniciarPrograma();