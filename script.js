window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(c => {
    c.classList.remove('abierta');
    const content = c.querySelector('.card-content');
    if (content) content.style.display = 'none';
  });
});

function volverInicio() {
  window.location.href = 'index.html';
}

function mostrarPantalla(id) {
  document.getElementById('inicio')?.classList.add('seccion-oculta');
  document.querySelectorAll('section')?.forEach(s => s.classList.add('seccion-oculta'));
  document.getElementById(id)?.classList.remove('seccion-oculta');
}

document.addEventListener('click', e => {
  const header = e.target.closest('.card-header');
  if (header) {
    const card = header.closest('.card');
    if (card) {
      const content = card.querySelector(".card-content");
      const flecha = header.querySelector('.flecha');
      const isOpen = card.classList.toggle('abierta');
      if (isOpen) {
        content.style.display = 'block';
        if (flecha) flecha.textContent = '▲';
      } else {
        content.style.display = 'none';
        if (flecha) flecha.textContent = '▼';
      }
    }
  }
});

function toggleSubCard(header) {
  const body = header.nextElementSibling;
  const arrow = header.querySelector('.arrow');
  body.classList.toggle('hidden');
  header.classList.toggle('open');
  if (arrow) {
    arrow.textContent = body.classList.contains('hidden') ? '▼' : '▲';
  }
}
