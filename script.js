// Theme toggle system
const toggle = document.getElementById('themeToggle');
let darkMode = false;

toggle.addEventListener('click', () => {
  darkMode = !darkMode;

  if (darkMode) {
    // Dark theme values
    document.documentElement.style.setProperty('--bg', '#121212');
    document.documentElement.style.setProperty('--text', '#f5f5f5');
    document.documentElement.style.setProperty('--accent', '#66ccff');
    document.documentElement.style.setProperty('--card-bg', '#222');
    document.documentElement.style.setProperty('--hover-glow', '#333366');
    toggle.textContent = '☀️ Light Mode';
    document.title = 'Alexander | Dark Mode';
  } else {
    // Light theme values
    document.documentElement.style.setProperty('--bg', '#f9f9f9');
    document.documentElement.style.setProperty('--text', '#333');
    document.documentElement.style.setProperty('--accent', '#0055aa');
    document.documentElement.style.setProperty('--card-bg', '#ffffff');
    document.documentElement.style.setProperty('--hover-glow', '#e0e0ff');
    toggle.textContent = '🌗 Dark Mode';
    document.title = 'Alexander | Light Mode';
  }
});

// Smooth scroll function for sidebar buttons
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Entry animations on load
window.addEventListener('load', () => {
  const overlay = document.querySelector('.overlay');
  const skillCards = document.querySelectorAll('.skill-card');

  // Animate hero overlay
  overlay.style.opacity = '0';
  overlay.style.transform = 'translateY(-20px)';

  setTimeout(() => {
    overlay.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    overlay.style.opacity = '1';
    overlay.style.transform = 'translateY(0)';
  }, 300);

  // Animate skill cards with staggered delay
  skillCards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.95)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
    }, 600 + i * 150);
  });
});
