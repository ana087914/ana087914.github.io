// Select elements
const revealSections = document.querySelectorAll('.reveal');
const buttons = document.querySelectorAll('.hire-me, .icon');
const header = document.querySelector('.header'); // Header element

// Function to reveal sections on scroll
function revealOnScroll() {
  revealSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight / 1.3;

    if (sectionTop < triggerPoint) {
      section.classList.add('reveal-visible');
    } else {
      section.classList.remove('reveal-visible');
    }
  });
}

// Add shine effect to buttons
function addButtonShineEffect() {
  buttons.forEach(button => {
    button.addEventListener('mousemove', e => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);
    });
  });
}

// Add shimmer effect on hover
function addButtonHoverEffect() {
  buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
      button.classList.add('shimmer-effect');
    });
    button.addEventListener('mouseleave', () => {
      button.classList.remove('shimmer-effect');
    });
  });
}

// Add header animation on scroll
function animateHeader() {
  const scrollY = window.scrollY;

  if (scrollY > 50) {
   
  } else {
   
  }
}
function redirectToContact() {
  window.location.href = "#contact"; // Navighează la secțiunea de contact
}

// Animated text effect in header
function animateHeaderText() {
  const headerText = document.querySelector('.header-text');
  
  
}

// Initialize animations
function init() {
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('scroll', animateHeader);
  addButtonShineEffect();
  addButtonHoverEffect();
  animateHeaderText();
}

// Start animations
init();
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

