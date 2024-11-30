// Array para almacenar los productos en el carrito
let carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarCarrito();
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const listaCarrito = document.getElementById("carrito-lista");
    const total = document.getElementById("total");
    
    // Limpiar la lista del carrito antes de agregar los nuevos elementos
    listaCarrito.innerHTML = '';

    // Agregar cada producto al carrito
    carrito.forEach((producto, index) => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio.toLocaleString('es-CO')}`;
        listaCarrito.appendChild(li);
    });

    // Calcular el total
    const totalCarrito = carrito.reduce((sum, producto) => sum + producto.precio, 0);
    total.textContent = `$${totalCarrito.toLocaleString('es-CO')}`;
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    mostrarCarrito();
}
