const cuadro = document.getElementById('cuadro');

// Simula el cambio de estado de una póliza
function cambiarColor() {
  const estadosPoliza = ['#58a6ff', '#ff7b72', '#00ff00', '#ff00ff', '#ffff00'];
  const estadoRandom = estadosPoliza[Math.floor(Math.random() * estadosPoliza.length)];
  
  cuadro.style.backgroundColor = estadoRandom;
}

// Simula el aumento del valor asegurado de una póliza
function aumentarTamano() {

  const estilos = getComputedStyle(cuadro);
  const width = parseInt(estilos.width);
  const height = parseInt(estilos.height);

  cuadro.style.width = (width + 20) + 'px';
  cuadro.style.height = (height + 20) + 'px';
}

// Restablece la póliza a su estado inicial
function reiniciar() {
  cuadro.style.width = '100px';
  cuadro.style.height = '100px';
  cuadro.style.backgroundColor = '#58a6ff';
}
