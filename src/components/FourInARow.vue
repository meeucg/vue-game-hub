<template>
    <div class="game-container">
      <div class="four-board">
        <div
          v-for="(cell, index) in board"
          :key="index"
          class="cell"
          :class="{'player-one': cell === 1, 'player-two': cell === 2}"
          @click="handleClick(index % columns)"
        ></div>
      </div>
      <RestartButton @click="restartGame" />
      <p v-if="status" class="status">{{ status }}</p>
    </div>
  </template>
  
  <script>
  import RestartButton from './RestartButton.vue';
  
  export default {
    name: 'FourInARow',
    components: {
      RestartButton,
    },
    data() {
      return {
        rows: 6,
        columns: 7,
        board: [],
        currentPlayer: 1,
        status: '',
        gameActive: true,
      };
    },
    created() {
      this.initBoard();
    },
    methods: {
      initBoard() {
        this.board = Array(this.rows * this.columns).fill(0);
      },
      handleClick(column) {
        if (!this.gameActive) return;

        for (let row = this.rows - 1; row >= 0; row--) {
          const index = row * this.columns + column;
          if (this.board[index] === 0) {
            this.$set(this.board, index, this.currentPlayer);
            if (this.checkWin(row, column)) {
              this.status = `Player ${this.currentPlayer} wins!`;
              this.gameActive = false;
            } else if (this.board.every(cell => cell !== 0)) {
              this.status = 'It\'s a tie!';
              this.gameActive = false;
            } else {
              this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
            }
            break;
          }
        }
      },
      checkWin(row, column) {
        const directions = [
          { dr: 0, dc: 1 },   
          { dr: 1, dc: 0 },   
          { dr: 1, dc: 1 },   
          { dr: 1, dc: -1 },  
        ];
        const player = this.currentPlayer;
  
        for (let { dr, dc } of directions) {
          let count = 1;
  
          count += this.countInDirection(row, column, dr, dc, player);
  
          count += this.countInDirection(row, column, -dr, -dc, player);
  
          if (count >= 4) {
            return true;
          }
        }
        return false;
      },
      countInDirection(row, column, dr, dc, player) {
        let r = row + dr;
        let c = column + dc;
        let count = 0;
  
        while (
          r >= 0 &&
          r < this.rows &&
          c >= 0 &&
          c < this.columns &&
          this.board[r * this.columns + c] === player
        ) {
          count++;
          r += dr;
          c += dc;
        }
        return count;
      },
      restartGame() {
        this.status = '';
        this.gameActive = true;
        this.currentPlayer = 1;
        this.initBoard();
      },
    },
  };
  </script>
  
  <style scoped>
  .game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .four-board {
    display: grid;
    grid-template-columns: repeat(7, 50px);
    grid-template-rows: repeat(6, 50px);
    gap: 5px;
    background-color: var(--medium-dark-gray);
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  
  .cell {
    width: 50px;
    height: 50px;
    background-color: var(--medium-gray);
    border-radius: 50%;
    position: relative;
    cursor: pointer;
  }
  
  .player-one {
    background-color: white;
    box-sizing: border-box;
  }
  
  .player-two {
    background-color: var(--dark-gray);
    border: 2px solid var(--dark-gray);
    box-sizing: border-box;
  }
  
  .status {
    font-family: 'Jost', sans-serif;
    color: var(--dark-gray);
    font-size: 1.2rem;
  }
  </style>
  