<template>
    <button class="restart-button" @click="$emit('click')">Restart</button>
  </template>
  
  <script>
  export default {
    name: 'RestartButton',
  };
  </script>
  
  <style scoped>
  .restart-button {
    padding: 10px 20px;
    background-color: var(--dark-gray);
    color: var(--white);
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
  }
  
  .restart-button:hover {
    background-color: #000000;
  }
  </style>
  