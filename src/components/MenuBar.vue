<template>
    <div class="menu-bar">
      <router-link to="/" class="menu-item">Tic-Tac-Toe</router-link>
      <router-link to="/four-in-a-row" class="menu-item">4 in a Row</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MenuBar',
  };
  </script>
  
  <style scoped>
  .menu-bar {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  
  .menu-item {
    display: inline;
    margin-left: 10px;
    text-decoration: none;
    color: var(--dark-gray);
    font-family: 'Jost', sans-serif;
    font-size: 1rem;
    transition: color 0.3s;
    background-color: white;
    padding: 0.5rem;
    border-radius: 1rem;
  }
  
  .menu-item:hover {
    color: var(--medium-gray);
  }
  </style>
  