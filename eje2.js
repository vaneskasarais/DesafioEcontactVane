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
