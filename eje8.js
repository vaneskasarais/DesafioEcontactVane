 var operacion;
 var numero1;
 var numero2; 
 var resultado;

function calculoMatematico(operacion, numero1, numero2) 
{
  switch (operacion) 
  {
    case "+":
        resultado = numero1+numero2;
        return resultado;
        break;
    case "-":
        resultado = numero1-numero2;
        return resultado;
        break;
    case "*":
        resultado = numero1*numero2;
        return resultado;
        break;
    case "/":
        resultado = numero1/numero2;
        return resultado;
        break;
    default:
        resultado="Operación no permitida"; 
        break;
  }  
}
calculoMatematico("*", 10, 2);
console.log(resultado);