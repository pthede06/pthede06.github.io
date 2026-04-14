(() => {
  const cards = document.querySelectorAll('.tool-card');
  const counter = document.getElementById('tool-count');

  if (counter) {
    counter.textContent = cards.length;
  }
})();
