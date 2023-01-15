const persona = {nombre:'maria', edad:50, altura:1.88};
const {nombre,edad,altura} = persona;

function datosPersona({nombre,edad,altura}) 
{
 console.log(`Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura}`);
return;
}

datosPersona(persona);