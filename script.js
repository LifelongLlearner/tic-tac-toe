// script.js
let board = ['', '', '', '', '', '', '', '', '']; // 3x3 Tic Tac Toe board
let currentPlayer = 'X'; // Player starts as 'X'
let gameOver = false;
let aiEnabled = false; // Whether playing against the computer or not

const boardElement = document.getElementById('board');
const statusElement = document.getElementById('status');
const resetButton = document.getElementById('resetButton');
const toggleAIButton = document.getElementById('toggleAI');

// Check for win conditions
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Add event listeners to each cell
boardElement.addEventListener('click', (event) => {
  if (gameOver) return;
  const cell = event.target;
  const index = cell.getAttribute('data-index');

  if (board[index] === '') {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    if (checkWinner()) {
      gameOver = true;
      statusElement.textContent = `Player ${currentPlayer} wins!`;
    } else if (board.every(cell => cell !== '')) {
      gameOver = true;
      statusElement.textContent = "It's a draw!";
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusElement.textContent = `Player ${currentPlayer}'s turn`;
      if (aiEnabled && currentPlayer === 'O') {
        setTimeout(aiMove, 500); // AI plays after a brief delay
      }
    }
  }
});

// Reset the game
resetButton.addEventListener('click', () => {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  statusElement.textContent = "Player X's turn";
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
});

// Toggle AI opponent
toggleAIButton.addEventListener('click', () => {
  aiEnabled = !aiEnabled;
  toggleAIButton.textContent = aiEnabled ? "Play against Human" : "Play against Computer";
  if (aiEnabled && currentPlayer === 'O') {
    setTimeout(aiMove, 500);
  }
});

// Check if current player has won
function checkWinner() {
  return winConditions.some(([a, b, c]) => {
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

// AI's move (simple AI)
function aiMove() {
  if (gameOver) return;
  let availableMoves = board
    .map((value, index) => value === '' ? index : -1)
    .filter(index => index !== -1);

  if (availableMoves.length === 0) return;

  let aiMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
  board[aiMove] = 'O';
  document.querySelector(`[data-index='${aiMove}']`).textContent = 'O';

  if (checkWinner()) {
    gameOver = true;
    statusElement.textContent = "Player O wins!";
  } else if (board.every(cell => cell !== '')) {
    gameOver = true;
    statusElement.textContent = "It's a draw!";
  } else {
    currentPlayer = 'X';
    statusElement.textContent = "Player X's turn";
  }
}
