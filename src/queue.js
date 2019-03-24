function sendNextPiece() {
  type = queue.shift();
  queue.push(getRandomPiece());
  return createPiece(type);
  queueCanvas.field
}

function populateQueue() {
  queue = [];
  for(var i = 0; i < max_queue; i++) {
    queue.push(getRandomPiece());
  }
  return queue;
}

populateQueue();
