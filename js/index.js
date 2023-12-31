if(!localStorage.getItem('sweetAlertShown')){
    Swal.fire({
        title: 'Sos mayor de edad?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Excelente! Adelante', '', 'success');
          localStorage.setItem('sweetAlertShown', 'true');
          showLoginModal();
        } else if (result.isDenied) {
          Swal.fire('No sera posible ingresar ya que sos menor de edad', '', 'error');
        }else{
            // startApp();
        }
      });   
}
function showLoginModal(){
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    modal.style.display = 'block';
    overlay.style.display = 'block';
    //asigno evento click al boton de ingreso
    const loginButton = document.getElementById('loginButton');
    const usernameInput = document.getElementById('usernameInput');
    const userInfo = document.getElementById('userInfo');
    
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
    
}
    // Función para ocultar el modal
function hideModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    modal.style.display = 'none';
    overlay.style.display = 'none';
}
function startApp(){
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
}
// Función para el comportamiento de la flecha al hacer clic
document.querySelector('.arrow').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
});


// Recuperar el nombre de usuario almacenado en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        const userInfo = localStorage.getItem('userinfo')
        userInfo.textContent = `Usuario logueado como: ${savedUsername}`;
        startApp();
    } else {
        showLoginModal();
    }
});


