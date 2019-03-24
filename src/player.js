const player = {
  pos: {x:0, y:0},
  matrix: sendNextPiece(),
  score: parseInt(score.innerText),
}

function collide(arenaField, player) {
  const [m, o] = [player.matrix, player.pos];
  for (let y =0; y < m.length; ++y) {
    for (let x = 0; x < m[y].length; ++x) {
      if (m[y][x] !== 0 &&
          (arenaField[y + o.y] &&
          arenaField[y + o.y][x + o.x]) !== 0) {
            return true;
      }
    }
  }
  return false;
}

function playerDrop() {
  player.pos.y++;
  if (collide(game_canvas.field, player)) {
    player.pos.y--;
    merge(game_canvas.field, player);
    playerReset();
    arenaSweep(game_canvas.field);
    updateScore();
    return false;
  }
  dropCounter = 0;
  return true;
}

function instantDrop() {
  while(playerDrop()) {
  }
}

function playerMove(dir) {
  player.pos.x += dir;
  if (collide(game_canvas.field, player)) {
    player.pos.x -= dir;
  }
}

function playerReset() {
  player.matrix = sendNextPiece();
  player.pos.y = 0;
  player.pos.x = (game_canvas.field[0].length / 2 | 0) -
                 (player.matrix[0].length / 2 | 0);
  if (collide(game_canvas.field, player)) {
    resetGame();
  }
}

function playerRotate(dir) {
  const pos = player.pos.x
  let offset = 1;
  rotate(player.matrix, dir);
  while (collide(game_canvas.field, player)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > player.matrix[0].length) {
      rotate(player.matrix, -dir);
      player.pos.x = pos;
      return;
    }
  }
}

function rotate(matrix, dir) {
  for (let y = 0; y < matrix.length; ++y) {
    for (let x =0; x < y; ++x) {
      [
        matrix[x][y],
        matrix[y][x],
      ] = [
        matrix[y][x],
        matrix[x][y]
      ];
    }
  }
  if (dir > 0) {
    matrix.forEach(row => row.reverse());
  } else {
    matrix.reverse();
  }

}
