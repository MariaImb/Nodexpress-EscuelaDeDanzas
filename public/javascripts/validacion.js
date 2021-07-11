/*VALIDACION DEL FORMULARIO*/

//Creo un objeto global con los datos
const datos = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje:'',  
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');



const formulario = document.querySelector('.contactform');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
asunto.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(event) {
    console.log(event.target.value);
    datos[event.target.id] = event.target.value;
    console.log(datos);
}




formulario.addEventListener('submit', function(event){
    event.preventDefault();

    //Validar formulario
    //Utilizo destructuring para extraer los datos del objeto y crear variables en el mismo paso
    const { nombre, email, telefono, asunto, mensaje } = datos;
    if(nombre === ''|| email === '' || telefono === '' || asunto === '' ||mensaje === ''){
        mostrarError ('Todos los campos son obligatorios')
        return; //corta la ejecucion del codigo
    }

    if(nombre.length <= 3){
        mostrarError('Por favor ingrese un nombre válido')
        return;
    }
    
    if(asunto.length > 20){
        mostrarError('Por favor ingrese un asunto que contenga menos de 20 caracteres')
        return;
    }

    if(isNaN(telefono) || telefono.length != 10){
        mostrarError('Por favor ingrese un número de teléfono válido')
        return;
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        mostrarError('Por favor ingrese un correo electrónico válido')
        return;
    }
    if(mensaje.length >= 400) {
        mostrarError('Por favor ingrese un mensaje que contenga menos de 400 caracteres')
        return;
    }

    //crear otra alerta de Enviar correctamente
    
 
    mostrarMensaje('Mensaje enviado correctamente');
});



//Muestra una alerta de que se envio correctamente
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);
    //Desaparezca despues de 5 seg
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


//Muestra el error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);
    //Desaparece despues de 5 seg
    setTimeout(() => {
        error.remove();
    }, 5000);
    
}