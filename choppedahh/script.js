document.addEventListener("DOMContentLoaded", () => {
  const typedText = document.getElementById("typedText");
  const texts = [
    " 'Happy early birthday Falak!' 🩷",
    "'You’re iconic. You’re dramatic. You’re unstoppable.'",
    "'XO Kitty has nothing on you!'",
    "'Hope your day is as chaotic and cute as you.'"
  ];
  let i = 0, j = 0, currentText = "", isDeleting = false;

  function type() {
    if (i < texts.length) {
      currentText = texts[i];
      if (!isDeleting && j <= currentText.length) {
        typedText.textContent = currentText.slice(0, j++);
      } else if (isDeleting && j >= 0) {
        typedText.textContent = currentText.slice(0, j--);
      }

      if (j === currentText.length + 1) isDeleting = true;
      if (j === -1) {
        isDeleting = false;
        i = (i + 1) % texts.length;
      }
    }
    setTimeout(type, isDeleting ? 50 : 100);
  }
  type();

  // Countdown
  const timerElement = document.getElementById("timer");
  const birthday = new Date("2026-01-16T00:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = birthday - now;
    if (distance < 0) {
      timerElement.textContent = "🎉 It's her birthday! 🎉";
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);

  // Music Player
  const musicPlayer = document.getElementById("musicPlayer");
  const songSelect = document.getElementById("songSelect");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const nowPlaying = document.getElementById("nowPlaying");

  songSelect.addEventListener("change", () => {
    const selectedSong = songSelect.value;
    musicPlayer.src = selectedSong;
    musicPlayer.play();
    nowPlaying.textContent = `Now playing: ${songSelect.options[songSelect.selectedIndex].text}`;
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

  // Quotes
  const falakQuotes = [
    "Coke is my hydration routine 🥤",
    "I’m tired. (talks for 3 more hours)",
    "XO Kitty is peak cinema",
    "I’m not ignoring you, I just hate texting 💅",
    "Sleep is for the weak, and I am very weak 😴"
  ];
  const falakQuoteEl = document.getElementById("falakQuote");

  function rotateQuote() {
    const quote = falakQuotes[Math.floor(Math.random() * falakQuotes.length)];
    falakQuoteEl.textContent = quote;
  }

  rotateQuote();
  setInterval(rotateQuote, 8000);

  // Falling bows
  function createBow() {
    const bow = document.createElement("img");
    bow.src = "bow.png";
    bow.className = "falling-bow";
    bow.style.left = Math.random() * 100 + "vw";
    bow.style.animationDuration = 3 + Math.random() * 3 + "s";
    document.body.appendChild(bow);
    setTimeout(() => bow.remove(), 6000);
  }
  setInterval(createBow, 600);

  // Theme Toggle
  const themeToggle = document.getElementById("themeToggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
