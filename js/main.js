document.addEventListener('DOMContentLoaded', function () {
  console.log('Documento cargado - Iniciando scripts');

  // Validar existencia de navbar antes de agregar scroll listener
  const navbar = document.querySelector('.navbar-custom');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  if (typeof initNavbar === 'function') initNavbar();
  if (typeof initContactForm === 'function') initContactForm();
  if (typeof initAnimations === 'function') initAnimations();
});

// Función para el formulario
function initContactForm() {
  const form = document.querySelector(".custom-contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        status.textContent = "¡Mensaje enviado correctamente!";
        status.classList.add("text-success");
        status.classList.remove("text-danger");
        form.reset();
      } else {
        status.textContent = "Hubo un problema al enviar el mensaje.";
        status.classList.add("text-danger");
        status.classList.remove("text-success");
      }
    } catch (error) {
      status.textContent = "Error de conexión. Intenta de nuevo.";
      status.classList.add("text-danger");
      status.classList.remove("text-success");
    }
  });
}

// Retardo para inicialización de búsqueda (opcional)
setTimeout(function() {
  try {
    // Aquí inicializar búsqueda
  } catch (e) {
    console.error('Error retrasado en búsqueda:', e);
  }
}, 1000);

 // ====== Modal de imagen con zoom ======
// if (!document.getElementById("image-modal")) {
//   const modal = document.createElement("div");
//   modal.id = "image-modal";
//   modal.innerHTML = `
//     <div class="modal-content">
//       <button id="modal-close">×</button>
//       <img id="modal-img" src="" alt="Zoomed Image">
//     </div>
//   `;
//   document.body.appendChild(modal);
// }

// const modal = document.getElementById("image-modal");
// const modalImg = document.getElementById("modal-img");
// const modalClose = document.getElementById("modal-close");


// const panzoom = Panzoom(modalImg, {
//   maxScale: 3,
//   minScale: 0.5,
//   contain: "outside",
//   step: 0.1,
//   animate: true,
//   duration: 200,
//   easing: "ease-in-out",
// });

// modalImg.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);

// // Abrir modal al clickear imágenes con clase .header-img
// document.querySelectorAll('.header-img').forEach(img => {
//   img.style.cursor = "zoom-in";
//   img.addEventListener('click', () => {
//     modalImg.src = img.src;
//     modal.style.display = "flex";
//     panzoom.reset();
//   });
// });

// // Doble clic sobre imagen resetea zoom
// modalImg.addEventListener("dblclick", () => panzoom.reset());

// // Cerrar modal con click en botón cerrar
// modalClose.addEventListener("click", () => modal.style.display = "none");

// // Cerrar modal con click fuera de la imagen (fondo)
// modal.addEventListener("click", (e) => {
//   if (e.target === modal) modal.style.display = "none";
// });

// // Cerrar modal con doble clic fuera de la imagen (fondo)
// modal.addEventListener('dblclick', (e) => {
//   if (e.target === modal) {
//     modal.style.display = "none";
//   }
// });

// // Cerrar modal con tecla ESC
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     modal.style.display = "none";
//   }
// });