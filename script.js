// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú móvil
const navToggle = document.getElementById('navToggle');
const header = document.querySelector('.site-header');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Formulario de contacto
// NOTA: este formulario todavía no envía datos a ningún lugar.
// Opción más rápida: crear una cuenta gratuita en https://formspree.io,
// copiar tu "endpoint" y reemplazar FORM_ENDPOINT abajo.
const FORM_ENDPOINT = ''; // <-- pega aquí tu endpoint de Formspree (o similar)

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.form-submit');

    if (!FORM_ENDPOINT) {
      formNote.textContent = 'Formulario aún no conectado. Revisa el README para activarlo, o escríbenos directo por WhatsApp mientras tanto.';
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });

      if (res.ok) {
        form.reset();
        formNote.textContent = 'Gracias, recibimos tu mensaje. Te contactaremos a la brevedad.';
      } else {
        formNote.textContent = 'No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.';
      }
    } catch (err) {
      formNote.textContent = 'No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos por WhatsApp.';
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar mensaje';
    }
  });
}
