document.addEventListener("DOMContentLoaded", function () {
    const contenedor = document.getElementById("galeriaSalones");
  
    let listaSalones = [];
    try {
      listaSalones = JSON.parse(localStorage.getItem("listaSalones")) || [];
    } catch (e) {
      console.error("Error leyendo listaSalones:", e);
    }
  
    if (listaSalones.length === 0) {
      contenedor.innerHTML = `
        <div class="col-12">
          <div class="alert alert-warning text-center shadow-sm p-4 rounded">
            <h4 class="alert-heading">¡Ups!</h4>
            <p>No hay salones disponibles en este momento.</p>
            <hr>
            <p>=(</p>
          </div>
        </div>`;
      return;
    }
  
    let html = "";
    listaSalones.forEach((salon, index) => {
      html += `
        <div class="col-sm-6 col-md-4 col-lg-3" data-aos="flip-left" data-aos-duration="1000" data-aos-delay="${index * 200}">
          <div class="card h-100 shadow-lg border-0 overflow-hidden p-3 mb-4">
            <img src="${salon.imagen || 'imagenes/default.jpg'}" class="card-img-top" alt="Imagen de ${salon.nombre}" />
            <div class="card-body">
              <h5 class="card-title text-center text-uppercase mb-3">${salon.nombre}</h5>
              <h6 class="text-center text-muted mb-4">${salon.direccion}</h6>
              <p class="card-text text-center text-muted">${salon.descripcion}</p>
              <p class="card-text text-center fw-bold">$${salon.precio}</p>
              <div class="d-flex justify-content-center mt-4">
                <a href="#" class="btn btn-outline-warning shadow-lg">Ver más...</a>
              </div>
            </div>
          </div>
        </div>`;
    });
  
    contenedor.innerHTML = html;
  
    if (typeof AOS !== "undefined") {
      AOS.init();
    }
  });
  