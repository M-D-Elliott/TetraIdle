function createMatrix(w, h) {
  const matrix = []
  while (h--) {
    matrix.push(new Array(w).fill(0))
  }
  return matrix;
}

function merge(arenaField, player) {
  player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        arenaField[y + player.pos.y][x + player.pos.x] = value;
      }
    });
  });
}

function arenaSweep(arenaField) {
  let rowCount = 1;
  outer: for (let y = arenaField.length - 1; y > 0; --y) {
    for (let x = 0; x < arenaField[y].length; ++x) {
      if (arenaField[y][x] === 0) {
        continue outer;
      }
    }
    const row = arenaField.splice(y, 1)[0].fill(0);
    arenaField.unshift(row);
    ++y;

    player.score += rowCount * 10 * score_multi;
    rowCount *= 2;
  }
}
