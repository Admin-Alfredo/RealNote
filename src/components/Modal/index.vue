<script setup lang="ts">
import Icon from '../Icon/index.vue';
import { ModalState } from './modal.class';
import { ref, onMounted } from 'vue'

const { state } = defineProps<{ state: ModalState }>()

const modalDOM = ref()
function updateModalSize() {
  const modal: HTMLDivElement = modalDOM.value

  modal.style.width = state.isPixal ? state.width + 'px' : state.width + '%'
  modal.style.minHeight = state.minHeight + 'px'
  modal.style.maxHeight = (window.innerHeight - 100) + 'px'

  modal.style.top = (window.innerHeight / 2) - (modal.offsetHeight / 2) + 'px'

  console.log(modal.offsetHeight)
  if (modal.offsetWidth) {
    modal.style.left = ((window.innerWidth / 2) - (modal.offsetWidth / 2)) + 'px'
    console.log('1')
  } else if (state.isPixal) {
    console.log('2')
    modal.style.left = (window.innerWidth / 2) - (state.width / 2) + 'px'
  } else if (!modal.offsetWidth && !state.isPixal) {
    console.log('2')
    modal.style.left = (window.innerWidth / 2) - (((window.innerWidth * state.width) / 100) / 2) + 'px'
  }

}
onMounted(updateModalSize)
window.addEventListener('resize', updateModalSize)

</script>

<template>
  <div class="modal-container">
    <div class="overlay mode" :class="{ 'on': state.isOpen, 'off': !state.isOpen }"
      @click="() => state.isOpen = !state.isOpen" v-if="state.overlay"></div>

    <div class="modal mode" ref="modalDOM" :class="{ 'on': state.isOpen, 'off': !state.isOpen }" v-bind="$attrs">
      <div class="modal-header">
        <Icon class="close-btn" @click="() => state.isOpen = !state.isOpen">
          <a href="#"><i class="fa fa-times"></i></a>
        </Icon>
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
         <slot ></slot>
      </div>
      <div class="modal-footer">
        <div class="modal-footer_left">
          <slot name="footer"></slot>
        </div>
        <div class="modal-footer_right" v-if="state.cancelButton">
          <button class="btn primary" @click="() => state.isOpen = !state.isOpen">cancelar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  position: relative;
}

.overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999999;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  transition: all;
  visibility: hidden;
  z-index: -9998;
}


.modal {
  position: fixed;
  background-color: var(--light-full);
  border-radius: 4px;
  top: 0%;
  box-shadow: 0px .3rem 1rem #666;
  visibility: hidden;
  z-index: -9999;
  display: flex;
  flex-direction: column;
}

.modal .modal-header {
  position: relative;
  border-bottom: var(--border-layout-light);
}

.modal-header .close-btn {
  position: absolute;
  right: 0;
  top: 0;
  margin: 0;
}
.modal .modal-body{
  overflow: auto;
  flex: 1;
}

.modal-header .close-btn:active {
  outline: 2px solid var(--color-link);
  border-radius: 4px;

}

.modal .modal-footer {
  border-top: var(--border-layout-light);
  display: flex;
  align-items: center;
}

.modal-footer .modal-footer_left {
  flex: 1;

}

.modal-footer .modal-footer_right {
  padding: 5px;
}

.modal.mode.on {
  visibility: visible;
  z-index: 9999;
}

.modal.mode.off {
  z-index: -9999;
  visibility: hidden;
}

.overlay.mode.on {
  visibility: visible;
  z-index: 9998;
}

.overlay.mode.off {
  visibility: hidden;
  z-index: -9998;
}
</style>