<template>
    <div class="game-container">
      <BoardElement ref="boardElement" @win="handleWin" @tie="handleTie" />
      <RestartButton @click="restartGame" />
      <p v-if="status" class="status">{{ status }}</p>
    </div>
  </template>
  
  <script>
  import BoardElement from './BoardElement.vue';
  import RestartButton from './RestartButton.vue';
  
  export default {
    name: 'TicTacToe',
    components: {
      BoardElement,
      RestartButton,
    },
    data() {
      return {
        status: '',
      };
    },
    methods: {
      handleWin(winner) {
        this.status = `${winner} wins!`;
      },
      handleTie() {
        this.status = 'It\'s a tie!';
      },
      restartGame() {
        this.status = '';
        this.$refs.boardElement.reset();
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
  </style>
  