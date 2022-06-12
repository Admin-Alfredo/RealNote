<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue';
import { PopupState } from './popup.class';

defineProps<{state: PopupState}>()
const popupDOM = ref() 
onUpdated(()=>{
  const popup: HTMLDivElement = popupDOM.value
  // if(popup.classList.contains('active')){
    console.log("offeset:", popup.offsetWidth)
    popup.style.left = (window.innerWidth/ 2) - (popup.offsetWidth / 2) + 'px'
  // }
})
</script>
<template>
  <div ref="popupDOM" class="popup-container" :class="{'active': state.isOpen, 'animate-before': !state.isOpen}" :style="{left: state.posX + 'px', top: state.posY +'px'}">
    <slot></slot>
  </div>
</template>
<style scoped>
.animate-before{
  transform: translateY(-20px);
  opacity: 0;
}
.animate-after{
  transform: translateY(20px);
  opacity: 0;
}
.popup-container {
  transition: .3s;
  position: absolute;
  background-color: var(--light-full);
  border-radius: 10px;
  min-height: 5px;
  min-width: 70px;
  box-shadow: var(--shadow-light);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9996;
  /*  */
  pointer-events: none;
  visibility: hidden;
  height: 0px;
}
.popup-container.active{
  pointer-events: auto;
  visibility: visible;
  height: unset;
}
</style>
