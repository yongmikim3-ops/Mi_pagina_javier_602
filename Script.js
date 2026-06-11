function toggleMensaje(button) {
    const targetId = button.getAttribute('data-target');
    const mensaje = document.getElementById(targetId);
    
    if (!mensaje) return;
    
    if (mensaje.classList.contains('visible')) {
        mensaje.classList.remove('visible');
        mensaje.classList.add('hidden');
        
        if (targetId === 'mensaje1') {
            button.textContent = 'Mostrar mensaje Sobre mi';
        } else if (targetId === 'mensaje') {
            button.textContent = 'Mostrar mensaje Sobre El PEC';
        } else if (targetId === 'pec-video') {
            button.textContent = 'Ver video sobre cuidado animal';
        }
        
        setTimeout(() => {
            mensaje.style.display = 'none';
            mensaje.classList.remove('hidden');
        }, 400);
    } else {
        if (targetId === 'mensaje') {
            mensaje.innerHTML = 'Cuida y protege a los animales';
        } else if (targetId === 'mensaje1') {
            mensaje.innerHTML = 'Hola espero que tengas un lindo dia :)';
        }
        
        mensaje.style.display = 'block';
        mensaje.offsetHeight;
        mensaje.classList.add('visible');
        
        if (targetId === 'mensaje1') {
            button.textContent = 'Ocultar mensaje Sobre mi';
        } else if (targetId === 'mensaje') {
            button.textContent = 'Ocultar mensaje Sobre El PEC';
        } else if (targetId === 'pec-video') {
            button.textContent = 'Ocultar video sobre cuidado animal';
        }
    }
}

function MostrarMensaje() {
    toggleMensaje(event.target);
}

function MostrarMensaje1() {
    toggleMensaje(event.target);
}

function MostrarVideoPec() {
    toggleMensaje(event.target);
}

// === CARRUSEL DE GALERÍA ===
let currentSlideIndex = 0;
const totalSlides = 5;
let autoSlideInterval;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  
  // Reset all
  slides.forEach((slide, i) => slide.classList.remove('active'));
  indicators.forEach((ind, i) => ind.classList.remove('active'));
  
  // Activate current
  slides[index].classList.add('active');
  indicators[index].classList.add('active');
  
  // Update transform
  const carousel = document.querySelector('.carousel');
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  showSlide(currentSlideIndex);
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentSlideIndex);
}

function currentSlide(n) {
  currentSlideIndex = n - 1;
  showSlide(currentSlideIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000); // 4 segundos
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Inicializar carrusel al cargar página
document.addEventListener('DOMContentLoaded', function() {
  // ===== Formulario mascotas (mostrar/ocultar datos) =====
  const mascotasForm = document.getElementById('mascotas-form');
  const mascotasDatos = document.getElementById('mascotas-datos');
  const mascotasRadios = document.querySelectorAll('input[name="tieneMascotas"]');

  function syncMascotasVisibility() {
    if (!mascotasDatos) return;

    const seleccionado = document.querySelector('input[name="tieneMascotas"]:checked');
    const mostrar = seleccionado && seleccionado.value === 'si';

    mascotasDatos.classList.toggle('pets-hidden', !mostrar);

    // Ajustar required dinámico
    const cantidad = document.getElementById('cantidad');
    const nombres = document.getElementById('nombres');

    if (cantidad) cantidad.required = mostrar;
    if (nombres) nombres.required = mostrar;

    if (mascotasDatos && !mostrar) {
      // opcional: limpiar valores al ocultar
      // cantidad.value = '';
      // nombres.value = '';
    }
  }

  if (mascotasRadios && mascotasRadios.length) {
    mascotasRadios.forEach((r) => r.addEventListener('change', syncMascotasVisibility));
  }
  syncMascotasVisibility();

  // ===== Formulario de contacto (mostrar "Enviado") =====
  const contactoForm = document.getElementById('contacto-form');
  if (contactoForm) {
    const msg = document.getElementById('contacto-mensaje');
    contactoForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // validación nativa
      if (!contactoForm.checkValidity()) {
        contactoForm.reportValidity();
        return;
      }

      if (msg) {
        msg.textContent = 'Enviado';
        msg.classList.add('visible');
      }

      contactoForm.reset();

      // ocultar mensaje al final del flujo
      setTimeout(() => {
        if (msg) {
          msg.classList.remove('visible');
          msg.textContent = '';
        }
      }, 2500);
    });
  }

  // ===== Existing carousel init =====
  showSlide(0);
  startAutoSlide();
  
  
  // Pause on hover
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', stopAutoSlide);
  carouselContainer.addEventListener('mouseleave', startAutoSlide);
  
  // Touch swipe support for mobile
  let startX = 0;
  carouselContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });
  carouselContainer.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
  });
});
