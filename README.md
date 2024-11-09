🎮 Tic Tac Toe Game (Human vs. Human or Human vs. Computer)
A fun and interactive Tic Tac Toe web game, where you can challenge either another player or the computer! The game offers two modes:

Human vs. Human: Play with a friend on the same device.
Human vs. Computer: Play against the computer with basic AI.
🌟 Features
🤝 Human vs. Human: Play with a friend on the same device.
🤖 Human vs. Computer: Challenge a simple AI.
🔄 Restart Game: Start a new game anytime.
🏆 Game Status: Shows the winner or if the game is a draw.
🌍 Responsive Design: Play on any device (mobile, tablet, desktop).
🛠️ Technologies Used
HTML: To structure the game layout.
CSS: For styling and making the game visually appealing.
JavaScript: For implementing game logic, player actions, and AI functionality.
🚀 How to Play
1. Clone the Repository
To get started, clone this repo to your local machine:


git clone https://LifelongLlearner/Priya Karthikeyan/tic-tac-toe.git
2. Open the Game in Your Browser
After cloning the repo, open the index.html file in any modern browser to play the game.

3. Choose Your Mode
Human vs. Human: Two players take turns on the same device to play the game. Click on an empty cell to place your mark (X or O).
Human vs. Computer: Select to play against the computer. The computer will make its move automatically after each of your turns.
4. Winning and Draws
The first player to align three marks (X or O) in a row, column, or diagonal wins the game.
If all cells are filled without a winner, the game is a draw.
📂 Project Structure

tic-tac-toe/
├── index.html        # The HTML structure for the game
├── style.css         # Styling for the game board and UI
├── script.js         # JavaScript for game logic and AI
└── README.md         # This README file
🎮 Game Logic Overview
Here’s a brief overview of how the game works:

Game Board: The game is played on a 3x3 grid. Each player alternates placing their mark (X or O).
Winning Conditions: The first player to align three marks vertically, horizontally, or diagonally wins.
Computer AI: The computer's move is made based on a simple algorithm that chooses an empty spot on the board. (This can be enhanced for a more challenging AI).
Example JavaScript Code for AI (Basic)
javascript

// AI makes a random move
function computerMove() {
  const emptyCells = [];
  for (let i = 0; i < 9; i++) {
    if (board[i] === '') emptyCells.push(i);
  }
  const randomMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  makeMove(randomMove, 'O'); // 'O' is the computer's marker
}
🏁 Starting a New Game
Click the "Restart" button after a game ends to reset the board and start a new round.

🔧 Customization & Improvements

Styling: Customize the look and feel by modifying the style.css file.
Multiplayer Online: You can extend the game to support multiplayer over the web using WebSockets or Firebase.
📜 License
This project is open-source and licensed under the MIT License.

🤝 Contributing
Feel free to contribute by forking the repo, creating a new branch, making changes, and submitting a pull request.

🎉 Enjoy Playing Tic Tac Toe!
Whether you’re playing with a friend or challenging the computer, we hope you enjoy this classic game!
