import { validar, campos, resetearEstilos } from "./ExpresionesRegulares.js";
//Validación formulario

const formulario = document.getElementById("Form");
const inputs = document.querySelectorAll("#Form input");

inputs.forEach((input) => {
    input.addEventListener('blur', validar);
    input.addEventListener('keyup', validar);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.id && campos.nombre && campos.apellidos && campos.usuario && campos.correo && campos.contraseña) {
        if (edad>=18){
            document.getElementById('form_mensj').classList.remove('form_mensj-activo');
            alert("enviado");
            eliminarEstilos();
            resetearEstilos();
        }
        else {
            alert("Debe ser mayor de 18 años")
        }
    } else {
        document.getElementById('form_mensj').classList.add('form_mensj-activo');
    }
})

function eliminarEstilos() {
    formulario.reset();
}