document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("redireccion-l");


    boton.addEventListener("click", function () {

        const role = sessionStorage.getItem('role');
        console.log(role);
        if (role) {
            if (role === 'admin') {
                window.location.href = "menu.html";
            } else {
                const resultado = confirm(`Usted es "${role}", NO tiene permiso para administrar el sitio! - ¿Desea cerrar sessión?`);
                if (resultado) {
                    sessionStorage.clear();
                    alert("Sesion cerrada!")
                    window.location.href = "index.html";
                }
            }
        } else {
            const resultado = confirm("Debe loguearse para administrar el sitio!");
            if (resultado) {
                window.location.href = "login.html";
            }

        }
    })
    });

    document.addEventListener("DOMContentLoaded", function () {
        const boton = document.getElementById("redireccion-p");


        boton.addEventListener("click", function () {

            const role = sessionStorage.getItem('role');

            if (role) {
                if (role === 'admin') {
                    window.location.href = "menu.html";
                }
            } else {
                const resultado = confirm("Debe loguearse para administrar el sitio!");
                if (resultado) {
                    window.location.href = "login.html";
                }

            }
        });
    });

//login.html
//admin.html
