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