<template>
  <div :isRed="isRed" :class="isRed ? 'red' : 'green'">

  </div>
  <button @click="changeColor">
    change color
  </button>
</template>

<style>
.red {
  width: 100px;
  height: 100px;
  background-color: red;
}

.green {
  width: 100px;
  height: 100px;
  background-color: green;
}
</style>

<script setup>
</script>