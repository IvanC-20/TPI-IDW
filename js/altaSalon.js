document.addEventListener('DOMContentLoaded', () => {

    if (!sessionStorage.getItem('usuario')){
        alert("Debe loguearse!");
        window.location.href = "login.html";
        return;
    }

    const salir = document.getElementById('btnSalir');
    if (salir) {
        salir.addEventListener('click', () => {
            sessionStorage.clear();
            window.location.href = 'login.html';
        });
    }

    const form = document.getElementById('salonForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nombre = document.getElementById('nombreSalon').value;
        const direccion = document.getElementById('direccionSalon').value;
        const descripcion = document.getElementById('descripcionSalon').value;

        alert(`El nuevo salón tiene los siguientes atributos nombre: ${nombre}, direccion: ${direccion}, descripción: ${descripcion}.`);

        this.reset();

    });
});