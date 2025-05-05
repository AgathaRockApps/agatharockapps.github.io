// Load saved mode on page load
window.onload = function() {
  const savedMode = localStorage.getItem('mode');
  const root = document.documentElement;

  if (savedMode === 'light') {
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
  } else {
    root.style.setProperty('--bg-color', '#000000');
    root.style.setProperty('--text-color', '#ffffff');
  }
};

function toggleMode() {
  const root = document.documentElement;
  const isDark = getComputedStyle(root).getPropertyValue('--bg-color').trim() === '#000000';

  if (isDark) {
    root.style.setProperty('--bg-color', '#ffffff');
    root.style.setProperty('--text-color', '#000000');
    localStorage.setItem('mode', 'light');  // Save choice
  } else {
    root.style.setProperty('--bg-color', '#000000');
    root.style.setProperty('--text-color', '#ffffff');
    localStorage.setItem('mode', 'dark');   // Save choice
  }
}
