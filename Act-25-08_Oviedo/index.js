let calificacion = 0;
do {
    calificacion = parseInt(prompt("Ingrese su calificación: entre 1% y 100%"))
}
while(calificacion <=0 || calificacion >101 ||isNaN(calificacion))
    

calificacion = (calificacion * 0.1).toFixed(2)

if(calificacion >= 7.5){
    alert(`Usted, con su calificacion de ${calificacion} , está aprobado directo!`)
}
else if (calificacion < 7.5 && calificacion >=4.0){
    alert(`Usted, con su calificacion de ${calificacion}, está regular!`)
}
else {
    alert(`Lo sentimos, usted con su ${calificacion}, está desaprobado`)
}

const div = document.getElementById("containerCondicionales");
div.innerText += `Calificacion = ${calificacion}`



/* Operadores: */

const EDAD = 20;

const ACCESO = ( EDAD >= 18 && EDAD <= 30);

alert(ACCESO)

const divOperadores = document.getElementById("containerOperadores");
divOperadores.innerText += `tiene acceso= ${ACCESO}`


let edad = 18;
let dinero = false

if (edad >= 18 && dinero){
    console.log("Puede ingresar")
}
else{
console.log("No Puede ingresar")
}


for(let y = 1; y <=5 ; y++){
    console.log(y)
}

let i = 0
do{
    console.log(`El numero es: ${i}`)
    i++
}
while(i<5)


i = 0
while(i<=5){
    console.log(`El numero es: ${i}`)
    if (i === 3){
        break
    }
    i++
}
