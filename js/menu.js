function irA(pagina) {
    sessionStorage.setItem("desdeMenu", "true");
    location.href = pagina;
  }

  document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("cerrarSesionBtn");
    boton.addEventListener("click", function () {
      const resultado = confirm("¿Seguro que desea cerrar sesión?");
      if (resultado) {
        sessionStorage.clear();
        window.location.href = "index.html";
      }
    });
  });