// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "40 dias y 40 noches", time: 4 },
  { text: "Yo espere a un chico como tu para que me salvara", time: 9 },
  { text: "Todos los dias yo espere por ti", time: 14 },
  { text: "Sabes, aquellos que dijieron que", time: 16 },
  { text: "Nunca encontraria a alguien como tu", time: 20 },
  { text: "Porque estas fuera de mi liga", time: 22 },
  { text: "De todas las cosas que yo crei", time: 25 },
  { text: "Tu eres la mas perfecta", time: 27 },
  { text: "Si, tu eres mas que un sueño", time: 29 },
  { text: "Porque estas fuera de mi liga", time: 32 },
  { text: "Haces que mi corazon se acelere", time: 35 },
  { text: "Si me muero, no me despierten", time: 37 },
  { text: "Porque eres mas que un sueño :3", time: 39 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
