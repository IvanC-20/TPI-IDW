const cerrarSesionBtn = document.getElementById('cerrarSesionBtn');
function cerrarSesion(event) {
    sessionStorage.clear();
    window.location.href = 'login.html';

}

if (sessionStorage.getItem('usuario')) {
    alert("Usuario logueado!!");
    window.location.href = "admin.html";
}
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('Password1').value;

    if (usuario === 'admin@admin.com' && pass === '1234') {
        sessionStorage.setItem('usuario', usuario);
        alert("Logueo exitoso!!");
        window.location.href = "admin.html";
    } else {
        alert('Usuario o contraseña incorrectos!');
    }
});


