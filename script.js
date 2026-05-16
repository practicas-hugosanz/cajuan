const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');

function openMobile() {
  mobileMenu.classList.add('open');
  hamburger.classList.add('hidden');
  mobileClose.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMobile() {
  mobileMenu.classList.remove('open');
  hamburger.classList.remove('hidden');
  mobileClose.classList.remove('active');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMobile);
mobileClose.addEventListener('click', closeMobile);

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMobile);
});

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => observer.observe(el));
