let sumaTotal=0;

function sumarProducto () {

    let nombre = prompt("Ingrese el nombre del producto:");

    if (nombre !== null) {
        let precio = parseFloat(prompt("ingrese el precio del producto"));

        if (!isNaN(precio)) {
            sumaTotal += precio;
            console.log("Producto: " + nombre + " - Precio: " + precio + " - Suma Total: " + sumaTotal);

            sumarProducto ();

        } else {

            console.log("Por favor, ingrese un precio válido.");
            
            sumarProducto();
        } 
    }
        else {
            // Si el usuario decide dejar de cargar productos, mostramos el total final y finalizamos el programa
            console.log("Suma Total de Productos: " + sumaTotal);
        }
        
    

}

sumarProducto();