"use strict";

let arrProductos = ["Aceite Natura", "Arroz Molto", "Arvejas Molto", "Atún La Campagnola", "Azúcar Ledesma", "Galletitas Cerealitas", "Fideos Marolio", "Leche larga vida", "Lentejas Marolio", "Surtidas Diversión", "Yerba Andresito", "Yogurt Bebible"];
let arrPrecios = [1500, 1800, 500, 4500, 1200, 1150, 950, 1500, 850, 1620, 3000, 1200];
let arrStock = [10, 50, 25, 20, 2, 30, 100, 15, 9, 70, 25, 12];
let arrCant = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let arrTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let varTotal = 0;


document.addEventListener("DOMContentLoaded", function () {
  let contenedor2 = document.getElementById('contenedor2');

  arrProductos.forEach((producto, i) => {
    let card = document.createElement('div');
    card.classList.add('card');

    let img = document.createElement('img');
    img.classList.add('imgProducto');
    img.src = `./imagenes/${producto.toLowerCase().replace(/ /g, '')}.png`;
    img.alt = producto;

    let h4 = document.createElement('h4');
    h4.classList.add('nombreProducto');
    h4.textContent = producto;

    let pPrecio = document.createElement('p');
    pPrecio.innerHTML = `$ <span class="precioProducto">${arrPrecios[i]}</span>`;

    let h6 = document.createElement('h6');
    h6.innerHTML = `Stock disponible <span class="stockDisponible">${arrStock[i]}</span> u.`;

    let pCantidad = document.createElement('p');
    pCantidad.innerHTML = `Cantidad: <input type="number" id="cant${i}" min="0" value="0">`;

    let boton = document.createElement('button');
    boton.type = 'button';
    boton.classList.add('boton');
    boton.id = `boton${i}`;
    boton.textContent = 'Comprar';

       

    card.appendChild(img);
    card.appendChild(h4);
    card.appendChild(pPrecio);
    card.appendChild(h6);
    card.appendChild(pCantidad);
    card.appendChild(boton);
    contenedor2.appendChild(card);
  });



  document.querySelectorAll('.boton').forEach((boton, i) => {
    boton.addEventListener('click', () => {
      let cantidad = document.querySelector(`#cant${i}`).value;
      cantidad = Number(cantidad);

      if (cantidad > 0 && (arrStock[i] - cantidad) >= 0) {
        arrCant[i] = arrCant[i] + cantidad;
        arrStock[i] = arrStock[i] - cantidad;
        document.querySelector(`#cant${i}`).value = 0;
        document.querySelectorAll('.stockDisponible')[i].textContent = arrStock[i];
        comprar();
      } else {
        alert("Ingrese una cantidad mayor a 0 o dentro del stock");
        document.querySelector(`#cant${i}`).value = 0;
      }
    });
  });
});

function comprar() {
  varTotal = 0;
  arrPrecios.forEach((precio, i) => {
    arrTotal[i] = precio * arrCant[i];
    varTotal += arrTotal[i];
  });
  console.log(varTotal);
  document.getElementById("total").innerHTML = varTotal;
  alert("Compra confirmada. Agregue más productos o finalice la compra.");
}

let finalizar = document.getElementById('finalizarCompra')
finalizar.addEventListener('click', () => {
  alert(`Su compra por el valor de $ ${varTotal} a finalizado. Su pedido está en camino. ¡Gracias por su compra!`);
  varTotal = 0;
  document.getElementById("total").innerHTML = varTotal;
})
