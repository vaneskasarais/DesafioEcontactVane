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
