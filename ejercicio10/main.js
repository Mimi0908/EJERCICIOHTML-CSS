
function agregarImg() {
    const boton = document.getElementById("boton");
    for(let i=1; i<=20; i++){
        const imagen = `mascota${i}.jpg`;
        const contenedor = document.getElementById(i.toString());
        contenedor.insertAdjacentHTML("beforeend", `<img src=${imagen} alt=${imagen} class="imgBody">`);
    }
    boton.disabled=true;
}
function quitarImg(){
   document.location.reload();
}