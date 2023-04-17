const form = document.getElementById ('form') as HTMLFormElement;
const btnGuardar = document.getElementById ('btn-guardar') as HTMLFormElement;

btnGuardar.addEventListener ('click', (e) =>{
        e.preventDefault();
        console.log("Ingreso al formulario");
    
        const tipoDocumento = document.getElementById('tipoDocumento') as HTMLFormElement;
        const numeroDocumento = document.getElementById('numeroDocumento') as HTMLFormElement;
        const nombre = document.getElementById('nombre') as HTMLFormElement;
        const apellido = document.getElementById('apellido') as HTMLFormElement;
        const celular = document.getElementById('celular') as HTMLFormElement;
        const email = document.getElementById('coreo') as HTMLFormElement;
        const linkedin = document.getElementById('usuarioLinkedin') as HTMLFormElement;
        const github = document.getElementById('usuarioGit') as HTMLFormElement;
    
        console.log(tipoDocumento.value);
})

