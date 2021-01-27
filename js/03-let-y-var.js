'use strict'

//  Pruebas con var y let, la diferencia es el alcance dentro de los bloques de codigo

//  Prueba con var
var numero = 40;    //  Valor 40
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);    //  Valor 50
}

console.log(numero);    //  Valor 50


//  Prueba con let
var texto = "Curso de JS";
console.log(texto); //  Valor JS

if(true){
    let texto =  "Curso de Laravel 5";
    console.log(texto); //  Valor Laravel 5
}

console.log(texto); //  Valor JS