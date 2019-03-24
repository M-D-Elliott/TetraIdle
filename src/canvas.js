function Canvas(id) {
    this.canvas.height = arena_h * scale;
    this.context = this.canvas.getContext('2d');
    this.context.scale(scale, scale);
}

function GameCanvas(id) {
  this.canvas = document.getElementById(id);
  this.canvas.width = arena_w * scale;
  Canvas.call(this, id);
  this.field = createMatrix(arena_w, arena_h);
  return this;
}

function QueueCanvas(id) {
  this.canvas = document.getElementById(id);
  Canvas.call(this, id);
  this.queue = populateQueue();
  this.field = createMatrix(6, arena_h);
  return this;
}

const game_canvas = new GameCanvas("game");
const queue_canvas = new QueueCanvas("Queue");
