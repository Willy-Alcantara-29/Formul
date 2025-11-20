// Inicializamos una línea de tiempo
var entradaFormulario = anime.timeline({
  easing: 'easeOutExpo',
  duration: 700
});

// Paso 1: Aparece el contenedor azul (efecto de zoom y fade)
entradaFormulario
.add({
  targets: '.Cuadro', // Clase de tu recuadro azul
  scale: [0.9, 1],   // De un poco más pequeño a tamaño normal
  opacity: [0, 1],   // De invisible a visible
  duration: 500
})
// Paso 2: Aparecen los textos, inputs y el botón en escalera
.add({
  targets: ['.titulo', '.Email', '.Nombre', '.btn-enviar'], // Clases de tus elementos internos
  translateY: [20, 0], // Se mueven 20px hacia arriba
  opacity: [0, 1],     // Aparecen
  delay: anime.stagger(50), // Cada elemento espera 50ms más que el anterior
}, '-=450'); // Offset: Empieza 450ms antes de que termine la animación del contenedor

