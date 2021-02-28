document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener('click', handleClick);
  })
});

function handleClick(event) {
  const square = event.target;
  const position = square.id;
  const isEndGame = handleMove(position)
  updateSquares(position);

  if (isEndGame) {
    setTimeout(() => {
      alert('O Joga Acabou - O vencedor foi ' + playerTime);
    }, 10)
  }
}

function updateSquares(position) {
  const square = document.getElementById(position.toString());
  const symbol = board[position];

  if (symbol !== '') {
    square.innerHTML = `<div class="${symbol}"></div>`
  }
}

function updateSquares() {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    const position = square.id;
    const symbol = board[position];

    if (symbol !== '') {
      square.innerHTML = `<div class="${symbol}"></div>`
    }
  })
}