export async function login(usuarioParam, passParam) {
    try {

        const response = await fetch('https://dummyjson.com/auth/login',{
            method: 'POST',
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username: usuarioParam,
                password: passParam
            })
        });
        if(!response.ok){
            console.error("Credenciales Incorrectas");
            return false;
        }
        
        const data = await response.json();
        console.log('data',data);
        // const userOk = usuarios.find(u => u.usuario === usuarioParam && u.pass === passParam);
        // console.log('userOk: ' + JSON.stringify(userOk));
        // return userOk !== undefined;
        return data
    } catch (error) {
        console.log("Error en la solicitud");
        return false;

    }

};

