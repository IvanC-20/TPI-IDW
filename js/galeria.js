cargarSalones();
cargarServicios();
function cargarSalones() {
  let listaSalones = [];

  if (localStorage.getItem("listaSalones") == null) {
    listaSalones = [
      {
        nombre: "Salón La Aventura",
        direccion: "Av. Imaginación 101, Ciudad Festejo",
        descripcion: "Ideal para cumpleaños infantiles llenos de juegos, risas y color. Equipado con inflables, zona de merienda y animadores profesionales.",
        precio: 95000,
        imagen: "imagenes/salon1.jpg"
      },
      {
        nombre: "Espacio Corporativo Éxito",
        direccion: "Oficina Central 204, Distrito Ejecutivo",
        descripcion: "El lugar perfecto para eventos empresariales. Tecnología de punta, catering ejecutivo y ambientación sobria para reuniones efectivas.",
        precio: 180000,
        imagen: "imagenes/salon2.jpg"
      },
      {
        nombre: "Salón Estrella de la Fiesta",
        direccion: "Calle Brillante 33, Villa Estilo",
        descripcion: "Decoración premium, luces inteligentes y sonido profesional. Especial para fiestas de 15 y aniversarios inolvidables.",
        precio: 160000,
        imagen: "imagenes/salon3.jpg"
      },
      {
        nombre: "El Rincón de la Diversión",
        direccion: "Pasaje Alegre 55, Barrio Joven",
        descripcion: "Perfecto para eventos juveniles. DJ en vivo, zona de karaoke y pista iluminada. ¡Nunca falta la diversión!",
        precio: 120000,
        imagen: "imagenes/salon4.jpg"
      },
      {
        nombre: "La Terraza Celebración",
        direccion: "Altos del Centro 77, Ciudad Vista",
        descripcion: "Un salón al aire libre con vista panorámica, ideal para atardeceres, cenas especiales y eventos sociales elegantes.",
        precio: 145000,
        imagen: "imagenes/salon5.jpg"
      },
      {
        nombre: "Fiesta Total Kids",
        direccion: "Calle Diversión 123, Mundo Infantil",
        descripcion: "Zona 100% pensada para niños: pelotero, mini pista de baile, menú infantil y animación temática.",
        precio: 90000,
        imagen: "imagenes/salon6.jpg"
      },
      {
        nombre: "Centro de Eventos Gala",
        direccion: "Boulevard Elegancia 456, Barrio Norte",
        descripcion: "Diseñado para bodas, aniversarios y eventos formales. Elegancia, atención personalizada y ambiente de lujo.",
        precio: 200000,
        imagen: "imagenes/salon7.jpg"
      },
      {
        nombre: "Salón Multiespacio IDW",
        direccion: "Ruta 25, KM 10, Parque Industrial",
        descripcion: "Versátil y configurable. Desde ferias hasta fiestas privadas, se adapta a cualquier tipo de evento.",
        precio: 130000,
        imagen: "imagenes/salon8.jpg"
      }
    ];
    localStorage.setItem("listaSalones", JSON.stringify(listaSalones));
  }

}

function cargarServicios() {
  let listaServicios = [];

  if (localStorage.getItem("listaServicios") == null) {
    listaServicios = [
      {
        id: "S001",
        descripcion: "Cabina de fotos con accesorios",
        valor: 25000
      },
      {
        id: "S002",
        descripcion: "DJ con luces LED y pista iluminada",
        valor: 55000
      },
      {
        id: "S003",
        descripcion: "Decoración temática personalizada",
        valor: 30000
      },
      {
        id: "S004",
        descripcion: "Show de magia para todas las edades",
        valor: 20000
      },
      {
        id: "S005",
        descripcion: "Food truck gourmet",
        valor: 45000
      },
      {
        id: "S006",
        descripcion: "Barra de tragos con bartender show",
        valor: 60000
      }/*,
      {
        id: "S007",
        descripcion: "Animación con personajes infantiles",
        valor: 28000
      },
      {
        id: "S008",
        descripcion: "Estación de selfies con aros de luz",
        valor: 18000
      },
      {
        id: "S009",
        descripcion: "Servicio de maquillaje artístico",
        valor: 22000
      },
      {
        id: "S010",
        descripcion: "Proyector y pantalla gigante",
        valor: 32000
      },
      {
        id: "S011",
        descripcion: "Espectáculo de fuegos artificiales",
        valor: 70000
      },
      {
        id: "S012",
        descripcion: "Muro de donas y candy bar personalizado",
        valor: 28000
      },
      {
        id: "S013",
        descripcion: "Alquiler de carpa chill-out con livings",
        valor: 55000
      },
      {
        id: "S014",
        descripcion: "Recepción con violinista en vivo",
        valor: 30000
      },
      {
        id: "S015",
        descripcion: "Robot LED para apertura de pista",
        valor: 45000
      },
      {
        id: "S016",
        descripcion: "Estación de glitter y body painting",
        valor: 22000
      },
      {
        id: "S017",
        descripcion: "Set de bienvenida con merchandising",
        valor: 18000
      },
      {
        id: "S018",
        descripcion: "Puestos de comida estilo street food",
        valor: 32000
      },
      {
        id: "S019",
        descripcion: "Show de circo o acrobacia aérea",
        valor: 65000
      },
      {
        id: "S020",
        descripcion: "Transmisión en vivo del evento",
        valor: 38000
      }*/
    ];
    localStorage.setItem("listaServicios", JSON.stringify(listaServicios));
  }
}

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
          <div class="ratio ratio-4x3">
            <img src="${salon.imagen || 'imagenes/default.jpg'}" class="card-img-top object-fit-cover" alt="Imagen de ${salon.nombre}" />
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title text-center text-uppercase mb-3">${salon.nombre}</h5>
            <h6 class="text-center text-muted mb-4">${salon.direccion}</h6>
            <p class="card-text text-center text-muted">${salon.descripcion}</p>
            <div class="mt-auto">
              <p class="card-text text-center fw-bold mb-3">$${salon.precio}</p>
              <div class="d-flex justify-content-center">
                <a href="#" class="btn btn-outline-warning shadow-lg">Ver más...</a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });

  contenedor.innerHTML = html;

  if (typeof AOS !== "undefined") {
    AOS.init();
  }

  contenedor.querySelectorAll(".btn-outline-warning").forEach((btn, index) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const salon = listaSalones[index];
      const modalContenido = `
          <div class="text-center">
            <div class="ratio ratio-4x3 mb-3">
              <img src="${salon.imagen || 'imagenes/default.jpg'}" class="img-fluid rounded object-fit-cover" alt="${salon.nombre}">
            </div>
            <h5 class="mb-2">${salon.nombre}</h5>
            <h6 class="text-muted">${salon.direccion}</h6>
            <p class="mt-3">${salon.descripcion}</p>
            <p class="fw-bold">$${salon.precio}</p>
          </div>`;

      document.getElementById("modalContenido").innerHTML = modalContenido;

      const modal = new bootstrap.Modal(document.getElementById("descripcionModal"));
      modal.show();
    });
  });

});

