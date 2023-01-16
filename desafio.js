/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */
//function largoDelNombre(nombre = "") {}
let nom1;
let largo;

function largoDelNombre(nom1)
{
    if((typeof nom1)!== "string")
    { 
        console.log(`El parámetro recibido es invalido`)
        console.log(typeof nom1);
    }
    else 
    {
        largo = nom1.length;
        if  ((largo)>0  && (largo)<=5)
        {
            console.log(`Es un nombre CORTO. Su largo es de: ${largo}`);
        }
        else
        {

            console.log(`Es un nombre LARGO. Su largo es de: ${largo}`);
        }
        return;
    }
}

largoDelNombre("false"); 

//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

//function contarTipoNumber(arreglo = []) {}
var arreglo;
var total=0;

function contarTipoNumber(arreglo)
{
    for(let i=0; i<arreglo.length; i++) 
    {
        if(typeof arreglo[i] =="number")
        {
            total=total+1; 
        }
    
    }
    return total;
}
contarTipoNumber(["Vane",1,2,4,5,false,"rosa",10,67]); 
console.log(`Hay ${total} de tipo numérico`);

//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

//function datosPersona(persona = {}) {}
const persona = {nombre:'maria', edad:50, altura:1.88};
const {nombre,edad,altura} = persona;

function datosPersona({nombre,edad,altura}) 
{
 console.log(`Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura}`);
return;
}

datosPersona(persona);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

//function obtenerCantidadDePares(numero1, numero2) {}

var inicio;
var fin;
var totalPares=0;

function obtenerCantidadDePares(inicio, fin) 
{
    for(let i=inicio; i<fin; i++) 
    {
        if(i % 2 == 0)
        {
            totalPares=totalPares+1; 
        }
    
    }  
  return totalPares;
}
console.log('La cantidad de números pares obtenido fue de:'+ obtenerCantidadDePares(10,15));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

//function obtenerCantidadDeSedes(econtact = {}) {}
var total=0;
const objetoFijo = {
    empresa: "E-Contact",
    datos: 
    {
      empleados: 100,
      direccion: 
      {
        calle: "Calle Córdoba",
        numero: 476,
        piso: 3,
      },
      sectores: 
      [
        "Contabilidad",
        "Finanzas",
        "Informática",
        "Atención al público",
      ],
      sedes: 
      {
        Chile: { telefono: 56227566262, empleados: 35 },
        Peru: { telefono: 5116358614, empleados: 25 },
        EEUU: { telefono: 17864978777, empleados: 43 },
        Ecuador: { telefono: null, empleados: 19 },
        Colombia: { telefono: 3178952449, empleados: 28 },
      },
    },
  };

  function obtenerCantidadDeSedes() 
  {
    for(const key1 in objetoFijo.datos.sedes) 
    {
        console.log(key1);
        total = total+1; 
        
    }
    return total;
  };
  console.log('e-Contact tiene ' + obtenerCantidadDeSedes() + ' sedes');
//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */

//function obtenerTelefonoPeru(econtact = {}) {}
const objetoFijo = {
  empresa: "E-Contact",
  datos: 
  {
    empleados: 100,
    direccion: 
    {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: 
    [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: 
    {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

const {empresa,datos:{sedes:{Peru:{telefono}}}} = objetoFijo;

function obtenerTelefonoPeru() 
{
     if(telefono != null)
    {          
        return telefono;
    }
    else
    { 
        return `Perú no tiene asignado un teléfono`; 
    }         
};
console.log(obtenerTelefonoPeru());
//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

//function obtenerPaisesConTelefono(econtact = {}) {}
const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

function obtenerPaisesConTelefono(econtact = {}) {
  var total = 0;
  for(sedes in econtact.datos.sedes)
  {
      var obj = econtact.datos.sedes[sedes];
      console.log (obj.telefono);
      if (obj.telefono !== null) {  
      total++;
    }
  }
  return total;
}
console.log(`La cantidad de sedes que tienen número telefónico son:` + obtenerPaisesConTelefono(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

//function calculoMatematico(operacion, numero1, numero2) {}
var operacion;
var numero1;
var numero2; 
var resultado;

function calculoMatematico(operacion, numero1, numero2) 
{
 switch (operacion) 
 {
   case "+":
       resultado = numero1+numero2;
       return resultado;
       break;
   case "-":
       resultado = numero1-numero2;
       return resultado;
       break;
   case "*":
       resultado = numero1*numero2;
       return resultado;
       break;
   case "/":
       resultado = numero1/numero2;
       return resultado;
       break;
   default:
       resultado="Operación no permitida"; 
       break;
 }  
}
calculoMatematico("*", 10, 2);
console.log(resultado);
//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

//function cargarArreglo(numero) {}
var numero;
let base;
const arreglo=[];

function cargarArreglo(numero) 
{
    base=numero;
    if(base>0)
    {
        while(numero <= (base*2))
        {
            arreglo.push(numero);
            numero +=1; 
        }
        return arreglo;
    }
    else
    {
        return `El número ingresado debe ser mayor a 0`;
    }
}
console.log(cargarArreglo(10)); 
//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

//function divisiblesPorCinco(numeros = []) {}
var numeros=[];
var cont=0;

function divisiblesPorCinco(numeros = [])
{
    for(let i=0; i<numeros.length; i++) 
    {
        if(numeros[i] % 5 == 0)
        {
            console.log(numeros[i]);
            cont++; 
        }

    }
    return cont; 
};
console.log(`hay `+divisiblesPorCinco([10,5,7,25,100])+ ` numeros divisibles entre 5`); 
//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

//function sumatoria(numeros = []) {}

var numeros=[];
var suma=0;

function sumatoria(numeros = [])
{
    for(let i=0; i<numeros.length; i++) 
    {
        
        suma = suma + numeros[i] ;     

    }
    return suma; 
};
console.log(`la sumatoria es ` + sumatoria([100,50,100,100])); 
//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

//function verificarCantidadEmpleados(econtact = {}) {}


const objetoFijo = {
  empresa: "E-Contact",
  datos: 
  {
    empleados: 100,
    direccion: 
    {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: 
    [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: 
    {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};


function verificarCantidadEmpleados(econtact = {}) {
  var suma = 0;
  for(sedes in econtact.datos.sedes)
  {
      var obj = econtact.datos.sedes[sedes];
      console.log (obj.empleados);
      suma = suma + obj.empleados; 
  }
  if (suma === econtact.datos.empleados) {return `TRUE`;}
  else {return `FALSE`;}
  
}
console.log(`La cantidad de sedes que tienen número telefónico son:` + verificarCantidadEmpleados(objetoFijo));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

//function calcularCuadrados(arreglo = []) {}
const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const arregloNew = []; 

function calcularCuadrados(arreglo = []) 
{
    for(let i=0; i<arreglo.length; i++) 
    {
        arregloNew.push(Math.pow(arreglo[i], 2)); 
    }
    return arregloNew;
}
console.log(`el nuevo antiguo es `+ arregloFijo);
console.log(`el nuevo arreglo es `+ calcularCuadrados(arregloFijo)); 
//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

//function validarArreglo(numeros = []) {}

var numeros=[10,10,10,10,100,1,1,1,1];
var suma=0;

function validarArreglo(numeros = []) 
{
    for(let i=0; i<numeros.length; i++) 
    {
        suma = suma + numeros[i] ;     
    }
    if (suma>100){ return `TRUE`;}
    else{return `FALSE`}
   
}

if(numeros.length >= 6)
{
    console.log(`La sumatoria es mayor que 100?=` + validarArreglo(numeros));
}
else
{
    console.log(`NO TIENE LOS 6 NUMEROS FALSE`); 
}
//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

//function validarNombre(nombres = [], nombre) {}

const nombres=[];
var nombre;
var resp;

function validarNombre(nombres = [], nombre) 
{
    for(const value in nombres)
    {
        //console.log(nombre);
        //console.log(nombres[value]);
        if (nombres[value] == nombre)
        {
            resp = `TRUE`;
            return resp;
        }
        else
        {
            resp =`FALSE`;
        }
    }
return resp; 
}
console.log(validarNombre(['vane','andres','Luis'],'Luis'));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

//function devolverPosicion(numeros = [], numero) {}

var numeros=[];
var numero; 
var resp;

function devolverPosicion(numeros = [], numero) 
{
    for(const value in numeros)
    {
        //console.log(nombre);
        //console.log(nombres[value]);
        if (numeros[value] == numero)
        {
            resp = value;
            return resp;
        }
        else
        {
            resp =`FALSE`;
        }
    }
return resp; 
}
console.log(devolverPosicion([10,1,4,7,8,9,],8));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

//function verificarSector(econtact = {}, sector) {}

const objetoFijo = {
  empresa: "E-Contact",
  datos: 
  {
    empleados: 100,
    direccion: 
    {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: 
    [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: 
    {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};


function verificarSector(econtact = {}, sector)
{
  for(const value in econtact.datos.sectores)
  {
      var obj = econtact.datos.sectores[value];
      if (obj == sector)
      {
          resp = `TRUE`;
          return resp;
      }
      else
      {
          resp =`FALSE`;
      }
  }
return resp; 


}
console.log(verificarSector(objetoFijo,"Atención al público"));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

//function verificarCantidadEmpleados(econtact = {}, cantidad) {}
const objetoFijo = {
  empresa: "E-Contact",
  datos: 
  {
    empleados: 100,
    direccion: 
    {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: 
    [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: 
    {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

function verificarCantidadEmpleadosSedes(econtact = {}, cantidad) 
{
  var suma=0;
  for(sedes in econtact.datos.sedes)
  {
      var obj = econtact.datos.sedes[sedes];
      if (obj.empleados < cantidad)
      {
          suma +=1;
      } 
  }
  return suma;
}
console.log(`Las sedes con esa característica son: ` + verificarCantidadEmpleadosSedes(objetoFijo,50));
//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

//function verificarClave(objeto = {}, clave) {}
var objeto ={
  nombre:'maria',
  edad:60,
  altura:1.50,
};
var clave;

function verificarClave(objeto = {}, clave)
{
  for(const value in objeto)
  {
      if (value == clave)
      {
          resp = `TRUE`;
          return resp;
      }
      else
      {
          resp =`FALSE`;
      }
  }
return resp; 
}
console.log(verificarClave(objeto,'edad'));

//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

//function quitarParteDecimal(arregloNumerosReales = []) {}
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];
const arregloNew = []; 

function quitarParteDecimal(arreglo = []) 
{
    for(let i=0; i<arreglo.length; i++) 
    {
        arregloNew.push(Math.trunc(arreglo[i])); 
    }
    return arregloNew;
}
console.log(`el nuevo antiguo es `+ numerosReales);
console.log(`el nuevo arreglo es `+ quitarParteDecimal(numerosReales)); 
