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