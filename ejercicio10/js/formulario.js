import { validar, campos, validarLugar, resetearEstilos } from "./ExpresionesRegulares.js";
//Validación formulario

const formulario = document.getElementById("Form");
const inputs = document.querySelectorAll("#Form input");
const lugar = document.getElementById('lugar');
const inputEdad=document.getElementById('edad');
const edad= parseInt(inputEdad.value);

inputs.forEach((input) => {
    input.addEventListener('blur', validar);
    input.addEventListener('keyup', validar);
});

lugar.addEventListener('change', validarLugar);

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.id && campos.nombre && campos.apellidos && campos.edad && campos.direccion && campos.correo && campos.webP && campos.lugar && campos.genero) {
        if (edad>=18){
            document.getElementById('form_mensj').classList.remove('form_mensj-activo');
            console.log(edad);
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

formulario.addEventListener('reset', () => {
    eliminarEstilos();
    resetearEstilos();
})

function eliminarEstilos() {
    formulario.reset();
}