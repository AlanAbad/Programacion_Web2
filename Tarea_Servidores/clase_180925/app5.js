var productos =[
    {nombre: 'camisa',precio:300},
    {nombre: 'pantalon', precio: 500},
    {nombre: 'zapatos',precio:400},
    {nombre:'sombrero',precio:200}
];

var carrito=[];

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }

    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Modificar Carrito\n";
    menu += (productos.length + 3) + ". Administrar Productos\n";
    menu += (productos.length + 4) + ". Salir\n";

    return menu;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        console.log("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        console.log(mensajeCarrito);
    }
}

function actualizarCompra()
{
    if (carrito.length === 0) {
        console.log("No ha sido agregado ningún producto");
        
        return;
    }

    var otroMenu = "=== Menu para modificar carrito ===\n";
    otroMenu += "1. Agregar otro producto\n";
    otroMenu += "2. Eliminar un producto\n";
    otroMenu += "3. Vaciar carrito\n"
    otroMenu += "4. Regresar al menú principal\n";

    var opcion;
    do
    {
        opcion = Number(prompt(otroMenu));

        if (opcion === 1) {
            var lista = "Selecciona el producto a agregar\n";
            for (var i = 0; i < productos.length; i++) {
                lista += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
                
            }
            var indiceAgregar = Number(prompt(lista)) - 1;

            if (indiceAgregar >= 0 && indiceAgregar < productos.length) {
                carrito.push(productos[indiceAgregar]);
                console.log("Producto agregado: " + productos[indiceAgregar].nombre);
            } else {
                console.log("Opción inválida.");
            }
        } else if(opcion === 2) {
            mostrarCarritoYTotal();
            var indiceEliminar = Number(prompt("Ingrese el número del producto que deseas eliminar:")) - 1;
            if (indiceEliminar >= 0 && indiceEliminar < carrito.length) {
                var eliminado = carrito.splice(indiceEliminar, 1);
                console.log("Producto eliminado: " + eliminado[0].nombre);
            } else {
                console.log("Opción inválida.");
            }
        } else if (opcion === 3) {
            carrito = [];
            console.log("🗑️ Carrito vaciado.");
        }
    } while (opcion !== 4);
}

function administrarMenu() {
    var opcion;
    do {
        var menuAdmin = "=== Menú para administrar la tienda ===\n";
        menuAdmin += "1. Agregar producto\n";
        menuAdmin += "2. Eliminar producto\n";
        menuAdmin += "3. Ver productos actuales\n";
        menuAdmin += "4. Volver al menú principal\n";

        opcion = Number(prompt(menuAdmin));

        if (opcion === 1) {
            var nombre = prompt("Ingresa el nombre del nuevo producto:");
            var precio = Number(prompt("Ingresa el precio del producto:"));
            productos.push({ nombre: nombre, precio: precio });
            console.log("Producto agregado.");
        } else if(opcion === 2) {
            for (var i = 0; i < productos.length; i++) {
                console.log((i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio);
            }
            var indiceEliminar = Number(prompt("Ingrese el número del producto a eliminar:")) - 1;
            if (indiceEliminar >= 0 && indiceEliminar < productos.length) {
                var eliminado = productos.splice(indiceEliminar, 1);
                console.log("Producto eliminado: " + eliminado[0].nombre);
            } else {
                console.log("Opción inválida.");
            }
        } else if (opcion === 3) {
            console.log("=== LISTA DE PRODUCTOS ===");
            for (var i = 0; i < productos.length; i++) {
                console.log((i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio);
            }
        }
    } while (opcion !== 4);
}


// Función principal de la tienda
function ejecutarTienda() {
    var opcion;
    do {
        opcion = Number(prompt(mostrarMenu()));

        if (opcion >= 1 && opcion <= productos.length) {
            agregarAlCarrito(opcion - 1);
        } else if (opcion === productos.length + 1) {
            mostrarCarritoYTotal();
        } else if (opcion === productos.length + 2) {
            actualizarCompra();
        } else if (opcion === productos.length + 3) {
            administrarMenu();
        } else if (opcion !== productos.length + 4) {
            console.log("Opción no válida.");
        }
    } while (opcion !== productos.length + 4);

    console.log("Gracias por visitar la tienda.");
}

ejecutarTienda();
