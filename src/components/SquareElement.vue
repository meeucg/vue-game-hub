<template>
  <div class="square" @click="$emit('click')">
    <img v-if="value === 'X'" src="@/assets/tic.svg" alt="X" />
    <img v-if="value === 'O'" src="@/assets/tac.svg" alt="O" />
  </div>
</template>

<script>
export default {
  name: 'SquareElement',
  props: {
    value: String,
  },
};
</script>