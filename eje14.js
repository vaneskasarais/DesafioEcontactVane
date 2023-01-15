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

 