let arena_w = 12;
let arena_h = 20;
const scale = 20;

const canvas = document.getElementById('tetra-canvas');
const stats = document.getElementById('stats');
const container = document.getElementById('TetraIdle');

canvas.width = arena_w * scale;
canvas.height = arena_h * scale;
console.log(canvas.width);
const context = canvas.getContext('2d');
context.scale(scale, scale);

let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;

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
