import { Player } from './Player.js';
import { Board } from './Board.js';

export default Game {
    constructor(player1, player2, board) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = board;
        this.currentTurn = player1;
    }

    startNewGame() {
        this.board.resetBoard();
        this.currentTurn = this.player1;
        this.registerMove();
        this.displayTurnMessage();
    }

    makeMove(row, col) {
        if (!this.board.hasWinner && this.board.placeMove(row, col, this.currentTurn.symbol)) {
            this.board.displayBoard();
            if (this.checkGameOver()) {
              this.announceWinner();
            } else {
              this.switchTurn();
              this.displayTurnMessage();
            }
          }
    }

    registerMove() {
        const buttons = document.querySelectorAll('.case');
        buttons.forEach((btn) => {
            btn.addEventListener('click', () => {
                const [row, col] = btn.id.split('-').slice(1).map(Number);
                this.makeMove(row, col);
            });
        });
    }

    switchTurn() {
        this.currentTurn = this.currentTurn === this.player1 ? this.player2 : this.player1;
    }

    checkGameOver() {
        if (this.board.checkVictory()) {
            return true;
          } else if (this.board.isFull()) {
            return true;
          }
          return false;
    }

    announceWinner() {
        if (this.board.hasWinner) {
            alert(`Le joueur ${this.currentTurn.symbol} a gagné !`);
          } else {
            alert("Match nul !");
          }
    }

    displayTurnMessage() {
        const displayTurnMessage = document.getElementById("turn-message");
        displayTurnMessage.textContent = 'Tour du joueur ${this.currentTurn.symbol}';
    }
    
    resetGame() {
        this.board.resetBoard();
        this.currentTurn = this.player1;
        this.displayTurnMessage();
    }
}