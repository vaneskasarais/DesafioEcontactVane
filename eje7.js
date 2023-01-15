const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

function obtenerPaisesConTelefono(econtact = {}) {
  var total = 0;
  for(sedes in econtact.datos.sedes)
  {
      var obj = econtact.datos.sedes[sedes];
      console.log (obj.telefono);
      if (obj.telefono !== null) {  
      total++;
    }
  }
  return total;
}
console.log(`La cantidad de sedes que tienen número telefónico son:` + obtenerPaisesConTelefono(objetoFijo));
