const quotes = [
  "“Imagination is more important than knowledge.” — Albert Einstein",
  "“The engine is the heart of an airplane, but the pilot is its soul.” — Walter Raleigh",
  "“The sky is not the limit. Your mind is.” — Marilyn Monroe"
];

const quoteEl = document.getElementById("quote");
let quoteIndex = 0;
let charIndex = 0;

function typeQuote() {
  if (quoteIndex >= quotes.length) quoteIndex = 0;
  const current = quotes[quoteIndex];

  if (charIndex < current.length) {
    quoteEl.innerHTML += current.charAt(charIndex);
    charIndex++;
    setTimeout(typeQuote, 20); // slower typing speed
  } else {
    setTimeout(() => {
      quoteEl.innerHTML = "";
      charIndex = 0;
      quoteIndex++;
      typeQuote();
    }, 5000); // longer pause between quotes
  }
}

typeQuote();
