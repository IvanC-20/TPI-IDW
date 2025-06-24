document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("redireccion-l");
    

    boton.addEventListener("click", function () {

        const datosUsuario = JSON.parse(sessionStorage.getItem('datosUsuario'));
        console.log(datosUsuario);
        if (datosUsuario) {            
            if (datosUsuario.usuario === 'admin') {
                window.location.href = "menu.html";
            }
        } else {
           const resultado = confirm("Debe loguearse para administrar el sitio!");
           if(resultado){
                window.location.href = "login.html";
           }   
            
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("redireccion-p");
    

    boton.addEventListener("click", function () {

        const datosUsuario = JSON.parse(sessionStorage.getItem('datosUsuario'));
        
        if (datosUsuario) {            
            if (datosUsuario.usuario === 'admin') {
                window.location.href = "menu.html";
            }
        } else {
           const resultado = confirm("Debe loguearse para administrar el sitio!");
           if(resultado){
                window.location.href = "login.html";
           }   
            
        }
    });
});

//login.html
//admin.html