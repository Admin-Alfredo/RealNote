<script setup lang="ts">
import { onActivated, onBeforeMount, onMounted, onUpdated, ref } from 'vue';


const pagesDOM = ref()
function updateStatePageDOM(): void {
  const page: HTMLElement = pagesDOM.value

  const heightUnitPage: number = page.children.item(0)?.getBoundingClientRect().height ?? 0

  page.style.minHeight = (page.children.length * heightUnitPage) + 'px'
}
onMounted(() => {updateStatePageDOM()})
onUpdated(() => {updateStatePageDOM()})
</script>

<template>
  <div class="page-wrapper">
    <div class="pages" ref="pagesDOM">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  
  height: 100%;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  padding: 0 15px;
}

.pages {width: 100%;}

.page {
  background-color: red;
  border: 3px solid white;
  height: 50px;
  width: 50px;
}
</style>