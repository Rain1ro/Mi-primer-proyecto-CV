async  function consulta () { 
    let resultado = await fetch('https://randomuser.me/api/?gender=female')
      .then(response =>  response.json())
      .then (data => data)
      console.log (resultado);
  
      const persona = {titulo:resultado.results[0].name.title ,
       nombre:resultado.results[0].name.first,
       apellido:resultado.results[0].name.last};
  
       let nomCompleto = persona.titulo +". " + persona.apellido + ", " +
       persona.nombre;
       console.log(nomCompleto);
  
  
       const domicilio ={ pais: resultado.results[0].location.country, 
        calle:resultado.results[0].location.street.name,
        numero:resultado.results[0].location.street.number};
  
        let direccion = domicilio.pais + ". " + domicilio.calle + " N°" + domicilio.numero; 
      console.log(direccion);
      
      ''
      const telefono = { numeroTel: resultado.results[0].phone, numeroCel: resultado.results[0].cell}
      let numTelefonos = 
      "Telefono Fijo N° " + telefono.numeroTel 
      +" y Telefono Celular N° " + telefono.numeroCel; 
      console.log(numTelefonos);
  
     const eMail = { correo: resultado.results[0].email}
     let correoElectronico = "Correo Electronico:" + eMail.correo;
     console.log(correoElectronico)
  
     let formacion = 
      "Formacion Inicial: Grandview School, "  + 
      "Formacion Secundaria: Marie Curie Technical School, "+
      "Formacion Academica: Sunny Hills School for Boys, "+
      "Silverleaf Charter School, "+
      "Einstein Grammar School";
      
     console.log(formacion)
  
   let exLaboral = "Sin experiencia ";
  console.log(exLaboral)
  
  document.getElementById("nombre").onclick = function () {      
   document.getElementById("miCv").textContent = nomCompleto;
  
  }
   document.getElementById("direccion").onclick = function () {     
    document.getElementById("emergente4").textContent = direccion;
        }
  document.getElementById("telefono").onclick = function () {      
   document.getElementById("emergente3").textContent = numTelefonos;
  }
  document.getElementById("mail").onclick = function () {      
    document.getElementById("emergente2").textContent = correoElectronico;
    }
  
    document.getElementById("escuela").onclick = function () {      
      document.getElementById("emergente1").textContent = formacion
      
      }
  
  document.getElementById("experiencia").onclick = function () {      
    document.getElementById("emergente").textContent = exLaboral;
    }
  
  }
    consulta();