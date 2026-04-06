// ===== Floating Hearts =====
(function createFloatingHearts() {
  const container = document.querySelector('.hearts-bg');
  const hearts = ['♥', '♡', '❤'];
  const count = 15;

  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.classList.add('heart');
    span.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    span.style.animationDuration = (12 + Math.random() * 18) + 's';
    span.style.animationDelay = (Math.random() * 15) + 's';
    span.style.color = `hsl(${345 + Math.random() * 30}, ${60 + Math.random() * 30}%, ${60 + Math.random() * 20}%)`;
    container.appendChild(span);
  }
})();

// ===== Scroll Reveal =====
(function scrollReveal() {
  const elements = document.querySelectorAll('[data-aos]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
})();

// ===== Button Interactions =====
(function setupButtons() {
  const btnYes = document.getElementById('btnYes');
  const btnNo = document.getElementById('btnNo');
  const btnConvinced = document.getElementById('btnConvinced');
  const responseYes = document.getElementById('responseYes');
  const responseNo = document.getElementById('responseNo');
  const responseConvinced = document.getElementById('responseConvinced');
  const buttonsContainer = document.querySelector('.question__buttons');

  btnYes.addEventListener('click', () => {
    buttonsContainer.style.display = 'none';
    responseNo.hidden = true;
    responseYes.hidden = false;
    launchConfetti();
  });

  btnNo.addEventListener('click', () => {
    buttonsContainer.style.display = 'none';
    responseNo.hidden = false;
  });

  btnConvinced.addEventListener('click', () => {
    responseNo.hidden = true;
    responseConvinced.hidden = false;
    launchConfetti();
  });
})();

// ===== Confetti =====
function launchConfetti() {
  const colors = ['#e8456b', '#d4a853', '#8b5e3c', '#f5e6c8', '#c97878', '#ff9a9e', '#fad0c4'];
  const shapes = ['circle', 'square'];

  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.backgroundColor = color;
    piece.style.width = (6 + Math.random() * 8) + 'px';
    piece.style.height = (6 + Math.random() * 8) + 'px';
    piece.style.borderRadius = shape === 'circle' ? '50%' : '2px';
    piece.style.animationDuration = (2 + Math.random() * 3) + 's';
    piece.style.animationDelay = (Math.random() * 1.5) + 's';

    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 5000);
  }
}
