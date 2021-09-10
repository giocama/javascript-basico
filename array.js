/*function mayor(){
    var numeros=[];
    numeros[0]=prompt('Teclea un digito');
    numeros[1]=prompt('Teclea un digito');
    numeros[2]=prompt('Teclea un digito');
    console.log(numeros);
    numeros.sort(function(a, b){return a - b});//ordenar
    console.log(numeros);
    numeros.reverse(); //mayor a menor
    console.log(numeros);
}
mayor();
*/


//1.- Crear un programa que solicite al usuario su nombre por prompt y devuelva el siguiente saludo: 
//"Hola nombre, saludos desde javascript". 
//Nota: El saludo puede ser mostrado por consola o por html.

/*var nombre = prompt ('Cual es tu nombre?');
document.write ('Hola '  + nombre.toUpperCase() +  ' Saludos desde JS');
*/

//2.- Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por 
//parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
//Nota: El resultado puede ser mostrado por consola o por html.


var numero = parseInt(prompt ('digita un numero'));
var numero1 = parseInt(prompt ('digita un numero'));

function suma(numero, numero2) {    
        
        var resultado = numero + numero2;
        document.write(resultado + '</br>');
    }

    suma(numero, numero1);    


    function resta(numero, numero2) {    
        
        var resultado = numero - numero2;
        document.write(resultado + '</br>');
    }

    resta(numero, numero1);        

    function multiplicación(numero, numero2) {    
        
        var resultado = numero * numero2;
        document.write(resultado + '</br>');
    }

    multiplicación(numero, numero1);

    function división(numero, numero2) {    
        
        var resultado = numero / numero2;
        document.write(resultado + '</br>');
    }

    división(numero, numero1);                