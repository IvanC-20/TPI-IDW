let servicioEditando = null;

function validateServicio() {
  const id = document.getElementById("idServicio").value.trim();
  const descripcion = document.getElementById("descripcionServicio").value.trim();
  const valor = document.getElementById("valorServicio").value.trim();

  if (id === "") {
    alert("Debe ingresar ID");
    return false;
  }
  if (descripcion === "") {
    alert("Debe ingresar Descripción");
    return false;
  }
  if (valor === "") {
    alert("Debe ingresar Valor");
    return false;
  } else if (Number(valor) < 0) {
    alert("El valor no puede ser menor que cero");
    return false;
  }

  return true;
}

function guardarServicio() {
  if (!validateServicio()) return;

  const id = document.getElementById("idServicio").value.trim();
  const descripcion = document.getElementById("descripcionServicio").value.trim();
  const valor = document.getElementById("valorServicio").value.trim();

  let listaServicios = JSON.parse(localStorage.getItem("listaServicios")) || [];

  if (servicioEditando !== null) {
    listaServicios[servicioEditando] = { id, descripcion, valor };
    servicioEditando = null;
    document.getElementById("Submit").style.display = "block";
    document.getElementById("Update").style.display = "none";
  } else {
    listaServicios.push({ id, descripcion, valor });
  }

  localStorage.setItem("listaServicios", JSON.stringify(listaServicios));
  mostrarServicios();
  document.getElementById("formServicio").reset();
}

function mostrarServicios() {
  let listaServicios = JSON.parse(localStorage.getItem("listaServicios")) || [];
  const tbody = document.querySelector("#crudServicios tbody");
  tbody.innerHTML = "";

  listaServicios.forEach((servicio, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${servicio.id}</td>
      <td>${servicio.descripcion}</td>
      <td>${servicio.valor}</td>
      <td>
        <button type="button" class="btn btn-warning w-100 mb-1" onclick="editarServicio(${index})">Editar</button>
        <button type="button" class="btn btn-danger w-100" onclick="eliminarServicio(${index})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(fila);
  });
}

function eliminarServicio(index) {
  let listaServicios = JSON.parse(localStorage.getItem("listaServicios")) || [];
  listaServicios.splice(index, 1);
  localStorage.setItem("listaServicios", JSON.stringify(listaServicios));
  mostrarServicios();
}

function editarServicio(index) {
  let listaServicios = JSON.parse(localStorage.getItem("listaServicios")) || [];
  const servicio = listaServicios[index];

  document.getElementById("idServicio").value = servicio.id;
  document.getElementById("descripcionServicio").value = servicio.descripcion;
  document.getElementById("valorServicio").value = servicio.valor;

  servicioEditando = index;
  document.getElementById("Submit").style.display = "none";
  document.getElementById("Update").style.display = "block";

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById("Update").onclick = guardarServicio;

document.addEventListener("DOMContentLoaded", function () {
  mostrarServicios();

  document.getElementById("cerrarSesionBtn").addEventListener("click", function () {
    if (confirm("¿Seguro que desea cerrar sesión?")) {
      sessionStorage.clear();
      window.location.href = "index.html";
    }
  });
});
