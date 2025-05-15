// Get the toggle button and body
const modeToggle = document.getElementById('modeToggle');
const body = document.body;

// Load saved mode on page load
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
  body.classList.add('dark');
  modeToggle.textContent = '🌙';
} else {
  modeToggle.textContent = '☀️';
}

// Dark/Light Mode Toggle
modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    modeToggle.textContent = '🌙';
    localStorage.setItem('mode', 'dark'); // Save preference
  } else {
    modeToggle.textContent = '☀️';
    localStorage.setItem('mode', 'light'); // Save preference
  }
});

// Smooth scroll for nav links (if linking to sections on same page)
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
