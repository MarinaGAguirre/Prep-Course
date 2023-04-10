/*Si las VARIABLES que exportas son "normales" se emplea
la DESTRUCTURACIÓN entre {} para mandarlas a llamar:
La función "saludar" la exportamos por defecto, así que
sale de la "destructuración" y la llamamos de forma
independiente, por afuera de las {}. */

import saludar, {Saludando, PI, usuaria} from "./constantes.js";
import {sumar, restar} from"./aritmetica.js";
//import {aritmetica} from"./aritmetica.js"; 

//Para no escribir "aritmética, podemos darle un "alias":
import {aritmetica as calculo} from"./aritmetica.js"; 


console.log("Archivo modulos.js")
console.log(Saludando, PI, usuaria);
console.log(sumar(6,5));
console.log(restar(7,3));
//console.log(aritmetica.sumar1(6,4));
console.log(calculo.sumar1(6,4));
console.log(calculo.restar1(9,4));
saludar();

let saludo = new Saludando();
saludo; //Sólo ejecutamos la variable "saludo". No es necesario colocar console.log,
       // porque está el constructor quien lanza el console.log.