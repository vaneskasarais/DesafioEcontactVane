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