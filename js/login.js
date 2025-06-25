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
        sessionStorage.setItem('usuario', usuarioValidado.username);        
        sessionStorage.setItem('Apellido', usuarioValidado.lastName);
        sessionStorage.setItem('id', usuarioValidado.id);
        const id = usuarioValidado.id;

        //obtengo el rol
       const role = await obtenerRole(id);
       //lo persisto en el sessioStorage
       sessionStorage.setItem('role', role);

        if (role === "admin") {
            alert(`Logueo exitoso!! - Bienvenido: ${usuarioValidado.username}.`);
            sessionStorage.setItem('token', usuarioValidado.accessToken);
            window.location.href = "menu.html";
        } else {
            alert(`Logueo exitoso!! - Bienvenido: ${usuarioValidado.username}.`);
            window.location.href = "index.html";
        }
    } else {
        alert('Usuario o contraseña incorrectos!');
    }
});

async function obtenerRole(id) {
  try {
    const response = await fetch('https://dummyjson.com/users/' + id);

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const datosUsuario = await response.json();
    console.log("Role: ", datosUsuario.role);
    return datosUsuario.role; 
  } catch (error) {
    console.error('Hubo un problema al obtener los datos del usuario:', error);
    return null; 
  }
}

/*
datos:
"username": "emilys",
"password": "emilyspass",
"role": "admin"
#########################
"username": "oliviaw",
"password": "oliviawpass",
"role": "moderator"
*/