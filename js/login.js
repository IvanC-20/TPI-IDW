if (sessionStorage.getItem('usuario')) {
    alert("Usuario logueado!!");
    window.location.href = "altaSalon.html";
}
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('Password1').value;

    if (usuario === 'admin@admin.com' && pass === '1234') {
        sessionStorage.setItem('usuario', usuario);
        alert("Logueo exitoso!!");
        window.location.href = "altaSalon.html";
    } else {
        alert('Usuario o contraseña incorrectos!');
    }
});