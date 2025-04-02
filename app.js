// Abre la pantalla con bienvenida
alert('¡Bienvenido al juego de adivinar el número secreto!');

// Configuración del juego
const configuracion = {
  maximo: 10,
  intentosMaximos: 3
};

// Estado del juego
let numeroSecreto = Math.floor(Math.random() * configuracion.maximo) + 1;
let intentos = 1;
let haGanado = false;

// Bucle principal del juego
while (intentos <= configuracion.intentosMaximos && !haGanado) {
  const inputUsuario = prompt(
    `Intento ${intentos} de ${configuracion.intentosMaximos}\n` +
    `Adivina el número (1-${configuracion.maximo}):`
  );

  // Si el usuario cancela el prompt
  if (inputUsuario === null) {
    alert('¡Juego cancelado! Vuelve cuando quieras.');
    break;
  }

  const numeroUsuario = parseInt(inputUsuario);

  // Validar entrada
  if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > configuracion.maximo) {
    alert(`Por favor ingresa un número válido entre 1 y ${configuracion.maximo}`);
    continue;
  }

  // Verificar si acertó
  if (numeroUsuario === numeroSecreto) {
    haGanado = true;
    const mensajeFinal = `¡Correcto! El número era ${numeroSecreto}.\n` +
      `Lo lograste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}.`;
    alert(mensajeFinal);
  } else {
    // Dar pista
    alert(`El número secreto es ${numeroUsuario > numeroSecreto ? 'menor' : 'mayor'}`);
    intentos++;
    
    // Verificar si se agotaron los intentos
    if (intentos > configuracion.intentosMaximos) {
      alert(`¡Agotaste tus ${configuracion.intentosMaximos} intentos!\n` +
        `El número secreto era ${numeroSecreto}.`);
    }
  }
}