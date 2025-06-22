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
            <td> ${usuario.userName} </td>
            <td> ${usuario.email}  </td>
            <td> ${usuario.phone} + </td>
            `;
                tabla.appendChild(fila);
                //document.querySelector("#crudTable tbody").innerHTML = html;
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