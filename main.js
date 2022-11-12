//Asignar variables para trabajar con elementos del front (html)

let botonAumentar = document.querySelector("#aumentar");
let botonDisminiuir = document.querySelector("#disminuir");
let botonResetear = document.querySelector("#resetear");
let botonRandom = document.querySelector("#imagenRandom");
let contador = document.querySelector("#contador");


var valorContador=0;

function aumentar(){
    valorContador++;
    contador.innerHTML=valorContador;
}
botonAumentar.addEventListener('click', aumentar)
function disminuir(){
    valorContador--;
    contador.innerHTML=valorContador;
}

botonDisminiuir.addEventListener('click', disminuir)
function resetear(){
    valorContador=0;
    contador.innerHTML=valorContador;
}
botonResetear.addEventListener('click', resetear)


//Explicacion de la funcion suma: tomo el valor del contador que es cero,y cada que se ejecuta esta funcion aumentare de 1 en 1, ese valor lo quiero ver reflejado en un espacio del HTML que sellama contador. Ese contador, ira tomando el valor respectivo de la variable (variable que se modifica cada que doy clic)
