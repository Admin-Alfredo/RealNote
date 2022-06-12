<script setup lang="ts">

</script>

<template>
  <div class="input-container">
    <input type="text" v-bind="$attrs">
  </div>
</template>

<style scoped>
  .input-container{
    width: 100%;
    max-width: 300px;
    height: 35px;
  }
  .input-container input[type=text]{
    width: 100%;
    height: 100%;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 5px;
    font-size: 1.2rem;
    transition: border .1s ease-in;
  }
  .input-container input[type=text]:focus{
    outline-width: 2px;
    outline-style: solid;
    outline-offset: 0;
    outline-color: var(--outiline-input-color-light);
    border-color: var(--color-link);
  }
</style>