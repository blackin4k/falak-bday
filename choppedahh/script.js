// Typewriter Effect
const text = "Happy Birthday Falak 🎉";
let i = 0;
const speed = 80;
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typedText").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// Birthday Countdown to Jan 16, 2026
const targetDate = new Date("January 16, 2026 00:00:00").getTime();
const timerElement = document.getElementById("timer");
setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;
  if (diff <= 0) {
    timerElement.textContent = "🎉 It's her birthday!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Song Control
const musicPlayer = document.getElementById("musicPlayer");
const playPauseBtn = document.getElementById("playPauseBtn");
const songSelect = document.getElementById("songSelect");
const nowPlaying = document.getElementById("nowPlaying");

playPauseBtn.addEventListener("click", () => {
  if (musicPlayer.paused) {
    musicPlayer.play();
    playPauseBtn.textContent = "⏸ Pause";
  } else {
    musicPlayer.pause();
    playPauseBtn.textContent = "▶️ Play";
  }
});

songSelect.addEventListener("change", () => {
  const selected = songSelect.value;
  musicPlayer.src = selected;
  musicPlayer.play();
  playPauseBtn.textContent = "⏸ Pause";
  nowPlaying.textContent = "Now playing: " + songSelect.options[songSelect.selectedIndex].text;
});

// Raining bows
function createBow() {
  const bow = document.createElement("img");
  bow.src = "bow.png"; // make sure this file exists
  bow.classList.add("falling-bow");
  bow.style.left = Math.random() * 100 + "vw";
  bow.style.animationDuration = 5 + Math.random() * 3 + "s";
  document.body.appendChild(bow);

  setTimeout(() => {
    bow.remove();
  }, 8000);
}
setInterval(createBow, 300);
