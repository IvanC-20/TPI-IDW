export async function login(usuarioParam, passParam) {
    try {
        const response = await fetch('../utils/users.json');
        const usuarios = await response.json();

        const userOk = usuarios.find(u => u.usuario === usuarioParam && u.pass === passParam);
        console.log('userOk: ' + JSON.stringify(userOk));
        return userOk !== undefined;
    } catch (error) {
        console.log("Error en la solicitud");
        return false;

    }

};

