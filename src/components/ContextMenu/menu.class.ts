import { reactive, Ref } from "vue"
import { ItemsMenuInterface, MenuInterface, MenuStateInterface } from "./menu.interface";


class Menu implements MenuInterface {
  name?: string
  itemsMenu: ItemsMenuInterface[];

  constructor(name: string, listItemsMenu: Array<ItemsMenuInterface>){
    this.name = name
    this.itemsMenu = listItemsMenu
  }
  addItem(payload: ItemsMenuInterface): void {
    this.itemsMenu.push(payload)
  }
}
class MenuState implements MenuStateInterface{
  isOpen: boolean;
  posX: number;
  posY: number;
  constructor(isOpen:boolean, posX: number, posY: number){
    this.isOpen = isOpen
    this.posX = posX
    this.posY = posY
  }
}
export  const createMenu = (name: string, listItems?: Array<ItemsMenuInterface>) : Menu => (
   new Menu(name, listItems ?? [])
)

export const createMenuState = (isOpen?:boolean, posX?: number, posY?: number): MenuState =>( 
  reactive<MenuState>(new MenuState(isOpen ?? false, posX ?? 0, posY ?? 0))
)

