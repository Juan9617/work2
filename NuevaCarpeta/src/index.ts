const form = document.getElementById ('form') as HTMLFormElement;
const btnGuardar = document.getElementById ('btn-guardar') as HTMLFormElement;

btnGuardar.addEventListener ('click', (e) =>{
        e.preventDefault();
        console.log("Ingreso al formulario");
    
        const tipoIdentificacion = document.getElementById('tipoIdentificacion') as HTMLFormElement;
        const numeroIdentificacion = document.getElementById('numeroIdentificacion') as HTMLFormElement;
        const nombres = document.getElementById('nombres') as HTMLFormElement;
        const apellidos = document.getElementById('apellidos') as HTMLFormElement;
        const celular = document.getElementById('celular') as HTMLFormElement;
        const email = document.getElementById('coreo') as HTMLFormElement;
        const linkedin = document.getElementById('usuarioLinkedin') as HTMLFormElement;
        const github = document.getElementById('usuarioGit') as HTMLFormElement;
    
        console.log(tipoIdentificacion.value);
})

let raw = JSON.stringify({
        "tipoIdentificacion": tipoIdentificacion.value,
        "numeroIdentificacion": numeroIdentificacion.value,
        "nombres": nombres.value,
        "apellidos": apellidos.value,
        "celular": celular.value,
        "correo": email.value,
        "linkedin": linkedin.value,
        "github": github.value,
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      //fetch("https://apiestudiantes.maosystems.dev/estudiantes", requestOptions)//
        //.then(response => response.text())//
        //.then(result => console.log(result))//
        //.catch(error => console.log('error', error));//
      

       