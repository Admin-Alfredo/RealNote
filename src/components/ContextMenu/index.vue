<script setup lang="ts">
import { ref, toRef, watch} from 'vue';
import { MenuInterface, ItemsMenuInterface, MenuStateInterface } from './menu.interface';
import Icon from '../Icon/index.vue';


const { menu, menuState, payload } = defineProps<{
  menuState: MenuStateInterface
  menu: MenuInterface,
  payload?: any
}>()


const menuDOM = ref()
watch(toRef(menuState, 'isOpen'), (newValue: boolean, oldValue: boolean) => {
  
  if (menuState.isOpen) {
    const menu: HTMLDivElement = menuDOM.value
    const RectMenu = menu.getBoundingClientRect()
    // encontrar um submenu com [width] mais grande.
    const submenus = menu.querySelectorAll<HTMLUListElement>('.context-menu.submenu')
    let widthSubmenuMax: number = 0 //maior comprimento 

    // calulando o submenu com maior comprimento
    if (submenus.length > 0) {
      submenus.forEach(submenu => {
        const widthSubmenu: number = submenu.getBoundingClientRect().width
        if (widthSubmenu > widthSubmenuMax) widthSubmenuMax = widthSubmenu
      })
    }



    if ((menuState.posX + RectMenu.width + widthSubmenuMax) > window.innerWidth) {

      const metadeDoMenuSobresaidaDaTela: number = (menuState.posX + RectMenu.width) - window.innerWidth

      menuState.posX = ((menuState.posX - metadeDoMenuSobresaidaDaTela) - (widthSubmenuMax + 10))

    }

  }
})
// por Admiro Alfredo (°_°)
function handlerClickItem(item: ItemsMenuInterface, menu: MenuInterface, event: (MouseEvent | PointerEvent)) {

  if (item.click) item.click(event, payload) // dispara o evento click do item ou filho do item
  if(menuState.isOpen) menuState.isOpen = false
 
  document.getSelection()?.collapseToEnd()
}

</script>
<template>
  <div ref="menuDOM" class="context-menu mode" :class="{ 'on': menuState.isOpen, 'off': !menuState.isOpen }"
    :style="{ left: menuState.posX + 'px', top: menuState.posY + 'px' }"  @contextmenu="(e)=> e.preventDefault()">
    <ul>

      <li class="item-menu" v-for="(item, key) of menu.itemsMenu" :key="key" @click="(event) => {
        if (item.children && item.children.length > 0 && item.submenu?.itemsMenu.length != 0) {
      
        } else if (item.submenu && item.submenu?.itemsMenu.length > 0) {
      
        } else {
          handlerClickItem(item, menu, event)
        }
      
      }">
        <!-- Items com flhos de icones  -->
        <div class="item-children"
          v-if="item.children && item.children.length > 0 && item.submenu?.itemsMenu.length != 0">

          <Icon v-for="itemChildren of item.children" @click="(event: MouseEvent) => handlerClickItem(itemChildren, menu, event)"
            class="item-menu-attr_icon" :title="itemChildren.title">
            <font-awesome-icon v-if="itemChildren.icon" :icon="itemChildren.icon" />
          </Icon>

        </div>

        <!-- items com submenu -->
        <div class="item-submenu" v-else-if="item.submenu && item.submenu?.itemsMenu.length > 0">

          <!-- lista da submenu -->
          <Icon class="item-menu-attr_icon" v-if="item.icon">
            <font-awesome-icon :icon="item.icon" />
          </Icon>

          <span class="item-menu-attr_label">{{ item.label }}</span>


          <i class="fa fa-chevron-right item-submenu_caret-right"></i>

          <ul class="context-menu submenu mode">
            <li class="item-menu" v-for="itemSubmenu of item.submenu.itemsMenu"
              @click="(event) => handlerClickItem(itemSubmenu, menu, event)">
              <div class="item-simple">
                <Icon class="item-menu-attr_icon" v-if="itemSubmenu.icon">
                  <font-awesome-icon :icon="itemSubmenu.icon" />
                </Icon>
                <span class="item-menu-attr_label"> {{ itemSubmenu.label }}</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- items simples -->
        <div class="item-simple" v-else>
          <Icon class="item-menu-attr_icon" v-if="item.icon">
            <font-awesome-icon :icon="item.icon" />
          </Icon>
          <span class="item-menu-attr_label"> {{ item.label }}</span>
        </div>
      </li>
    </ul>
  </div>

</template>

<style scoped>
.context-menu {
  background-color: #fff;
  box-shadow:var(--shadow-light);
  position: absolute;
  user-select: none;
  border-radius: 5px;
  min-width: 200px;
  z-index: 999;
}

.context-menu ul {
  width: inherit;
  list-style: none;
  padding: 0;
  margin: 6px 0px;
}

.context-menu ul li.item-menu,
ul.context-menu.submenu li.item-menu {
  padding: 10px 8px;
  cursor: pointer;
}

.context-menu ul li.item-menu:hover,
ul.context-menu.submenu li.item-menu:hover {
  background-color: #f7f4f4;
}

.mode {
  transition-property: opacity;
  transition-duration: .2s;
}

.mode.on {
  height: auto;
  opacity: 1;
}

.mode.off {
  opacity: 0;
  visibility: hidden;
}

.item-menu>.item-simple {
  width: inherit;
  height: inherit;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}


.context-menu ul li.item-menu:hover .item-menu-attr_icon {
  color: #676767;
}

.item-menu-attr_label {
  flex: 1;
  font-size: 1.1rem;
  color: #676767;
  text-overflow: ellipsis;
}

.item-children {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-children>.item-menu-attr_icon:hover {
  background-color: #d6d6d6;
}

/* Stylilo do submenu */
.item-submenu {
  position: relative;
  height: inherit;
  display: flex;
  align-items: center;
}

.item-submenu_caret-right {
  color: #ccc;
  /* align-self: flex-end; */
  justify-self: center;
}

.context-menu.submenu {

  left: 100%;
  top: 0%;
  min-width: 0px;
  z-index: 998;
  visibility: hidden;
}


li.item-menu:hover .item-submenu>ul.context-menu.submenu {
  visibility: initial;
  min-width: 80px;
}

/* .item-children . */
</style>