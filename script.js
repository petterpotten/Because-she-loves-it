
// ===============================
// Página: Because She Loves It
// Autor: P.
// Descripción: Página interactiva de cumpleaños con música, pizarra de fotos y detalles animados estilo Ghibli para Jessica.
// ===============================

// --- MENSAJE PRINCIPAL ---
// Mensaje personalizado mostrado en la página
const mensaje = `🖤 Because she loves it 🖤

No sé si un conjunto de canciones pueda abrazarte,
pero bajo esa esperanza recolecté aquellas qe me recuerdan a ti.
Algunas me las mostraste tú,
otras las sentí como tuyas.

Me gusta cómo eres sin darte cuenta.
Me emociona que existas así,
con tus sombras misteriosas y tu forma de sentir.

Feliz cumpleaños monita.
Estaré entre tus canciones favoritas
y las que me recuerdan a ti.

— P.
PS. Activa el sonido, acomoda tus fotos en la pizarra y escucha con atención <3`;


// Inserta el mensaje en el elemento con id="mensaje"
document.getElementById("mensaje").innerText = mensaje;

// --- MÚSICA DE FONDO ---
// Al cargar la página, configura el volumen y permite reproducir la música al primer click
window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.5; // volumen bajo
  // Reproduce la música al primer click en cualquier parte del body (por restricciones de autoplay)
  document.body.addEventListener('click', () => {
    if (music.paused) {
      music.play().catch(e => console.log("No se pudo reproducir:", e));
    }
  }, { once: true });
});

// --- DRAG & DROP para fotos de la pizarra de corcho ---
// Permite arrastrar y acomodar las fotos de Jess en la pizarra
const board = document.querySelector('.cork-frame'); // Elemento de la pizarra
let dragTarget = null; // Elemento actualmente arrastrado
let offsetX = 0, offsetY = 0; // Offset del mouse respecto al elemento

if (board) {
  // Inicia el arrastre al hacer click en una foto
  board.addEventListener('mousedown', (e) => {
    const pin = e.target.closest('.photo-pin');
    // Solo permite arrastrar si se hace click sobre la imagen de Jess
    if (pin && e.target.classList.contains('jess-photo')) {
      dragTarget = pin;
      const rect = pin.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      pin.style.zIndex = 20;
      document.body.style.userSelect = 'none'; // Evita selección de texto accidental
    }
  });
  // Mueve la foto mientras se arrastra
  window.addEventListener('mousemove', (e) => {
    if (dragTarget) {
      const boardRect = board.getBoundingClientRect();
      let x = e.clientX - boardRect.left - offsetX;
      let y = e.clientY - boardRect.top - offsetY;
      // Limita el movimiento dentro de la pizarra
      x = Math.max(0, Math.min(board.offsetWidth - dragTarget.offsetWidth, x));
      y = Math.max(0, Math.min(board.offsetHeight - dragTarget.offsetHeight, y));
      dragTarget.style.left = x + 'px';
      dragTarget.style.top = y + 'px';
    }
  });
  // Finaliza el arrastre al soltar el mouse
  window.addEventListener('mouseup', () => {
    if (dragTarget) {
      dragTarget.style.zIndex = 2;
      dragTarget = null;
      document.body.style.userSelect = '';
    }
  });
}