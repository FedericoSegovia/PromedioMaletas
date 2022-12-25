let cantidadMaletas = parseInt(prompt("Indique cuantas maletas tendra en avión"));
let sumaPeso; //cantidaMaletas
let totalPeso = 0; //pesoTotal
let i; //ciclo

for(i=1; i<=cantidadMaletas; i++){
    sumaPeso= parseFloat(prompt("Ingrese el peso de la maleta "+i));
    totalPeso=totalPeso+sumaPeso;

}

console.log("El peso promedio de las "+ cantidadMaletas + " maletas es : " + totalPeso/cantidadMaletas);

alert("El peso promedio de las "+ cantidadMaletas + " maletas es : " + totalPeso/cantidadMaletas + " kg ");