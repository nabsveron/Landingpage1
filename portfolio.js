const form = document.getElementById('contactForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  form.style.display = 'none';
});