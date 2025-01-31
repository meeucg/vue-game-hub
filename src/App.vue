<!-- App.vue -->
<template>
  <div id="app">
    <BoardElement ref="boardElement" @win="handleWin" @tie="handleTie" />
    <RestartButton @click="restartGame" />
    <p v-if="status" class="status">{{ status }}</p>
  </div>
</template>

<script>
import BoardElement from './components/BoardElement.vue';
import RestartButton from './components/RestartButton.vue';

export default {
  name: 'App',
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

<style>
@import './assets/styles.css';
</style>
