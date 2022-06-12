<script setup lang="ts">
import { onMounted, ref } from 'vue';


const contentMain = ref()

onMounted(() =>{
  console.log(contentMain.value)
})


</script>
<template>
  <div class="content-main" ref="contentMain">
    <slot></slot>
  </div>
</template>

<style scoped>
  .content-main{
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    height: calc(100% - (50px + 25px));
  }
</style>