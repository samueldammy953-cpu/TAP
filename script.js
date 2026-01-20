let score = 0;
let timeLeft = 30;
let timerId = null;

const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const tapArea = document.getElementById('tap-area');
const gameOver = document.getElementById('game-over');
const finalScore = document.getElementById('final-score');

startBtn.addEventListener('click', startGame);
tapArea.addEventListener('click', () => {
  score++;
  scoreEl.textContent = score;
});

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = score;
  timeEl.textContent = timeLeft + "s";
  startBtn.classList.add("hidden");
  gameOver.classList.add("hidden");
  tapArea.classList.remove("hidden");

  timerId = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(timerId);
      endGame();
    }
  }, 1000);
}

function endGame() {
  tapArea.classList.add("hidden");
  startBtn.classList.remove("hidden");
  gameOver.classList.remove("hidden");
  finalScore.textContent = score;
}