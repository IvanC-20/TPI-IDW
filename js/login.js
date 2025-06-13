import {login} from './auth.js';

/*const cerrarSesionBtn = document.getElementById('cerrarSesionBtn');
function cerrarSesion(event) {
    sessionStorage.clear();
    window.location.href = 'login.html';

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
        sessionStorage.setItem('usuario', usuario);
        alert("Logueo exitoso!!");
        window.location.href = "admin.html";
        
    } else {
        alert('Usuario o contraseña incorrectos!');
    }
});


