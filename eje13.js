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