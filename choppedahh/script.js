document.addEventListener('DOMContentLoaded', () => {
  const birthday = new Date("2026-01-15T00:00:00").getTime();
  const timerElement = document.getElementById("timer");
  const songSelect = document.getElementById("songSelect");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const musicPlayer = document.getElementById("musicPlayer");
  const nowPlaying = document.getElementById("nowPlaying");
  const falakQuote = document.getElementById("falakQuote");
  const bubble = document.getElementById("messageBubble");
  const darkBtn = document.getElementById("darkToggle");
  const confessBtn = document.getElementById("confessBtn");
  const confessNote = document.getElementById("confessNote");

  // 1. Countdown Timer
  function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    timerElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // 2. Song Selector
  songSelect.addEventListener("change", () => {
    const selectedSong = songSelect.value;
    musicPlayer.src = selectedSong;
    musicPlayer.play().catch(e => console.warn("Playback failed", e));
    nowPlaying.innerText = `Now playing: ${songSelect.options[songSelect.selectedIndex].text}`;
    playPauseBtn.innerText = "⏸ Pause";
  });

  // 3. Play/Pause Toggle
  playPauseBtn.addEventListener("click", () => {
    if (musicPlayer.paused) {
      musicPlayer.play().catch(e => console.warn("Playback failed", e));
      playPauseBtn.innerText = "⏸ Pause";
    } else {
      musicPlayer.pause();
      playPauseBtn.innerText = "▶ Play";
    }
  });

  // 4. Autoplay Fix
  document.body.addEventListener("click", () => {
    musicPlayer.play().catch(e => console.warn("Autoplay blocked"));
  }, { once: true });

  // 5. Quotes
  const quotes = [
    "‘XO Kitty changed my life ngl’",
    "‘K-pop is a lifestyle’",
    "‘Curry chawal is a love language’",
    "‘Still vibing to Lana & Kendrick’",
    "‘Cookies & cream or nothing.’"
  ];
  function updateQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    falakQuote.innerText = random;
  }
  setInterval(updateQuote, 4000);
  updateQuote();

  // 6. Bubble click
  if (bubble) {
    bubble.addEventListener("click", () => {
      bubble.innerText = '😎 ok now scroll';
      bubble.style.backgroundColor = '#ffc0cb';
    });
  }

  // 7. Dark mode toggle
  if (darkBtn) {
    darkBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }

  // 8. Falling bows
  const totalBows = 15;
  for (let i = 0; i < totalBows; i++) {
    const bow = document.createElement('img');
    bow.src = 'bow.png';
    bow.className = 'falling-bow';
    bow.style.left = `${Math.random() * 100}vw`;
    bow.style.animationDuration = `${Math.random() * 5 + 5}s`;
    bow.style.animationDelay = `${Math.random() * 3}s`;
    document.body.appendChild(bow);
  }

  // 9. Click pop sound
  const clickSound = new Audio("click.mp3");
  document.addEventListener("click", () => {
    clickSound.play().catch(() => {});
  });

  // 10. Confess popup toggle
  if (confessBtn && confessNote) {
    confessBtn.addEventListener("click", () => {
      confessNote.style.display = confessNote.style.display === "block" ? "none" : "block";
    });
  }
});
