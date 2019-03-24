let arena_w = 6;
let arena_h = 20;
const scale = 20;

let dropCounter = 0;
let dropInterval = 400;
let lastTime = 0;
let score_multi = 1;
let max_queue = 5;

const score = document.getElementById('score');

let _allPieces = [];
queue = [];
queue_skip = 4;

const colors = [
  null,
  '#6feafc',
  '#253780',
  '#d984d0',
  '#2d7a2d',
  '#ffd60a',
  '#ff933b',
  '#b50000'
]
