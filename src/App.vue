<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import MenuCoxtent from "./components/ContextMenu/index.vue";
import Page from './components/page/index.vue'
import { PayloadEventOpenMenu } from "./components/page/page.interface";
import { selectMenu, contextMenu } from "./TypesMenu";
import { createMenuState } from "./components/ContextMenu/menu.class";
import WapperPage from "./components/page/page.wrapper.vue";

import Header from "./components/Header/index.vue";
import { globalState } from './store/index'
import Navigation from "./components/Navigation/index.vue";
import SideBar from "./components/SideBar/index.vue";
import ContentMain from "./components/ContentMain/index.vue";
import { createSideBarState } from "./components/SideBar/sidebar.class";
import Modal from "./components/Modal/index.vue";
import { createModalState } from "./components/Modal/modal.class";
import TextInput from "./components/Form/TextInput.vue";




onBeforeMount(() => document.execCommand('styleWithCSS', false, 'true'))


const stateSelectMenu = createMenuState()

const stateContextMenu = createMenuState()

const stateSideBar = createSideBarState()

const stateModalLink = createModalState(false, true, 350)
stateModalLink.isPixal = true


function handlerOpenSelectMenu(payload: PayloadEventOpenMenu): void {
  if (document.getSelection()?.type == 'Range' && !stateSelectMenu.isOpen) {

    stateSelectMenu.posX = payload.x
    stateSelectMenu.posY = payload.y
    stateSelectMenu.isOpen = true

  } else if (stateSelectMenu.isOpen) {
    stateSelectMenu.isOpen = false
  }
}
function handlerOpenContextMenu(payload: PayloadEventOpenMenu): void {

  if (!stateContextMenu.isOpen) {
    stateContextMenu.posX = payload.x
    stateContextMenu.posY = payload.y
    stateContextMenu.isOpen = true
  } else {
    stateContextMenu.isOpen = false
  }
}
function handlerAddLink(event: any){
  document.execCommand('link', true, event.target.value)
  stateModalLink.isOpen = false
}
const disabled = ref(false)


</script>


<template>
  <Header />
  <ContentMain v-if="globalState.docActived">
    <SideBar :state="stateSideBar"></SideBar>
    <WapperPage>
      <Page v-for="(p, i) in globalState.docActived?.pages" v-on:OpenSelectMenu="handlerOpenSelectMenu"
        v-on:OpenContextMenu="handlerOpenContextMenu" />
    </WapperPage>
  </ContentMain>
  <Navigation v-else></Navigation>
 
  <MenuCoxtent :menuState="stateSelectMenu" :menu="selectMenu" :payload="stateModalLink" />
  <MenuCoxtent :menuState="stateContextMenu" :menu="contextMenu" />

  <Modal :state="stateModalLink">
    <template v-slot:header>
      <div style="padding: 10px 15px;">
        <h4>adicionar link</h4>
      </div>
    </template>
    <template v-slot:default>
      <div style="padding: 10px 15px;">
        <TextInput placeholder="https://" style="margin: 0 auto;"/>         
      </div>
    </template>
    <template v-slot:footer>
      <div style="padding: 0px 15px;  display: flex; justify-content: flex-end;">
         <button class="btn primary" @click="handlerAddLink">aplicar</button>
      </div>
    </template>
  </Modal>
</template>
<style scoped>
  
</style>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
}

body,
html {
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: var(--light);
  height: 100vh;
}

:root {
  --shadow-light: 0px 5px 15px #ccc;
  --light: #e8e8e8;
  --light-full: #fff;
  --color-link: #3f71fa;
  --color-theme-dark: #f5f5f5;
  --font-size: 1.2rem;
  --border-color-light: #eee;
  --border-layout-light: 1px solid var(--border-color-light);
  --outiline-input-color-light: rgb(141, 185, 252);
}

a {
  color: #174fe9;
  font-size: var(--font-size);
  text-decoration: none;
  font-family: consolas;
}

a:hover {
  text-decoration: underline;
}

button.btn,
a.btn {
  padding: .5rem .8rem;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: var(--font-size);
  transition: outline;
  transition-duration: .4s;
}

.btn.primary {
  color: #fafafa;
  background-color: var(--color-link);
  text-shadow: 0.0005rem 0.0005rem 0px #0d44db;
}

.btn.primary:hover {
  outline: 1px solid #0f47e0;
}
</style>

<style scoped>
</style>