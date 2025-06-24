let valorSalon = 0;
let modalInstance;

function cargarServicios() {
  let listaServicios = JSON.parse(localStorage.getItem("listaServicios")) || [];
  const contenedor = document.getElementById("serviciosContainer");
  contenedor.innerHTML = "";
  listaServicios.forEach((servicio, index) => {
    const col = document.createElement("div");
    col.className = "col";
    col.innerHTML = `
      <div class="card h-100 border-0 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${servicio.descripcion}</h5>
          <p class="card-text text-muted">Valor: $${servicio.valor}</p>
          <div class="form-check">
            <input class="form-check-input servicio-check" type="checkbox" id="check${index}" data-valor="${servicio.valor}" data-descripcion="${servicio.descripcion}">
            <label class="form-check-label" for="check${index}">Seleccionar</label>
          </div>
        </div>
      </div>`;
    contenedor.appendChild(col);
  });
  agregarEventosChecks();
}

function cargarSalones() {
  let listaSalones = JSON.parse(localStorage.getItem("listaSalones")) || [];
  const select = document.getElementById("selectSalon");
  listaSalones.forEach((salon) => {
    const option = document.createElement("option");
    option.value = salon.precio;
    option.textContent = `${salon.nombre} - $${salon.precio}`;
    option.dataset.nombre = salon.nombre;
    select.appendChild(option);
  });

  select.addEventListener("change", function () {
    valorSalon = parseFloat(this.value);
    calcularTotal();
  });
}

function agregarEventosChecks() {
  const checks = document.querySelectorAll(".servicio-check");
  checks.forEach(chk => {
    chk.addEventListener("change", calcularTotal);
  });
}

function calcularTotal() {
  const checks = document.querySelectorAll(".servicio-check");
  let total = valorSalon;
  checks.forEach(chk => {
    if (chk.checked) {
      total += parseFloat(chk.dataset.valor);
    }
  });
  document.getElementById("totalValor").textContent = "$" + total.toLocaleString();
}

function verificarSalonSeleccionado(event) {
  const select = document.getElementById("selectSalon");
  if (!select.value) {
    event.preventDefault();
    alert("Por favor, seleccioná un salón antes de continuar.");
    return false;
  }
  modalInstance = new bootstrap.Modal(document.getElementById("presupuestoModal"));
  modalInstance.show();
}

async function generarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const nombre = document.getElementById("nombreCliente").value.trim();
  const salonSelect = document.getElementById("selectSalon");
  if (!salonSelect.value) {
    alert("Por favor, seleccioná un salón antes de generar el presupuesto.");
    return;
  }
  const salonTexto = salonSelect.options[salonSelect.selectedIndex]?.textContent || "Sin seleccionar";

  const checks = document.querySelectorAll(".servicio-check");
  let serviciosSeleccionados = [];
  let total = valorSalon;

  checks.forEach(chk => {
    if (chk.checked) {
      serviciosSeleccionados.push({
        descripcion: chk.dataset.descripcion,
        valor: parseFloat(chk.dataset.valor)
      });
      total += parseFloat(chk.dataset.valor);
    }
  });

  const fechaActual = new Date();
  const fechaStr = fechaActual.toLocaleDateString();
  const horaStr = fechaActual.toLocaleTimeString();

  const presupuesto = {
    cliente: nombre || "Sin nombre",
    salon: salonTexto,
    servicios: serviciosSeleccionados,
    total: total,
    fecha: `${fechaStr} ${horaStr}`
  };

  let presupuestos = JSON.parse(localStorage.getItem("presupuestosGenerados")) || [];
  presupuestos.push(presupuesto);
  localStorage.setItem("presupuestosGenerados", JSON.stringify(presupuestos));

  doc.setFontSize(16);
  doc.text("Presupuesto IDW SA", 20, 20);
  doc.setFontSize(12);
  doc.text(`Fecha: ${presupuesto.fecha}`, 20, 30);
  doc.text(`Cliente: ${presupuesto.cliente}`, 20, 40);
  doc.text(`Salón seleccionado: ${presupuesto.salon}`, 20, 50);

  let y = 60;
  doc.text("Servicios seleccionados:", 20, y);
  y += 10;
  presupuesto.servicios.forEach(serv => {
    doc.text(`- ${serv.descripcion} ($${serv.valor.toLocaleString()})`, 25, y);
    y += 8;
  });

  y += 5;
  doc.setFont(undefined, "bold");
  doc.text(`Total estimado: $${presupuesto.total.toLocaleString()}`, 20, y);

  const nombreArchivo = `presupuesto_${fechaActual.toISOString().split("T")[0]}_${fechaActual.getHours()}${fechaActual.getMinutes()}${fechaActual.getSeconds()}.pdf`;
  doc.save(nombreArchivo);

  modalInstance.hide();
}

document.addEventListener("DOMContentLoaded", function () {
  cargarSalones();
  cargarServicios();
});