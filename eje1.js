let nom1;
let largo;

function largoDelNombre(nom1)
{
    if((typeof nom1)!== "string")
    { 
        console.log(`El parámetro recibido es invalido`)
        console.log(typeof nom1);
    }
    else 
    {
        largo = nom1.length;
        if  ((largo)>0  && (largo)<=5)
        {
            console.log(`Es un nombre CORTO. Su largo es de: ${largo}`);
        }
        else
        {

            console.log(`Es un nombre LARGO. Su largo es de: ${largo}`);
        }
        return;
    }
}

largoDelNombre("false"); 





