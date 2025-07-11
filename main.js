const formulario = document.querySelector(".form-create");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const publicacion = document.querySelector("#publicacion").value;
    const contenedor = document.querySelector(".contenedor-publicaciones");
    contenedor.innerHTML += `
        <div class="publicacion">
            <p>Id: 00</p>
            <p>${publicacion}</p>
            <button>Editar</button>
            <button>Eliminar</button>
        </div>`
});