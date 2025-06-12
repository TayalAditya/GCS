// script.js
document.addEventListener('DOMContentLoaded', () => {
  // load header.html
  fetch('header.html')
    .then(r => r.text())
    .then(html => {
      document.getElementById('site-header').innerHTML = html;
      const btn = document.querySelector('.hamburger');
      const nav = document.getElementById('menu');
      if (btn && nav) btn.addEventListener('click', () => nav.classList.toggle('active'));
    });
});

// <script defer src="script.js"></script>