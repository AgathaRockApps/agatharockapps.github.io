// === Theme Handling ===
function toggleTheme() {
  const body = document.body;
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  body.classList.remove(currentTheme);
  body.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
}

// === Sidebar Toggle ===
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('hidden');
}

// === Load Theme on Page Load ===
window.onload = function () {
  const savedTheme = localStorage.getItem('theme') || 'dark'; // Default to night mode
  document.body.classList.add(savedTheme);
};
