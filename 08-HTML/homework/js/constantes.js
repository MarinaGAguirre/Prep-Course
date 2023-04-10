export const PI = Math.PI;

export let usuaria = "Marina";

/* En las Constantes (const, let) y VARIABLS se exportan
x default luego de declararse. O sea en 2 líneas, como
abajo. Primero se asignana, y luego se exportan: */

const password = "jnhfnon"; //Declaración de variable
//export default password;    //Exportación x default


/* No podemos tener 2 cosas exportadas por DEFAULT.
Podemos exportar algo por DEFAULT sólo 1 (una) vez.
Podemos exportar por default funciones declaradas y clases, 
*/


//Sólo las "Funciones declaradas" y "CLASS" se pueden exportar
//x default primero. Ejemplo:

//export default function saludar(){
//  console.log("Hola, estos son Módulos +ES6") //EcmaScript 6
//}

export default function saludar(){
    console.log("Hola, estos son Módulos +ES6"); //EcmaScript 6
  }

//Función Expresada guardada en variables, arrow function
//como abajo NO se pueden exportar x default, 

const hello = ()=> console.log("Hola función expresada");


export class Saludando {
 constructor (){
   console.log("Hola, esta es una Class");
 }
}