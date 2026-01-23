const toggleButton = document.getElementById('themeToggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleButton.textContent = '☀️ Light';
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggleButton.textContent = isDark ? '☀️ Light' : '🌙 Dark';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMessage.textContent = 'Message sent successfully!';
  form.reset();
});