<!-- BoardElement.vue -->
<template>
  <div>
    <div class="board">
      <SquareElement
        v-for="index in 9"
        :key="index"
        :index="index - 1"
        @click="handleClick(index - 1)"
        :value="squares[index - 1]"
      />
    </div>
    <!-- Optional: Display winner message here if you prefer -->
  </div>
</template>

<script>
import SquareElement from './SquareElement.vue';

export default {
  name: 'BoardElement',
  components: {
    SquareElement,
  },
  data() {
    return {
      squares: Array(9).fill(null),
      xIsNext: true,
      winnerMessage: '',
    };
  },
  methods: {
    handleClick(index) {
      if (this.squares[index] || this.winnerMessage) return;

      this.$set(this.squares, index, this.xIsNext ? 'X' : 'O');
      this.xIsNext = !this.xIsNext;

      const winner = this.calculateWinner();
      if (winner) {
        this.winnerMessage = `${winner} wins!`;
        this.$emit('win', winner);
      } else if (!this.squares.includes(null)) {
        this.winnerMessage = 'It\'s a tie!';
        this.$emit('tie');
      }
    },
    calculateWinner() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          this.squares[a] &&
          this.squares[a] === this.squares[b] &&
          this.squares[a] === this.squares[c]
        ) {
          return this.squares[a];
        }
      }
      return null;
    },
    reset() {
      this.squares = Array(9).fill(null);
      this.xIsNext = true;
      this.winnerMessage = '';
    },
  },
};
</script>

<style>
/* Styles specific to BoardElement.vue */
.board {
  /* The styles for .board are now in styles.css */
}
</style>
