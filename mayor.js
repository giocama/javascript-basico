/*var edad = prompt('Cual es tu edad?');

if( edad >= 18 && edad <= 60) {    
    document.write('Eres mayor de edad puedes acceder ');
} else {    
    document.write('No puedes acceder');

}*/

/*var numero1;
var numero2;

var numero1 = parseInt(prompt('ingresa un numero?'));
var numero2 = parseInt(prompt('ingresa un numero?'));

if( numero1 >= numero2) {    
    document.write('El numero mayor es: '(numero1)' ');
} 
else
{    
        document.write('El numero mayor es: '(numero2)' ');

}*/

var numero1;
var numero2;

	numero1=parseInt(prompt("Ingrese un numero:",""));
	numero2=parseInt(prompt("Ingrese un numero:",""));

	if(numero1 >= numero2)
	{
        //imprime numero mayor
	document.write("El numero mayor es: " + numero1 );
	}
	else
	{
       //imprime numero mayor
	document.write("El numero mayor es: " + numero2 );
	}