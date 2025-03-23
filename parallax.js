// Optional: Add more layers if you want multi-speed parallax.
// This script enhances the effect based on scroll or mouse move.

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  document.getElementById('parallax-stars').style.transform = `translate(${x}px, ${y}px)`;
});
