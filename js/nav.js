const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPath) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  } else {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  }
});

/* Marca la pagina activa, usando el dom */