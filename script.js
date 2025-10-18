// Basic interactivity: menu toggle, smooth scroll, form mock submit, year
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  navToggle && navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile menu
        nav.classList.remove('show');
        navToggle && navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Simple form handler (mock) — replace with real backend or Formspree/NetlifyForms
  const form = document.getElementById('contactForm');
  const status = form && form.querySelector('.form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = 'Заполни все поля корректно.';
        return;
      }
      status.textContent = 'Отправка...';
      // Simulate sending
      setTimeout(() => {
        status.textContent = 'Спасибо! Сообщение отправлено (это демо).';
        form.reset();
      }, 800);
    });
  }

  // set year
  document.getElementById('year').textContent = new Date().getFullYear();
});