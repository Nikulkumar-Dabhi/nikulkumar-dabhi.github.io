(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Scroll-triggered animations -----
  var animatedSections = document.querySelectorAll('.animate-on-scroll');
  var observerOptions = { root: null, rootMargin: '0px 0px -80px 0px', threshold: 0.1 };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  animatedSections.forEach(function (section) {
    observer.observe(section);
  });

  // ----- Active nav link (scroll spy) -----
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = document.querySelectorAll('section[id]');

  function setActiveNav() {
    var scrollY = window.pageYOffset;
    var headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 60;

    sections.forEach(function (section) {
      var id = section.getAttribute('id');
      if (!id) return;
      var top = section.offsetTop - headerHeight;
      var height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) link.classList.add('active');
        });
      }
    });
  }

  window.addEventListener('scroll', function () {
    requestAnimationFrame(setActiveNav);
  });
  setActiveNav();

  // ----- Mobile nav toggle -----
  var navToggle = document.querySelector('.nav-toggle');
  var navLinksEl = document.querySelector('.nav-links');
  if (navToggle && navLinksEl) {
    navToggle.addEventListener('click', function () {
      navLinksEl.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', navLinksEl.classList.contains('is-open'));
    });
    navLinksEl.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinksEl.classList.remove('is-open');
      });
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinksEl && navLinksEl.classList.contains('is-open')) {
      navLinksEl.classList.remove('is-open');
    }
  });

  // ----- Smooth scroll for anchor links (enhance native behavior) -----
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var headerOffset = 60;
        var elTop = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: elTop, behavior: 'smooth' });
      }
    });
  });
})();
