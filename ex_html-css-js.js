//Escribe aquí tu código JavaScript
let botonEnviar = document.getElementById("boton_enviar");

document.getElementById("pescaito").submit = function (event) {
    let nombre = document.getElementById("nombre");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let direccion = document.getElementById("direccion");


    if (!nombre) {
        alert("Algunos campos son incorrectos o están incompletos");
        event.preventDefault();
        return;
    }

    if (!email.includes("@")) {
        alert("Algunos campos son incorrectos o están incompletos");
        event.preventDefault();
        return;
    }

    if (direccion.length < 18) {
        alert("Algunos campos son incorrectos o están incompletos");
        event.preventDefault();
        return;
    }

    if (isNaN(telefono) || telefono.length < 9) {
        alert("Algunos campos son incorrectos o están incompletos");
        event.preventDefault();
        return;
    }

    if (!confirm("¿Seguro que quieres confirmar y enviar tu pedido ahora?")){
        event.preventDefault();
        return;  
    }

    alert("Gracias por su pedido,"[nombre]);
  
};

document.getElementById("boton_ocuro").onclick = function oscuro (){
    document.body.classList.toggle("oscuro");
}

document.getElementById("precio").submit = function calcularPrecio() {
    let tipo_pescado = document.getElementById("tipo_pescado");
    let raciones = document.getElementById("raciones");
    let acompañamiento = document.getElementById("acompañamiento");
    let total = 0;

    switch(tipo_pescado){
        case 'calamares' : total += 6; break;
        case 'adobo' : total += 7; break;
        case 'boquerones' : total += 8; break;
    }

    if (raciones > 0) {
        total *= raciones;
    } 

    switch(acompañamiento){
        case 'patatas_fritas' : total += 4; 
        case 'ensaladilla' : total += 4; 
        case 'manzanilla' : total += 4;
    }

    alert(calcularPrecio());
}

document.getElementById("contador").oninput = function contador() {
    document.getElementById("contador").innerText = 'contador';
}