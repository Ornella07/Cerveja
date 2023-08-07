const productosEnCarrito = JSON.parse(
  localStorage.getItem("productos-en-carrito")
);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector('.carrito-acciones-vaciar');
const botonComprar = document.querySelector('.carrito-acciones-comprar');
const total = document.querySelector('#total');


function cargarProductosCarrito(){
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
        
    
        contenedorCarritoProductos.innerHTML = "";
    
    
        productosEnCarrito.forEach((cervezas) => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${cervezas.imagen}" alt="">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3>${cervezas.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${cervezas.cantidad}</p>
                    </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${cervezas.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${cervezas.precio * cervezas.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${cervezas.titulo}"><i class="fa-solid fa-trash"></i></button>
            
                `;
                contenedorCarritoProductos.append(div)
        });
        } else {
            contenedorCarritoVacio.classList.remove("disabled");
            contenedorCarritoProductos.classList.add("disabled");
            contenedorCarritoAcciones.classList.add("disabled");
            contenedorCarritoComprado.classList.add("disabled");
        }
        actualizarBotonesEliminar();
        actualizarTotal()

}
    cargarProductosCarrito();


function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(cervezas => cervezas.titulo === idBoton);
    productosEnCarrito.splice(index, 1);  
    cargarProductosCarrito();

    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
    
}
botonVaciar.addEventListener('click',vaciarCarrito); 

function vaciarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));
    cargarProductosCarrito(); 
}

function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, cervezas) => acc + (cervezas.precio * cervezas.cantidad), 0);
    total.innerHTML = ` $ ${totalCalculado}`;
}

botonComprar.addEventListener('click',comprarCarrito);
function comprarCarrito(){
    productosEnCarrito.length = 0;
    localStorage.setItem('productos-en-carrito', JSON.stringify(productosEnCarrito));

    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled"); 
}