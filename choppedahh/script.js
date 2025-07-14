// ========== TYPING EFFECT ==========
const typedText = document.getElementById("typedText");
const messages = ["Falak’s Birthday Countdown 🎂", "She’s the main character fr 💅", "Get ready to celebrate 🥳"];
let index = 0;
let charIndex = 0;

function type() {
  if (charIndex < messages[index].length) {
    typedText.textContent += messages[index][charIndex];
    charIndex++;
    setTimeout(type, 80);
  } else {
    setTimeout(() => {
      typedText.textContent = "";
      charIndex = 0;
      index = (index + 1) % messages.length;
      type();
    }, 1500);
  }
}
type();


// ========== COUNTDOWN TIMER ==========
function updateCountdown() {
  const birthday = new Date("January 16, 2026 00:00:00");
  const now = new Date();
  const diff = birthday - now;

  if (diff <= 0) {
    document.getElementById("timer").textContent = "🎉 It's her birthday today!!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").textContent =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
setInterval(updateCountdown, 1000);
updateCountdown();


// ========== MUSIC PLAYER ==========
const musicPlayer = document.getElementById("musicPlayer");
const songSelect = document.getElementById("songSelect");
const playPauseBtn = document.getElementById("playPauseBtn");
const nowPlaying = document.getElementById("nowPlaying");

songSelect.addEventListener("change", () => {
  musicPlayer.src = songSelect.value;
  musicPlayer.play();
  nowPlaying.textContent = "Now playing: " + songSelect.options[songSelect.selectedIndex].text;
  playPauseBtn.textContent = "⏸ Pause";
});

playPauseBtn.addEventListener("click", () => {
  if (musicPlayer.paused) {
    musicPlayer.play();
    playPauseBtn.textContent = "⏸ Pause";
  } else {
    musicPlayer.pause();
    playPauseBtn.textContent = "▶️ Play";
  }
});


// ========== DARK MODE TOGGLE ==========
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
// wire this to a button using: onclick="toggleDarkMode()"


// ========== RAINING BOWS ==========
function createBow() {
  const bow = document.createElement("img");
  bow.src = "bow.png"; // make sure bow.png exists
  bow.classList.add("falling-bow");
  bow.style.left = `${Math.random() * 100}vw`;
  bow.style.animationDuration = `${3 + Math.random() * 3}s`;
  document.body.appendChild(bow);
  setTimeout(() => bow.remove(), 6000);
}
setInterval(createBow, 500);


// ========== FALAK QUOTES ==========
const falakQuotes = [
  "“I'm literally so done.” — Falak, 2023",
  "“It's giving ✨main character✨.”",
  "“Curry chawal is life. Period.”",
  "“Math? Never heard of her.”",
  "“If I say ily, I mean it. Unless I don’t.”",
  "“Let me cry to Lana in peace.”",
  "“I literally carried that football match.”",
];
const falakQuote = document.getElementById("falakQuote");
falakQuote.textContent = falakQuotes[Math.floor(Math.random() * falakQuotes.length)];
