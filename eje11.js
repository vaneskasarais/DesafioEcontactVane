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