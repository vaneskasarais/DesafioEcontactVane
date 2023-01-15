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