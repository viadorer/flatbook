/* ==========================================================
   FLATBOOK.CZ — Main JavaScript
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initMobileMenu();
  initCountUp();
  initScrollAnimations();
  initFAQ();
  initSmoothScroll();
});

/* ---- Navbar scroll effect ---- */
function initNavScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---- Mobile menu ---- */
function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const close = document.getElementById('menuClose');
  const menu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('menuOverlay');

  if (!toggle || !menu) return;

  const openMenu = () => {
    menu.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggle.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close on link click
  menu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ---- Count up animation for USP numbers ---- */
function initCountUp() {
  const numbers = document.querySelectorAll('.usp-number[data-target]');
  if (!numbers.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  numbers.forEach(el => observer.observe(el));
}

function animateNumber(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    el.textContent = current.toLocaleString('cs-CZ');

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ---- Scroll animations ---- */
function initScrollAnimations() {
  // Animate step items
  const stepItems = document.querySelectorAll('.step-item');
  // Animate fade-up elements
  const fadeUps = document.querySelectorAll('.fade-up');
  // Animate module cards
  const moduleCards = document.querySelectorAll('.module-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  stepItems.forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.12}s`;
    observer.observe(el);
  });

  fadeUps.forEach(el => observer.observe(el));

  moduleCards.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`;

    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    cardObserver.observe(el);
  });
}

/* ---- FAQ Accordion ---- */
function initFAQ() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all
      items.forEach(i => i.classList.remove('active'));

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ---- Smooth scroll for anchor links ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id === '#') return;

      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
