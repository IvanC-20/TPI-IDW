export async function login(usuarioParam, passParam) {
    try {

        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: usuarioParam,
                password: passParam,

            })
        });
        if (!response.ok) {
            console.error("Credenciales inválidas!");
            return false;
        }

        const data = await response.json();
        console.log(data);
        return data;

    } catch (error) {
        console.log("Error en la solicitud");
        return false;

    }

};
