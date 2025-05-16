// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Toggle navigation menu (hamburger)
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
  navToggle.setAttribute('aria-expanded', !expanded);
  navMenu.classList.toggle('active');
});

// Close nav menu if clicking outside or on a link
document.addEventListener('click', (event) => {
  if (
    !navMenu.contains(event.target) &&
    !navToggle.contains(event.target) &&
    navMenu.classList.contains('active')
  ) {
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', false);
  }
});

// Toggle day/night theme and save preference
themeToggle.addEventListener('click', () => {
  const isNight = body.classList.toggle('night-mode');
  localStorage.setItem('theme', isNight ? 'night' : 'day');
  themeToggle.textContent = isNight ? '☀️' : '🌙';
});

// Load saved theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'night') {
    body.classList.add('night-mode');
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});
