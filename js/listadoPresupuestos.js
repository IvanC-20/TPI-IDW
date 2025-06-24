document.addEventListener("DOMContentLoaded", function () {
    const tabla = document.querySelector("#presupuestosTable tbody");
    const data = JSON.parse(localStorage.getItem("presupuestosGenerados")) || [];

    if (data.length === 0) {
      tabla.innerHTML = `
        <tr>
          <td colspan="5" class="text-center text-muted">No hay presupuestos generados aún.</td>
        </tr>`;
      return;
    }

    data.forEach(p => {
      const servicios = p.servicios.map(s => `${s.descripcion} ($${s.valor.toLocaleString()})`).join("<br>");
      const fila = `
        <tr>
          <td>${p.cliente}</td>
          <td>${p.fecha}</td>
          <td>${p.salon}</td>
          <td>${servicios}</td>
          <td>$${p.total.toLocaleString()}</td>
        </tr>`;
      tabla.innerHTML += fila;
    });
  });

  // Botón cerrar sesión
  document.addEventListener("DOMContentLoaded", function () {
    const cerrarSesionBtn = document.getElementById("cerrarSesionBtn");
    if (cerrarSesionBtn) {
      cerrarSesionBtn.addEventListener("click", function () {
        if (confirm("¿Seguro que desea cerrar sesión?")) {
          sessionStorage.clear();
          window.location.href = "index.html";
        }
      });
    }
  });