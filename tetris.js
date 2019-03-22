createArena()
const arena = createMatrix(arena_w, arena_h);

function resetGame() {
  arena.forEach(row => row.fill(0));
  player.score = 0;
  updateScore();
  playerReset();
}

function update(time = 0) {
  const deltaTime = time - lastTime;
  lastTime = time;
  dropCounter += deltaTime;
  if(dropCounter > dropInterval) {
    playerDrop();
  }
  draw();
  requestAnimationFrame(update);
}

function updateScore() {
  stats.innerText = player.score;
}

document.addEventListener('keydown', e => {
  key = e.keyCode
  // console.log(key);
  if(key == 37) { // Left Arrow
    playerMove(-1);
  }
  else if (key === 39) { // Right Arrow
    playerMove(1);
  }

  if(key === 38) { // Up Arrow
    instantDrop();
  }
  if (key === 40) { // Down Arrow
    playerDrop();
  }

  if (key === 81) { // Q
    playerRotate(1);
  }
  else if (key === 87) { // W
    playerRotate(1);
  }

  if (key === 82) {
    if (e.ctrlkey) {
      resetGame();
    }
  }
});

update();
