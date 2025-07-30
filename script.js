window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(c => c.classList.remove('abierta'));
});

function toggleCard(card) {
  card.classList.toggle('abierta');
}

function volverInicio() {
  window.location.href = 'index.html';
}

function mostrarPantalla(id) {
  document.getElementById('inicio')?.classList.add('seccion-oculta');
  document.querySelectorAll('section')?.forEach(s => s.classList.add('seccion-oculta'));
  document.getElementById(id)?.classList.remove('seccion-oculta');
}
