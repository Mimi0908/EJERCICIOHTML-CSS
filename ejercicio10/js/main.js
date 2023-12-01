const boton = document.getElementById("boton");

function agregarImg() {
    console.log("click");
    for (let i = 1; i <= 20; i++) {
        const imagen = `./img/mascota${i}.jpg`;
        const contenedor = document.getElementById(i.toString());
        contenedor.insertAdjacentHTML("beforeend", `<img src=${imagen} alt=${imagen} class="imgBody">`);
        contenedor.insertAdjacentHTML("beforeend", `<p class="p">$5.000</p> <h3 class="des">Veterinaria</h3>`);
    }
    boton.disabled = true;
}
function quitarImg() {
    document.querySelectorAll(`.principal .caja div img`).forEach(img => img.remove());
    document.querySelectorAll(`.principal .caja div p`).forEach(p => p.remove());
    document.querySelectorAll(`.principal .caja div h3`).forEach(h3 => h3.remove());
    boton.disabled = false;
}

