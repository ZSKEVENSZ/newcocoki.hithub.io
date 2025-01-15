
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


function actualizarCarrito() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

   
    cartCount.textContent = carrito.length;


    cartItems.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        cartItems.appendChild(div);
        total += item.precio;
    });

 
    totalPrice.textContent = total.toFixed(2);
}


function agregarAlCarrito(producto) {
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}


function clearCart() {
    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
    toggleCart(); 
}

function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('open');
}


function checkout() {
    const ticketContainer = document.getElementById('ticket-container');
    const ticketItems = document.getElementById('ticket-items');
    const ticketTotal = document.getElementById('ticket-total-price');

    ticketItems.innerHTML = '';
    let total = 0;

    carrito.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
        ticketItems.appendChild(div);
        total += item.precio;
    });

    ticketTotal.textContent = `Total: $${total.toFixed(2)}`;
    ticketContainer.style.display = 'block';

    carrito = [];
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}


function closeTicket() {
    const ticketContainer = document.getElementById('ticket-container');
    ticketContainer.style.display = 'none';
}


const productosComida = [
    { nombre: 'Galletas con chips de chocolate', precio: 25.00 },
    { nombre: 'Galletas María', precio: 30.00 },
    { nombre: 'Galletas de chocolate', precio: 18.00 },
    { nombre: 'Galletas con chispas de colores', precio: 10.00 },
    { nombre: 'polvorones', precio: 15.00 },
    { nombre: 'Galletas de canela', precio: 20.00 },
];

const productosBebida = [
    { nombre: 'Jugo de naranja', precio: 20.00 },
    { nombre: 'Agua mineral', precio: 10.00 },
    { nombre: 'soda', precio: 15.00 },
    { nombre: 'leche', precio: 20.00 },
    { nombre: 'cafe con leche', precio: 30.00 },
    { nombre: 'cafe negro', precio: 20.00 },
];


document.querySelectorAll('.agregar-carrito').forEach((button, index) => {
   
    const productos = window.location.pathname.includes('comidas.html') ? productosComida : productosBebida;
    
    button.addEventListener('click', () => {
        agregarAlCarrito(productos[index]);
    });
});


window.onload = function () {
    actualizarCarrito();
};


