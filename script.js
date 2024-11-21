// script.js
const toggleButton = document.getElementById('darkModeToggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save preference to localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
});

// Apply saved preference on load
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode');
  if (savedMode === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});
