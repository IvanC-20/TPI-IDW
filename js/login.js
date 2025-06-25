import { login } from './auth.js';

    if (sessionStorage.getItem('usuario')) {
        alert("Usuario logueado!!");
        window.location.href = "admin.html";
    }

    document.getElementById('loginForm').addEventListener('submit', async function (event) {
        event.preventDefault();

        const usuario = document.getElementById('usuario').value;
        const pass = document.getElementById('Password1').value;

        const usuarioValidado = await login(usuario, pass);
        
        if (usuarioValidado) {
            const datosUsuario = {
                usuario: usuario,
                password: pass,
            };
            
            sessionStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));
            const id = usuarioValidado.id;
            fetch(`https://dummyjson.com/users/${id}`)
                .then(res => res.json())
                .then(usuario => {
                    if(usuario.role === "admin"){
                        alert(`Logueo exitoso Admin! - Bienvenido: ${datosUsuario.usuario}.`);
                        window.location.href = "menu.html";
                    }else{
                        alert(`Logueo exitoso User! - Bienvenido: ${datosUsuario.usuario}.`);
                        window.location.href = "index.html";
                    } 
            });
            
        } else {
            alert('Usuario o contraseña incorrectos!');
        }
    });


