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
    })
    .finally(initIntroModal);

  function initIntroModal() {
    const modal    = document.getElementById('intro-modal');
    const closeBtn = document.getElementById('close-intro-modal');
    const viewBtns = Array.from(document.querySelectorAll('.view-intro-image'));
    if (!modal || !closeBtn || viewBtns.length === 0) return;

    // open/close helpers with dialog fallback
    function openModal() {
      if (typeof modal.showModal === 'function') modal.showModal();
      else modal.style.display = 'block';
    }
    function closeModal() {
      if (typeof modal.close     === 'function') modal.close();
      else modal.style.display = 'none';
    }

    viewBtns.forEach(btn => btn.addEventListener('click', openModal));
    closeBtn.addEventListener('click', closeModal);
  }
});

// <script defer src="script.js"></script>