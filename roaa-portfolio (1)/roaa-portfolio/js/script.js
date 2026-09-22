/* =========================================================
   Roaa Al-Khasawneh — Portfolio
   Global JavaScript
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  setActiveNavLink();
  setupMobileMenu();
  setupScrollTop();
  setupProjectFilter();
  setupContactForm();
  setupTypingEffect();
});

/* ---------------------------------------------------------
   1. Highlight the current page in the navigation
--------------------------------------------------------- */
function setActiveNavLink() {
  var links = document.querySelectorAll('.nav-links a');
  var current = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/* ---------------------------------------------------------
   2. Mobile hamburger menu
--------------------------------------------------------- */
function setupMobileMenu() {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.nav-links');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  /* Close the menu when a link is chosen (helps on mobile) */
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ---------------------------------------------------------
   3. Scroll-to-top button
--------------------------------------------------------- */
function setupScrollTop() {
  var btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 420) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------------------------------------------------------
   4. Project filtering (projects.html)
--------------------------------------------------------- */
function setupProjectFilter() {
  var filterButtons = document.querySelectorAll('.filter-btn');
  var projectCards = document.querySelectorAll('.project-card');
  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      button.classList.add('active');

      var filter = button.getAttribute('data-filter');

      projectCards.forEach(function (card) {
        var categories = (card.getAttribute('data-category') || '').split(' ');
        var show = filter === 'all' || categories.indexOf(filter) !== -1;
        card.style.display = show ? 'flex' : 'none';
      });
    });
  });
}

/* ---------------------------------------------------------
   5. Contact form validation (contact.html)
--------------------------------------------------------- */
function setupContactForm() {
  var form = document.getElementById('contact-form');
  if (!form) return;

  var status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var isValid = true;

    var fields = [
      { id: 'name', check: function (v) { return v.trim().length > 1; }, message: 'Please enter your full name.' },
      { id: 'email', check: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }, message: 'Please enter a valid email address.' },
      { id: 'subject', check: function (v) { return v.trim().length > 2; }, message: 'Please enter a subject.' },
      { id: 'message', check: function (v) { return v.trim().length > 9; }, message: 'Your message should be at least 10 characters.' }
    ];

    fields.forEach(function (field) {
      var input = document.getElementById(field.id);
      var group = input.closest('.form-group');
      var errorEl = group.querySelector('.field-error');

      if (!field.check(input.value)) {
        isValid = false;
        group.classList.add('has-error');
        if (errorEl) errorEl.textContent = field.message;
      } else {
        group.classList.remove('has-error');
      }
    });

    if (isValid) {
      status.textContent = 'Thank you! Your message has been prepared successfully.';
      status.classList.add('visible');
      form.reset();
    } else {
      status.classList.remove('visible');
    }
  });

  /* Clear an error as soon as the visitor starts fixing a field */
  form.querySelectorAll('input, textarea').forEach(function (input) {
    input.addEventListener('input', function () {
      var group = input.closest('.form-group');
      if (group) group.classList.remove('has-error');
    });
  });
}

/* ---------------------------------------------------------
   6. Subtle typing animation for the home page hero
--------------------------------------------------------- */
function setupTypingEffect() {
  var el = document.querySelector('[data-typing]');
  if (!el) return;

  var phrases = ['AI', 'Cybersecurity', 'Web Development', 'Programming'];
  var phraseIndex = 0;
  var charIndex = 0;
  var deleting = false;

  function tick() {
    var current = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }

  tick();
}
