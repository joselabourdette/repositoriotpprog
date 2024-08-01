"use strict";

let form = document.getElementById("formDeContacto");
let alerta = document.getElementById("alerta");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefono = document.getElementById("telefono").value.trim();
    let asunto = document.getElementById("asunto").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !asunto || !email || !mensaje) {
        alerta.classList.remove("invisible");
        alerta.classList.add("visible");
    } else {
        alerta.classList.remove("visible");
        alerta.classList.add("invisible");

        let informacion = [];
        informacion[0] = nombre;
        informacion[1] = email;
        informacion[2] = telefono;
        informacion[3] = asunto;
        informacion[4] = mensaje;


        let blob = new Blob([informacion], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "contacto.txt");

        form.reset();
    }
});