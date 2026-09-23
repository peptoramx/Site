// Keep the editorial index in the same order as the page, even when sections
// are added or repositioned during content work.
document.addEventListener('DOMContentLoaded', () => {
  const sequence = ['inicio', 'ciencia', 'objetivos', 'performance', 'peptides', 'featured-peptides', 'productos', 'longevity', 'science-notes', 'contacto', 'precision'];
  sequence.forEach((id, index) => {
    const section = document.getElementById(id);
    const number = section && section.querySelector('.eyebrow > span:first-child');
    if (number) number.textContent = String(index + 1).padStart(2, '0');
  });
});

