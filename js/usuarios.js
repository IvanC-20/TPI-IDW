document.addEventListener("DOMContentLoaded", async () => {
    const tabla = document.querySelector('#usersTable tbody');
    try {
        const response = await fetch('https://dummyjson.com/users');

        if (response.ok) {
            const data = await response.json();
            const usuarios = data.users;

            usuarios.forEach((usuario) => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
            
            <td> ${usuario.firstName}  ${usuario.lastName} </td>
            <td> ${usuario.username} </td>
            <td> ${usuario.email}  </td>
            <td> ${usuario.phone} + </td>
            `;
                tabla.appendChild(fila);
                
            });
        }else{
            console.error(response.status);
            throw Error("Error al consultar!")
        }
    } catch (error) {
        console.error("error", error);
        alert("Error con la api de usuarios!");

    };

});

document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("cerrarSesionBtn");

    boton.addEventListener("click", function () {
        const resultado = confirm("¿Seguro que desea cerrar sesion?");
           if(resultado){
                sessionStorage.clear();
                window.location.href = "index.html";
           }   
        
    });
});