console.log("--FASE1--")
console.log("")

var ciudad1 = null;
var ciudad2 = null;
var ciudad3 = null;
var ciudad4 = null;
var ciudad5 = null;
var ciudad6 = null;

/*var ciudad1 = prompt("Añade ciudad: ")
var ciudad2 = prompt("Añade ciudad: ")
var ciudad3 = prompt("Añade ciudad: ")
var ciudad4 = prompt("Añade ciudad: ")
var ciudad5 = prompt("Añade ciudad: ")
var ciudad6 = prompt("Añade ciudad: ")*/

console.log("Las ciudades son: " + ciudad1 + ", " + ciudad2 + ", " + ciudad3 + ", " + ciudad4 + ", " + ciudad5 + " y " + ciudad6)

console.log("")




console.log("--FASE2--")
console.log("")

var ciudad1 = "Barcelona";
var ciudad2 = "Madrid";
var ciudad3 = "Valencia";
var ciudad4 = "Malaga";
var ciudad5 = "Cadis";
var ciudad6 = "Santander";

var ciudades = new Array();
ciudades.push(ciudad1);
ciudades.push(ciudad2);
ciudades.push(ciudad3);
ciudades.push(ciudad4);
ciudades.push(ciudad5);
ciudades.push(ciudad6);

ciudades.sort();
console.log("Las ciudades son: " + ciudades)

console.log("")




console.log("--FASE3--")
console.log("")

var ciudad1 = "Barcelona";
var ciudad2 = "Madrid";
var ciudad3 = "Valencia";
var ciudad4 = "Malaga";
var ciudad5 = "Cadis";
var ciudad6 = "Santander";
var ciudad7 = "Almeria";            // Como te puse en Java, una ciudad extra para las MAYUS

var ciudades2 = new Array();
ciudades2.push(ciudad1);
ciudades2.push(ciudad2);
ciudades2.push(ciudad3);
ciudades2.push(ciudad4);
ciudades2.push(ciudad5);
ciudades2.push(ciudad6);
ciudades2.push(ciudad7);

ciudades2.sort();
var ciudadesModi = ciudades2.join(", ", ciudades2);
var ciudad = ciudadesModi.replace(/a/g, "4").replace(/A/g, "4");

console.log("Las ciudades son: " + ciudad)

console.log("")




console.log("--FASE4--")
console.log("")

var ciudad10 = "Barcelona " + "Madrid " + "Valencia " + "Malaga " + "Cadis " + "Santander";
var ciudades3 = Array.from(ciudad10);
var todas = new Array();

var todas = ciudades3.reverse();

for (i = 0; i < todas.length; i++)

    console.log(todas[i])       // La "mas" correcta

console.log(todas)          // La "menos" correcta



/*
        //- - FOREACH js- -//

ciudades3.forEach(showScreen);

function showScreen(item) {
  console.log(item)
}

*/