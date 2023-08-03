

var swiper = new Swiper(".mySwiper-1" , {
    slidesPreView:1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickeable:true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }
});
var swiper = new Swiper(".mySwiper-2" , {
    slidesPreView:4,
    spaceBetween: 30,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints : {
        0: {
            slidesPreView:1
        },
        520: {
            slidesPreView:2
        },
        950: {
            slidesPreView:3
        }
    }
});

// 
class Cerveja {
    constructor(titulo, imagen, precio,descripcion){
        this.titulo = titulo;
        this.imagen = imagen;
        this.precio = precio;
        this.descripcion = descripcion;
    }
}
const cervezas = [
    {
        titulo:'Blue Moon',
        imagen:'../images/5.png',
        precio:'$1200',
        descripcion:'0,33cl.'

    },
    
    {
        titulo:'Franziskaner Dunkel',
        imagen:'../images/7.png',
        precio:'$1500',
        descripcion:'0,50cl.'

    },
    {
        titulo:'Franziskaner Naturtrub',
        imagen:'../images/8.png',
        precio:'$1500',
        descripcion:'0,50cl.'
    }
    ,
    {
        titulo:'Franziskaner sin alcohol ',
        imagen:'../images/9.png',
        precio:'$1500',
        descripcion:'0,50cl.'
    },
    {
        titulo:'Franziskaner Kristallklar',
        imagen:'../images/10.png',
        precio:'$1500',
        descripcion:'0,50cl.'
    }, 
    {
        titulo:'Chimay Triple Blanca',
        imagen:'../images/11.png',
        precio:'$2000',
        descripcion:'0,33cl.'
    },
    {
        titulo:'Chimay Azul',
        imagen:'../images/12.png',
        precio:'$2000',
        descripcion:'0,33cl.'
    },
    {
        titulo:'Chimay Roja',
        imagen:'../images/13.png',
        precio:'$2000',
        descripcion:'0,33cl.'
    },

    {
        titulo:'Ocho Reales Porter',
        imagen:'../images/17.png',
        precio:'$1500',
        descripcion:'0,355l'
    }
    ,
    {
        titulo:'Ocho Reales Lager clara',
        imagen:'../images/18.png',
        precio:'$1500',
        descripcion:'0,355l'
    }
    ,
    {
        titulo:'Ocho Reales Ale',
        imagen:'../images/19.png',
        precio:'$1500',
        descripcion:'0,355l'
    }
    ,
    {
        titulo:'Leffe Blonde',
        imagen:'../images/20.png',
        precio:'$1300',
        descripcion:' 0,33cl.'
    }
    ,
    {
        titulo:'Leffe Brune',
        imagen:'../images/21.png',
        precio:'$1300',
        descripcion:' 0,33cl.'
    }
    ,
    {
        titulo:'Guinness Special Export',
        imagen:'../images/22.png',
        precio:'$1500',
        descripcion:'0,33cl.'
    }
    ,
    {
        titulo:'Negra Modelo',
        imagen:'../images/23.png',
        precio:'$1300',
        descripcion:'0,355l.'
    }    ,
    {
        titulo:'Pacifico Clara',
        imagen:'../images/25.png',
        precio:'$1250',
        descripcion:'0,355l.'
    },
    {
        titulo:'Triple Secret des Moines ',
        imagen:'../images/26.png',
        precio:'$1450',
        descripcion:'0.33cl.'
    }

];
const contenedorCervezas = document.getElementById('cervezas');
// Carga de cervezas
function cargaDeBirras(birras){
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

            </div>
            <button id="btn-${cervezas.titulo}" class="agregar-carrito">Agregar al carrito</button>
        </div>
    </div>
    
        `
        contenedorCervezas.appendChild(div);
        const agregarBtn = document.getElementById(`btn-${cervezas.titulo}`)
        agregarBtn.addEventListener('click',() => agregarAlCarrito(cervezas.titulo))
    }); 
    
}
cargaDeBirras(cervezas);

// En el archivo "script.js"
// function agregarAlCarrito(titulo) {
//     const toastConfig = {
//       text: `Se agregó "${titulo}" al carrito.`,
//       duration: 3000,
//       gravity: "top",
//       backgroundColor: "#333",
//       stopOnFocus: true,
//       onClick: () => {
//         Toastify({
//             text: 'clickeaste',
//             duration: 1500,
//             position: 'left'
//         }).showToastt()
//       },
//     };
  
//     Toastify(toastConfig).showToast();
//   }

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


        
    const textToWrite = "¡Productos Relacionados!";
    const textContainer = document.getElementById("text-container");

    let index = 0;

    function writeText() {
    if (index < textToWrite.length) {
        textContainer.textContent += textToWrite.charAt(index);
        index++;
        setTimeout(writeText, 100); // Ajusta la velocidad de escritura aquí (en milisegundos)
    }
    }

    writeText();




// Función para manejar el evento clic del botón
function agregarAlCarrito(titulo) {
    console.log(`Estas clickeando el producto ${titulo}`)
    
    // const nombreProducto = titulo;

    // crearCarrito(nombreProducto);

}






// function cargaCarrito(crearCarrito){
//     const carrito = JSON.parse(localStorage.getItem('carrito'));

    
// }
        

 // Crear el botón dinámicamente
//  const agregarBtn = document.createElement('button');
//  agregarBtn.textContent = 'Agregar al carrito';
//  agregarBtn.id = `btn-${cervezas.titulo}`;

//   // Agregar el manejador de evento al botón
//   agregarBtn.addEventListener('click', () => agregarAlCarrito(cervezas.titulo));

//   // Insertar el botón en el contenedor del HTML
//   const botonesContainer = document.getElementById('botonesContainer');
//   botonesContainer.appendChild(agregarBtn); 






//Logueo
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const loginButton = document.getElementById('loginButton');
const usernameInput = document.getElementById('usernameInput');
const userInfo = document.getElementById('userInfo');

// Función para mostrar el modal
function showModal() {
  modal.style.display = 'block';
  overlay.style.display = 'block';
}

// Función para ocultar el modal
function hideModal() {
  modal.style.display = 'none';
  overlay.style.display = 'none';
}

// Asignar evento click al botón de ingreso
loginButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();

  // Verificar si el usuario ingresó un nombre
  if (username) {
    // Mostrar el mensaje de usuario logueado en pantalla
    userInfo.textContent = `Usuario logueado como: ${username}`;

    // Guardar el nombre de usuario en localStorage
    localStorage.setItem('username', username);

    hideModal();
  } else {
    alert('Por favor, ingresa tu nombre de usuario.');
  }
});

// Recuperar el nombre de usuario almacenado en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    userInfo.textContent = `Usuario logueado como: ${savedUsername}`;
  } else {
    showModal();
  }
});



// Carrito
// document.addEventListener("DOMContentLoaded", () => {
//     const buyButtons = document.querySelectorAll(".buy-btn");
//     const cartItems = document.querySelector(".cart-items");
//     const cartTotal = document.querySelector(".cart-total");
  
//     let total = 0;
//     let cartItemsCount = 0;
  
//     buyButtons.forEach((button) => {
//       button.addEventListener("click", () => {
//         const name = button.dataset.name;
//         const price = parseFloat(button.dataset.price);
  
//         total += price;
//         cartItemsCount++;
  
//         const cartItem = document.createElement("li");
//         cartItem.classList.add("cart-item");
//         cartItem.innerHTML = `${name} - $${price.toFixed(2)}`;
//         cartItems.appendChild(cartItem);
  
//         cartTotal.textContent = `$${total.toFixed(2)}`;
//       });
//     });
//   });