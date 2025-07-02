const quotes = [
  "Believe in yourself!",
  "Stay positive, work hard.",
  "Every day is a fresh start.",
  "Make it happen.",
  "Push your limits.",
  "Your only limit is you."
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random];
}
