function playMusic() {
  const music = document.getElementById("bg-music");
  const button = document.querySelector(".opening");
  const card = document.querySelector(".container.wish");

  // Play music
  music.play().catch((err) => console.log("Music blocked:", err));

  // Hide button
  button.style.display = "none";

  // Show card
  setTimeout(() => {
    card.classList.add("show");
  }, 400);

  // Start heart rain
  const heartInterval = setInterval(createGlitter, 150);

  // Flip card after 8 seconds
  setTimeout(() => {
    card.classList.add("flip");
  }, 8000);

  // Stop heart rain after flip
  setTimeout(() => {
    clearInterval(heartInterval);
  }, 12000);
}

// ---------------- INIT STATE ----------------
window.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".container.wish");
  const button = document.querySelector(".opening");

  // reset state
  if (card) {
    card.classList.remove("show");
    card.classList.remove("flip");
  }

  if (button) {
    button.style.display = "inline-block";
  }
});

function createGlitter() {
  const heart = document.createElement("i");

  // Font Awesome classes
  heart.classList.add("fa-solid", "fa-heart", "glitter");

  // random position
  heart.style.left = Math.random() * window.innerWidth + "px";

  // random size
  let size = Math.random() * 12 + 10;
  heart.style.fontSize = size + "px";

  // magenta colors
  const colors = ["#ff2e93", "#ff4da6", "#ff66b3", "#ff1493"];
  heart.style.color = colors[Math.floor(Math.random() * colors.length)];

  // fall speed
  heart.style.animationDuration = Math.random() * 6 + 6 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}