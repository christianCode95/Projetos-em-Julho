const ratingPainel = document.getElementById("ratingPainel");
const thankYouPainel = document.getElementById("thankYouPainel");
const emojis = document.querySelectorAll(".emoji");
const mensagemEl = document.getElementById("mensagem");
const sendBtn = document.getElementById("sendBtn");
const resetBtn = document.getElementById("resetBtn");
let selectedRating = null;

emojis.forEach((emoji) => {
  emoji.addEventListener("click", () => {
    emojis.forEach((e) => e.classList.remove("selected"));
    emoji.classList.add("selected");
    selectedRating = emoji.getAttribute("data-rating");
    mensagemEl.textContent = ``;
  });
});

sendBtn.addEventListener("click", () => {
  if (!selectedRating) {
    mensagemEl.textContent = "Por favor, selecione uma avaliação";
    return;
  }
  ratingPainel.classList.add("fade-out");

  setTimeout(() => {
    ratingPainel.classList.add("hidden");
    thankYouPainel.classList.remove("hidden");
    thankYouPainel.classList.add("fade-in");
  }, 500);
});

resetBtn.addEventListener("click", () => {
  thankYouPainel.classList.remove("fade-in");
  thankYouPainel.classList.add("fade-out");
  setTimeout(() => {
    thankYouPainel.classList.add("hidden");
    ratingPainel.classList.remove("hidden", "fade-out");
    ratingPainel.classList.add("fade-in");

    selectedRating = null;
    emojis.forEach((e) => e.classList.remove("selected"));
    mensagemEl.textContent = "";
  }, 500);
});

