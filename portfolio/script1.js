let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  const result = document.getElementById("result");
  const attemptsDisplay = document.getElementById("attempts");

  attempts++;
  attemptsDisplay.textContent = attempts;

  if (guess === randomNumber) {
    result.textContent = `🎉 Correct! The number was ${randomNumber}`;
    result.style.color = "green";
  } else if (guess < randomNumber) {
    result.textContent = "📉 Too low! Try again.";
    result.style.color = "orange";
  } else {
    result.textContent = "📈 Too high! Try again.";
    result.style.color = "orange";
  }
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("attempts").textContent = "0";
  document.getElementById("result").textContent = "";
  document.getElementById("guess").value = "";
}
