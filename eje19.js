var objeto ={
    nombre:'maria',
    edad:60,
    altura:1.50,
};
var clave;

function verificarClave(objeto = {}, clave)
{
    for(const value in objeto)
    {
        if (value == clave)
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
console.log(verificarClave(objeto,'edad'));