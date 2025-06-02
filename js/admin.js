function validateForm() {
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;
    let imagen = document.getElementById("archivo").value

    if (nombre == "") {
        alert("Debe ingresar Nombre");
        return false
    }
    if (direccion == "") {
        alert("Debe ingresar Dirección");
        return false
    }
    if (descripcion == "") {
        alert("Debe ingresar Descripción");
        return false
    }
    if (precio == "") {
        alert("Debe ingresar Precio");
        return false
    }
    else if (precio < 0) {
        alert("El precio no puede ser menor que cero");
        return false
    }
    if (imagen == "" || imagen == "Selecciona la imagen a cargar...") {
        alert("Debe subir una imagen");
        return false
    }

    return true;
}

function showData() {
    let listaSalones;
    if (localStorage.getItem("listaSalones") == null) {
        listaSalones = []
    }
    else {
        listaSalones = JSON.parse(localStorage.getItem("listaSalones"))
    }

    let html = "";
    listaSalones.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.nombre + "</td>";
        html += "<td>" + element.direccion + "</td>";
        html += "<td>" + element.descripcion + "</td>";
        html += "<td><img" + " style='max-width:100%' height='80px'" + " title=" + element.imagen + " src=" + element.imagen + "></td>";
        html += "<td>" + element.precio + "</td>";
        btDelete = '<button onclick ="deleteData(' + index + ')" class="btn btn-danger w-100">Eliminar</button>';
        btEdit = '<button onclick ="updateData(' + index + ')" class="btn btn-warning mt-1 w-100">Editar</button>';
        html += '<td>' + btDelete + btEdit + '</td>'
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData()

function addData() {
    if (validateForm() == true) {
        var nombre = document.getElementById("nombre").value;
        var direccion = document.getElementById("direccion").value;
        var descripcion = document.getElementById("descripcion").value;
        var precio = document.getElementById("precio").value;
        var imagen = document.getElementById("archivo").value;

        let listaSalones;
        if (localStorage.getItem("listaSalones") == null) {
            listaSalones = []
        }
        else {
            listaSalones = JSON.parse(localStorage.getItem("listaSalones"))
        }

        listaSalones.push(
            {
                nombre: nombre,
                direccion: direccion,
                descripcion: descripcion,
                precio: precio,
                imagen: imagen
            });
        localStorage.setItem("listaSalones", JSON.stringify(listaSalones));
        showData()

    }

}

function deleteData(index) {
    let listaSalones;
    if (localStorage.getItem("listaSalones") == null) {
        listaSalones = []
    }
    else {
        listaSalones = JSON.parse(localStorage.getItem("listaSalones"))
    }
    listaSalones.splice(index, 1);
    localStorage.setItem("listaSalones", JSON.stringify(listaSalones));
    showData();
};

function updateData(index) {
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    let listaSalones;
    if (localStorage.getItem("listaSalones") == null) {
        listaSalones = []
    }
    else {
        listaSalones = JSON.parse(localStorage.getItem("listaSalones"))
    }

    document.getElementById("nombre").value = listaSalones[index].nombre;
    document.getElementById("direccion").value = listaSalones[index].direccion;
    document.getElementById("descripcion").value = listaSalones[index].descripcion;
    document.getElementById("precio").value = listaSalones[index].precio;
    document.getElementById("archivo").value = listaSalones[index].archivo;

    document.querySelector("#Update").onclick = function () {
        if (validateForm() == true) {
            listaSalones[index].nombre = document.getElementById("nombre").value;
            listaSalones[index].direccion = document.getElementById("direccion").value;
            listaSalones[index].descripcion = document.getElementById("descripcion").value;
            listaSalones[index].precio = document.getElementById("precio").value;
            listaSalones[index].imagen = document.getElementById("archivo").value;
        }
        localStorage.setItem("listaSalones", JSON.stringify(listaSalones));
        showData();
       /* document.getElementById("nombre").value = "";
        document.getElementById("direccion").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("precio").value = "";*/

        document.getElementById("Submit").style.display = "block";
        document.getElementById("Update").style.display = "none";
    }
};