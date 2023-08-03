const tableBody = document.querySelector('tbody')
const sectionProductos = document.querySelector('section')
const btnComprar = document.querySelector('button#btnComprar')

function mostrarMsgCarritoVacio() {
    return `<div class="card-error">
                <h3>El carrito está vacío</h3>
                <h2>🛒</h2>
            </div>`
}

function activarClickQuitarDelCarrito() {
    const botonesQuitar = document.querySelectorAll('td.boton-quitar')
    botonesQuitar.forEach((botonQuitar)=> {
        botonQuitar.addEventListener('click', ()=> {
            let codigo = parseInt(botonQuitar.id)
            let indice = carritoCervezas.findIndex((cerveza)=> cerveza.id === codigo) 
            carritoCervezas.splice(indice, 1) 
            armarCarrito()                   
            guardarCarritoCervezas()        
        })
    })
}

function calcularTotalCarrito(carrito) {
    let totalCarrito = carrito.length > 0 ? carrito.reduce((acc, cerveza)=> acc + cerveza.importe, 0)
                                          : 0.00

    return `<tr>
                <td></td>
                <td><strong>Total Carrito:</strong></td>
                <td><strong>$ ${totalCarrito.toLocaleString()}</strong></td>
                <td></td>
            </tr>`
}

function armarCarrito() {
    tableBody.innerHTML = ''
    if (carritoCervezas.length > 0) {
        carritoCervezas.forEach((cerveza)=> tableBody.innerHTML += listarProductosEnCarritoHTML(cerveza) )
        activarClickQuitarDelCarrito()
        tableBody.innerHTML += calcularTotalCarrito(carritoCervezas)
    } else {
        sectionProductos.innerHTML = mostrarMsgCarritoVacio()
    }
}
armarCarrito()

btnComprar.addEventListener('click', ()=> {
        Swal.fire({
            title: '¿Confirmas la compra de los productos?',
            icon: 'question',
            showDenyButton: true,
            confirmButtonText: 'CONFIRMAR',
            denyButtonText: 'CANCELAR'
          }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('CarritoCervezas')
                carritoCervezas.length = 0
                Swal.fire('Muchas gracias por su compra!', '', 'success')
                sectionProductos.innerHTML = mostrarMsgCarritoVacio()
            }
        })
})