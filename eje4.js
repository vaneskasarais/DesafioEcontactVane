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