// Toggle navbar for mobile
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Active link highlighting on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    }
  });

  // Sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Remove toggle on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// Scroll Reveal
ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .portfolio-box, .skils-box, .contact form', { origin: 'bottom' });

// Typed.js
const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Developer', 'Machine Learning Enthusiast', 'Programmer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Download CV functionality
const downloadBtn = document.querySelector('#downloadBtn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', function () {
    const link = document.createElement("a");
    link.href = "files/Shrijita Roy Chowdhury_Final.pdf"; // update this path
    link.download = "Shrijita Roy Chowdhury_Final.pdf";
    link.click();
  });

  let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
};




}
