var swiper = new Swiper(".mySwiper-1", {
    slidesPreView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickeable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPreView: 4,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        0: {
            slidesPreView: 1
        },
        520: {
            slidesPreView: 2
        },
        950: {
            slidesPreView: 3
        }
    }
});

class Cerveja {
    constructor(titulo, imagen, precio, descripcion) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}

let carrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if (productosEnCarritoLS) {
    carrito = productosEnCarritoLS;
} else {
    carrito = []
}

const cervezas = [
    {
        titulo: 'Blue Moon',
        imagen: './images/5.png',
        precio: 1200,
        descripcion: '0,33cl.'

    },

    {
        titulo: 'Franziskaner Dunkel',
        imagen: './images/7.png',
        precio: 1500,
        descripcion: '0,50cl.'

    },
    {
        titulo: 'Franziskaner Naturtrub',
        imagen: './images/8.png',
        precio: 1500,
        descripcion: '0,50cl.'
    }
    ,
    {
        titulo: 'Franziskaner sin alcohol ',
        imagen: './images/9.png',
        precio: 1500,
        descripcion: '0,50cl.'
    },
    {
        titulo: 'Franziskaner Kristallklar',
        imagen: './images/10.png',
        precio: 1500,
        descripcion: '0,50cl.'
    },
    {
        titulo: 'Chimay Triple Blanca',
        imagen: './images/11.png',
        precio: 2000,
        descripcion: '0,33cl.'
    },
    {
        titulo: 'Chimay Azul',
        imagen: './images/12.png',
        precio: 2000,
        descripcion: '0,33cl.'
    },
    {
        titulo: 'Chimay Roja',
        imagen: './images/13.png',
        precio: 2000,
        descripcion: '0,33cl.'
    },
    {
        titulo: 'Ocho Reales Porter',
        imagen: './images/17.png',
        precio: 1500,
        descripcion: '0,355l'
    },
    {
        titulo: 'Ocho Reales Lager clara',
        imagen: './images/18.png',
        precio: 1500,
        descripcion: '0,355l'
    },
    {
        titulo: 'Ocho Reales Ale',
        imagen: './images/19.png',
        precio: 1500,
        descripcion: '0,355l'
    },
    {
        titulo: 'Leffe Blonde',
        imagen: './images/20.png',
        precio: 1300,
        descripcion: ' 0,33cl.'
    },
    {
        titulo: 'Leffe Brune',
        imagen: './images/21.png',
        precio: 1300,
        descripcion: ' 0,33cl.'
    },
    {
        titulo: 'Guinness Special Export',
        imagen: './images/22.png',
        precio: 1500,
        descripcion: '0,33cl.'
    },
    {
        titulo: 'Negra Modelo',
        imagen: './images/23.png',
        precio: 1300,
        descripcion: '0,355l.'
    },
    {
        titulo: 'Pacifico Clara',
        imagen: './images/25.png',
        precio: 1250,
        descripcion: '0,355l.'
    },
    {
        titulo: 'Triple Secret des Moines ',
        imagen: './images/26.png',
        precio: 1450,
        descripcion: '0.33cl.'
    }
];
const contenedorCervezas = document.getElementById('cervezas');
// Carga de cervezas
function cargaDeBirras(birras) {
    cargaDeBirras.innerHTML = '';
    birras.forEach((cervezas) => {
        const div = document.createElement('div');
        div.classList.add('cervezas');
        div.innerHTML = `
        <div class="swiper-slide">
        <div class="producto">
            <img src="${cervezas.imagen}" alt="">
            <div class="producto-txt">
                <h4>${cervezas.titulo}</h4>
                <p>${cervezas.descripcion}</p>
                <p>$${cervezas.precio}</p>
            </div>
            <button id="btn-${cervezas.titulo}" class="agregar-carrito">Agregar al carrito</button>
        </div>
    </div>
        `
        contenedorCervezas.appendChild(div);
        const agregarBtn = document.getElementById(`btn-${cervezas.titulo}`)
        agregarBtn.addEventListener('click', () => agregarAlCarrito(cervezas.titulo))
    });
}
cargaDeBirras(cervezas);
// Función para agregar al carrito
function agregarAlCarrito(titulo) {
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #f5c179, #ffe45e)",
            color: "#777474",
            fontWeigth: "bold",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function () { } // Callback after click
    }).showToast();

    console.log(`Estas clickeando el producto ${titulo}`)
    const producto = cervezas.find(producto => producto.titulo === titulo);
    if (carrito.some(producto => producto.titulo === titulo)) {
        const index = carrito.findIndex(producto => producto.titulo === titulo);
        carrito[index].cantidad++;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito))
    console.log(carrito)
}

// Carga de birras al final
const cervejas = "./js/cervezas.json";
const contenedorCervejas = document.getElementById('beer');
//inicio del programa
fetch(cervejas)
    .then(response => response.json())
    .then(data => {
        data.forEach((cerveja) => {
            const div = document.createElement('div');
            div.classList.add('cerveja');
            div.innerHTML = `
                <div class="swiper-slide">
                    <div class="producto">
                        <img src="${cerveja.imagen}" alt="">
                    <div class="producto-txt">
                        <h4>${cerveja.titulo}</h4>
                        <p>${cerveja.descripcion}</p>
                    </div>
                    </div>
                </div>
                
                `
            contenedorCervejas.appendChild(div);
        });
    });
