const numStars = 100;
for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${2 + Math.random() * 3}s`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  document.body.appendChild(star);
}
