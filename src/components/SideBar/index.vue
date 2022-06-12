<script setup lang="ts">
import { SideBarState } from './sidebar.class';

const { state } = defineProps<{ state: SideBarState }>()
</script>

<template>
  <div class="side-container">
    <div class="side-content mode" :class="{ 'on': state.isOpen, 'off': !state.isOpen }">

      <div class="sidebar-header">
        <div class="sidebar-header_top">
          <h1>Real Note</h1>
        </div>
      </div>
      <div class="sidebar-body">
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
       
      </div>
    </div>
    <div class="caret" @click="() => { state.isOpen = !state.isOpen }"></div>
  </div>

</template>
<style scoped>
.side-container {
  position: relative;
  background-color: #fff;
  border: 1px solid var(--border-layout-light);
  border-top-right-radius: 50px;
}

.side-content {
  max-width: 350px;
  display: flex;
  flex-direction: column;
  transition-property: width;
  transition-duration: .4s;
  transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
  overflow-x: hidden;
  height: 100%;
}
.sidebar-header{
  width: 100%;
  height: 80px;
}
.sidebar-header .sidebar-header_top{
  height: inherit;
  width: inherit;
  color: #fff;
  background-color: var(--color-link);
  padding: 5px 0px 0px 5px;
  border-radius: 0px 50px 50px 0px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.sidebar-body{
  /* flex: 1; */
  /* padding: 10px 0px 0px 5px; */
  overflow-y: auto;
  overflow-x: hidden;
  
}
.mode.on {width: 300px;}
.mode.off {width: 0px; visibility: hidden;}
.caret {
  right: -15px;
  top: 30%;
  position: absolute;
  display: block;
  border-top: 20px solid transparent;
  border-left: 10px solid rgb(153, 153, 153);
  border-bottom: 20px solid transparent;
  margin: 5px 5px 5px 0;
}


</style>