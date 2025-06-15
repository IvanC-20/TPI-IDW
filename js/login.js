import {login} from './auth.js';

/*const cerrarSesionBtn = document.getElementById('cerrarSesionBtn');
function cerrarSesion(event) {
    sessionStorage.clear();
    window.location.href = 'index.html';

}*/

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
            password: pass
        };
        sessionStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));
        alert("Logueo exitoso!!");
        window.location.href = "admin.html";
        
    } else {
        alert('Usuario o contraseña incorrectos!');
    }
});


