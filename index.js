function sumarProductos() {
    let sumaTotal = 0;

    while (true) {
        let nombre = prompt("Ingrese el nombre del producto (o escriba 'fin' para terminar):");

        // Verificar si el usuario quiere salir del bucle
        if (nombre === 'fin' || nombre === 'Fin' || nombre === 'FIN') {
            break;
        }

        let precio = parseFloat(prompt("Ingrese el precio del producto:"));

        // Verificar si el precio ingresado es un número válido
        if (!isNaN(precio)) {
            sumaTotal += precio;
            console.log("Producto: " + nombre + " - Precio: " + precio + " - Suma Total: " + sumaTotal);
        } else {
            console.log("Por favor, ingrese un precio válido.");
        }
    }

    // Mostrar la suma total al salir del bucle
    console.log("Suma Total de Productos: " + sumaTotal.toFixed(2));
}

// Llamar a la función para iniciar el programa
sumarProductos();
