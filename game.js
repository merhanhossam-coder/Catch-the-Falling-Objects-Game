
const gameArea = document.getElementById("gameArea");
const basket = document.getElementById("basket");
const scoreDisplay = document.getElementById("score");
const livesDisplay = document.getElementById("lives");
const gameOverScreen = document.getElementById("gameOverScreen");
const finalScoreDisplay = document.getElementById("finalScore");
const restartBtn = document.getElementById("restartBtn");

let score = 0;
let lives = 3;
let basketX = 210;          
const basketWidth = 80;
const areaWidth = gameArea.clientWidth;
const areaHeight = gameArea.clientHeight;
const basketSpeed = 8;     

let fallingObjects = [];    
let fallSpeed = 2;         
let spawnInterval = null;  
let gameLoopId = null;      
let isGameOver = false;

let leftPressed = false;
let rightPressed = false;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") leftPressed = true;
  if (e.key === "ArrowRight") rightPressed = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowLeft") leftPressed = false;
  if (e.key === "ArrowRight") rightPressed = false;
});

gameArea.addEventListener("mousemove", (e) => {
  const areaRect = gameArea.getBoundingClientRect();
  let mouseX = e.clientX - areaRect.left - basketWidth / 2;
  basketX = clamp(mouseX, 0, areaWidth - basketWidth);
  basket.style.left = basketX + "px";
});

function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

function spawnObject() {
  const obj = document.createElement("div");
  obj.classList.add("fallingObject");

  const objSize = 25;
  const randomX = Math.random() * (areaWidth - objSize);
  obj.style.left = randomX + "px";
  obj.style.top = "0px";

  gameArea.appendChild(obj);

  fallingObjects.push({
    el: obj,
    top: 0,
    left: randomX,
    size: objSize
  });
}

function gameLoop() {
  if (isGameOver) return;

  if (leftPressed) basketX -= basketSpeed;
  if (rightPressed) basketX += basketSpeed;
  basketX = clamp(basketX, 0, areaWidth - basketWidth);
  basket.style.left = basketX + "px";

  for (let i = fallingObjects.length - 1; i >= 0; i--) {
    const obj = fallingObjects[i];
    obj.top += fallSpeed;
    obj.el.style.top = obj.top + "px";

    const basketTop = areaHeight - 40;
    const caughtHorizontally =
      obj.left + obj.size > basketX &&
      obj.left < basketX + basketWidth;
    const caughtVertically = obj.top + obj.size >= basketTop;

    if (caughtHorizontally && caughtVertically) {

      score++;
      scoreDisplay.textContent = score;
      removeObject(i);
      continue;
    }

    if (obj.top + obj.size >= areaHeight) {
      lives--;
      livesDisplay.textContent = lives;
      removeObject(i);

      if (lives <= 0) {
        endGame();
        return;
      }
    }
  }

  gameLoopId = requestAnimationFrame(gameLoop);
}

function removeObject(index) {
  fallingObjects[index].el.remove();
  fallingObjects.splice(index, 1);
}

function endGame() {
  isGameOver = true;
  clearInterval(spawnInterval);
  cancelAnimationFrame(gameLoopId);
  finalScoreDisplay.textContent = score;
  gameOverScreen.style.display = "flex";
}

function restartGame() {
  // Reset state
  score = 0;
  lives = 3;
  fallSpeed = 2;
  isGameOver = false;
  scoreDisplay.textContent = score;
  livesDisplay.textContent = lives;
  gameOverScreen.style.display = "none";

  fallingObjects.forEach(obj => obj.el.remove());
  fallingObjects = [];

  startGame();
}


function increaseDifficulty() {
  setInterval(() => {
    if (!isGameOver) fallSpeed += 0.3;
  }, 5000);
}


function startGame() {
  spawnInterval = setInterval(spawnObject, 1000); // new object every second
  gameLoopId = requestAnimationFrame(gameLoop);
  increaseDifficulty();
}

restartBtn.addEventListener("click", restartGame);

startGame();