let turnoJugador = 'X';
let tableroJuego = Array(9).fill(null);
let juegoTerminado = false;

const lineasGanadoras = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Conecta scripy js con html
const tablero = document.getElementById('tablero');
const celdas = tablero.querySelectorAll('td');
const statusJugador = document.getElementById('Player');
const statusTurno = document.getElementById('status');
const reinicioBtn = document.getElementById('rstBn');

// Asigna el evento a cada celda
celdas.forEach((td, i) => {
  td.dataset.index = i;
  td.addEventListener('click', onCellClick);
});

function onCellClick(e) {
  if (juegoTerminado) return;

  const td = e.currentTarget;
  const i = Number(td.dataset.index);

  if (tableroJuego[i]) return;

  // Pinta el valor del jugador (X ó O)
  tableroJuego[i] = turnoJugador;
  td.textContent = turnoJugador;
  td.classList.add(turnoJugador.toLowerCase());

  // Verifica si hay un ganador
  const ganadorInfo = checkWinner();
  if (ganadorInfo) {
    juegoTerminado = true;
    highlightWin(ganadorInfo.line);
    statusTurno.textContent = `¡Ganador: ${ganadorInfo.player}!`;
    return;
  }

  // Verifica un empate
  if (tableroJuego.every(celda => celda !== null)) {
    juegoTerminado = true;
    statusTurno.textContent = "Empate.";
    return;
  }

  // Cambia el turno
  turnoJugador = turnoJugador === 'X' ? 'O' : 'X';
  statusJugador.textContent = turnoJugador;
  statusTurno.textContent = `Turno de: ${turnoJugador}`;
}

function checkWinner() {
  for (const line of lineasGanadoras) {
    const [a, b, c] = line;
    if (tableroJuego[a] && tableroJuego[a] === tableroJuego[b] && tableroJuego[a] === tableroJuego[c]) {
      return { player: tableroJuego[a], line };
    }
  }
  return null;
}

function highlightWin(line) {
  line.forEach(i => celdas[i].classList.add('win'));
}

function reiniciarJuego() {
  tableroJuego = Array(9).fill(null);

  // Limpia las celdas
  celdas.forEach(td => {
    td.textContent = '';
    td.classList.remove('x', 'o', 'win');
  });

  // Turno del jugador (si el juego ya termino)
  turnoJugador = 'X';
  juegoTerminado = false;

  // Turno
  statusTurno.textContent = `Turno de: ${turnoJugador}`;
}

// Click para reiniciar el juego
document.getElementById('rstBn').addEventListener('click', reiniciarJuego);