export default class Board {
    constructor() {
        this.grid = [];
        this.hasWinner = false;
        this.initializeBoard();
    }

    initializeBoard() {
        this.grid = [
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"],
        ];
        this.hasWinner = false;
    }

    displayBoard() {
        const boardContainer = document.getElementById("board");
        boardContainer.innerHTML = "";

        for (let row = 0; row < 3; row++) {
            const rowDiv = document.createElement("div");
            rowDiv.classList.add("row");
            
            for (let col = 0; col < 3; col++) {
                const btn = document.createElement("button");
                btn.classList.add("case");
                btn.id = 'btn-${row}-${col}';
                btn.textContent = this.grid[row][col];
                rowDiv.appendChild(btn);
            }

            boardContainer.appendChild(rowDiv);
        }
    }

    placeMove(row, col, symbol) {
        if (this.grid[row][col] === "-") {
            this.grid[row][col] = symbol;
            return true;
        } else {
            return false;
        }
    }

    checkVictory() {
        // Vérification des lignes horizontales
        for (let row = 0; row < 3; row++) {
          if (this.grid[row][0] !== "-" && this.grid[row][0] === this.grid[row][1] && this.grid[row][1] === this.grid[row][2]) {
            this.hasWinner = true;
            return true;
          }
        }
      
        // Vérification des colonnes verticales
        for (let col = 0; col < 3; col++) {
          if (this.grid[0][col] !== "-" && this.grid[0][col] === this.grid[1][col] && this.grid[1][col] === this.grid[2][col]) {
            this.hasWinner = true;
            return true;
          }
        }
      
        // Vérification de la diagonale de gauche à droite (\)
        if (this.grid[0][0] !== "-" && this.grid[0][0] === this.grid[1][1] && this.grid[1][1] === this.grid[2][2]) {
          this.hasWinner = true;
          return true;
        }
      
        // Vérification de la diagonale de droite à gauche (/)
        if (this.grid[0][2] !== "-" && this.grid[0][2] === this.grid[1][1] && this.grid[1][1] === this.grid[2][0]) {
          this.hasWinner = true;
          return true;
        }
      
        return false;
      }
      

    isFull() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
              if (this.grid[row][col] === "-") {
                return false;
              }
            }
          }
          return true;
    }

    resetBoard() {
    this.initializeBoard();
    this.displayBoard();
    }
}