/* Operadores aritméticos */
let x = 1;
let y = 2;

const resultadosA = {
    "suma": x + y,
    "resta": x - y ,
    "multiplicacion": x * y ,
    "division": x / y ,
    "modulo": x % y ,
    "exponenciacion": x ** y ,
    "incremento": x++ ,
    "decremento": y--
}
console.log("Operadores aritmeticos")
console.table(resultadosA)


/* Operadores de asignación */
x = 3;
const resultadosAsi = {
     asignacionSimple : x = 2,
     asignacionSuma : x += 2,
     asignacionResta : x -= 2,
     asignacionMultiplicacion : x *= 2,
     asignacionDivision : x /= 2,
     asignacionModulo : x %= 5,
     asignacionExponente : x **= 3
}

console.log("Operadores de asignacion")
console.table(resultadosAsi)


/* Operadores de comparación */
x = 12;
const resultadosComp = {
     comparacionDebil : x == 2,
     desigualdad : x != 2,
     estrictamenteIgual : x === 2,
     estrictamenteDistinto : x !== 2,
     mayorQue : x > 2,
     menorQue : x < 2,
     mayorOIgualQue : x >= 3,
     menorOIgualQue: x <= 3
}

console.log("Operadores de comparacion")
console.table(resultadosComp)


/* Operadores lógicos */
x = true;
y = false;
const resultadosOperadoresLogicos = {
    andLogico : x && y,
    orlogico : x || y,
    notLogico : !x,
}
console.log("Operadores Logicos")
console.table(resultadosOperadoresLogicos)

x = 1
//Suponiendo que x es 0, lo podemos pasar a true, o null
    console.log("conversionYnegacion" , !!!x)

    x  = 0b11101 //el prefijo es para asignar un valor binario
    y = 0b1111001
/* Operadores para trabajar Con numeros binarios o bits  */
const resultadosBitABit = {
    And : (x & y).toString(2),
    Or : (x | y).toString(2),
    Xor : (x ^ y).toString(2),
    not : (~x).toString(2),
    DespIzq : (x<<1).toString(2),
    desplDerecha : (x>>1).toString(2),
    despSinSigno : (x >>> 1).toString(2)
}
console.log("Operadores bit a bit o bitwise")
console.table(resultadosBitABit)


/* Operador de comparacion "ternario" */
x = "1";
console.log(x == 1 ? "Si" : "No")


