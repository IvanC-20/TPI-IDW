let servicioEditando = null;

function guardarServicio() {
  const id = document.getElementById("idServicio").value.trim();
  const descripcion = document.getElementById("descripcionServicio").value.trim();
  const valor = document.getElementById("valorServicio").value.trim();

  if (!id || !descripcion || !valor || Number(valor) < 0) {
    alert("Todos los campos son obligatorios y el valor debe ser mayor o igual a cero.");
    return;
  }

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
  document.getElementById("formServicio")?.reset();
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
        <button class="btn btn-warning w-100 mb-1" onclick="editarServicio(${index})">Editar</button>
        <button class="btn btn-danger w-100" onclick="eliminarServicio(${index})">Eliminar</button>
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

window.onload = mostrarServicios;

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("cerrarSesionBtn").addEventListener("click", function () {
    if (confirm("¿Seguro que desea cerrar sesión?")) {
      sessionStorage.clear();
      window.location.href = "index.html";
    }
  });
});