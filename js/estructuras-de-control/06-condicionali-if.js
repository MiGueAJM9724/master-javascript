'use strict'

/*
    Condicional if
    si A es (igual, distinto de) a B entonces has algo
*/
var edad1 = 30;
var edad2 = 12;
if(edad1 > edad2){
    console.log("Edad1 es mayor que edad2");
}else{
    console.log("edad2 es mayor que edad1");
}

var edad = 18;
var nombre = 'MIGUEL ANGEL';
/*
    Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto:!=
*/

if(edad >= 18){
    //  Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es MAYOR de edad");
    if(edad <= 33){
        console.log("Todavia eres millenial");
    }else if(edad >= 70){
        console.log("Eres anciano");
    }else{
        console.log("Ya no eres millenial");
    }
}else{
    //  Es menor de edad
    console.log(nombre + " tiene" + edad + " años, es MENOR  de edad");
}

/*
    Operadores logicos
    AND: &&
    OR: ||
    Negación: !
*/

//  Negación
var year = 2021;
if(year != 2012){
    console.log("El año no es 2012, realmente es: " + year);
}

//  AND
if(year >= 2000 && year <= 2021 && year !=2018){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR
if(year == 2011 || year == 2021){
    console.log("El año acaba en 1");
}