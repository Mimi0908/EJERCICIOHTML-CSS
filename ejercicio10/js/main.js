
function agregarImg() {
    const boton = document.getElementById("boton");
    for(let i=1; i<=20; i++){
        const imagen = `./img/mascota${i}.jpg`;
        const precio= document.getElementById("abajo");
        const contenedor = document.getElementById(i.toString());
        contenedor.insertAdjacentHTML("beforeend", `<img src=${imagen} alt=${imagen} class="imgBody">`);
        contenedor.insertAdjacentHTML("beforeend", `<p class="p">$5.000</p> <h3 class="des">Veterinaria</h3>`);
    }
    boton.disabled=true;
}
function quitarImg(){
   document.location.reload();
}