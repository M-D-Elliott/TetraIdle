function draw(gameCanvas, matrix) {
  const context = gameCanvas.context;
  context.fillStyle = '#000';
  context.fillRect(0, 0, gameCanvas.canvas.width, gameCanvas.canvas.height);
  drawMatrix(context, gameCanvas.field, {x: 0, y: 0});
  drawMatrix(context, matrix, player.pos);
}

function drawMatrix(context, matrix, offset){
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value != 0) {
        context.fillStyle = colors[value];
        context.fillRect(x + offset.x,
                         y + offset.y,
                         1, 1);
      }
    });
  });
}

function shiftQueueMatrixUp(queueCanvas) {

}

function drawQueue(queueCanvas, matrix) {
  const context = queueCanvas.context;
  context.fillStyle = '#000';
  context.fillRect(0, 0, queueCanvas.canvas.width, queueCanvas.canvas.height);
  shiftQueueMatrix(context, queueCanvas.field, {x: 0, y: 0});
  shiftQueueMatrix(context, matrix, {x: 0, y: 0});
}

function shiftQueueMatrix(context, matrix, offset){
  for(var y = queue_skip; y < matrix.length - queue_skip; y++) {
    for(var x = queue_skip; x < matrix[0].length - queue_skip; x++) {
      queue[y - queue_skip][x] = q[y][x];
      context.fillStyle = colors[value];
      context.fillRect(x + offset.x,
                       y + offset.y,
                       1, 1);
    }
  }
}
