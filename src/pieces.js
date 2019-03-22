const piecesRepository = {
'T' :  [
  [0, 0, 0],
  [1, 1, 1],
  [0, 1, 0]
],
'I' :  [
  [0, 5, 0, 0],
  [0, 5, 0, 0],
  [0, 5, 0, 0],
  [0, 5, 0, 0]
],
'O' :  [
  [2, 2],
  [2, 2],
],
'J' :  [
  [0, 4, 0],
  [0, 4, 0],
  [4, 4, 0]
],
'L' :  [
  [0, 3, 0],
  [0, 3, 0],
  [0, 3, 3]
],
'S' :  [
  [0, 6, 6],
  [6, 6, 0],
  [0, 0, 0]
],
'Z' :  [
  [7, 7, 0],
  [0, 7, 7],
  [0, 0, 0]
],
}

const _allPieces = Object.keys(piecesRepository);

function createPiece(type) {
  piece = piecesRepository[type];
  return piece;
}

function getRandomPiece() {
  return createPiece(_allPieces[_allPieces.length * Math.random() | 0])
}
