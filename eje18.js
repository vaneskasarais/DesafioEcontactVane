const objetoFijo = {
    empresa: "E-Contact",
    datos: 
    {
      empleados: 100,
      direccion: 
      {
        calle: "Calle Córdoba",
        numero: 476,
        piso: 3,
      },
      sectores: 
      [
        "Contabilidad",
        "Finanzas",
        "Informática",
        "Atención al público",
      ],
      sedes: 
      {
        Chile: { telefono: 56227566262, empleados: 35 },
        Peru: { telefono: 5116358614, empleados: 25 },
        EEUU: { telefono: 17864978777, empleados: 43 },
        Ecuador: { telefono: null, empleados: 19 },
        Colombia: { telefono: 3178952449, empleados: 28 },
      },
    },
  };

  function verificarCantidadEmpleadosSedes(econtact = {}, cantidad) 
  {
    var suma=0;
    for(sedes in econtact.datos.sedes)
    {
        var obj = econtact.datos.sedes[sedes];
        if (obj.empleados < cantidad)
        {
            suma +=1;
        } 
    }
    return suma;
  }
  console.log(`Las sedes con esa característica son: ` + verificarCantidadEmpleadosSedes(objetoFijo,50));