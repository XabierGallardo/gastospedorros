/*========================
    Selector elementos
========================*/
const formGastos = document.getElementById("formGastos");
const totalAlquiler = document.getElementById("totalAlquiler");
const totalExpensas = document.getElementById("totalExpensas");

const alquiler1 = document.getElementById("alquiler1");
const alquiler2 = document.getElementById("alquiler2");
const alquiler3 = document.getElementById("alquiler3");
const alquiler4 = document.getElementById("alquiler4");

const expensas1 = document.getElementById("expensas1");
const expensas2 = document.getElementById("expensas2");
const expensas3 = document.getElementById("expensas3");
const expensas4 = document.getElementById("expensas4");

const total1 = document.getElementById("total1");
const total2 = document.getElementById("total2");
const total3 = document.getElementById("total3");
const total4 = document.getElementById("total4");



// Evento tecla levantada
formGastos.addEventListener("keyup", event => {
    
    let valorAlquiler = totalAlquiler.valueAsNumber;
    let valorExpensas = totalExpensas.valueAsNumber;

    // Si es un numero y no es null, pasa a la funcion repartir gastos
    if(!isNaN(valorAlquiler) && valorAlquiler !== null && !isNaN(valorExpensas) && valorExpensas !== null) {
        repartirGastos(valorAlquiler, valorExpensas);
    }
});


function repartirGastos(alquiler, expensas) {
    let sumaExpensas = expensas * 25 / 100;

    let sumaAlquiler1 = alquiler * 34.22 / 100;
    let sumaAlquiler2 = alquiler * 17.97 / 100;
    let sumaAlquiler3 = alquiler * 17.29 / 100;
    let sumaAlquiler4 = alquiler * 30.52 / 100;

    // toLocaleString agrega . como separador de miles (en formato local argentino)
    alquiler1.innerHTML = `$${sumaAlquiler1.toLocaleString("es-AR")}`;
    expensas1.innerHTML = `$${sumaExpensas.toLocaleString("es-AR")}`;
    total1.innerHTML = `$${(sumaAlquiler1 + sumaExpensas).toLocaleString("es-AR")}`;

    alquiler2.innerHTML = `$${sumaAlquiler2.toLocaleString("es-AR")}`;
    expensas2.innerHTML = `$${sumaExpensas.toLocaleString("es-AR")}`;
    total2.innerHTML = `$${(sumaAlquiler2 + sumaExpensas).toLocaleString("es-AR")}`;
    

    alquiler3.innerHTML = `$${sumaAlquiler3.toLocaleString("es-AR")}`;
    expensas3.innerHTML = `$${sumaExpensas.toLocaleString("es-AR")}`;
    total3.innerHTML = `$${(sumaAlquiler3 + sumaExpensas).toLocaleString("es-AR")}`;
    
    alquiler4.innerHTML = `$${sumaAlquiler4.toLocaleString("es-AR")}`;
    expensas4.innerHTML = `$${sumaExpensas.toLocaleString("es-AR")}`;
    total4.innerHTML = `$${(sumaAlquiler4 + sumaExpensas).toLocaleString("es-AR")}`;
}
