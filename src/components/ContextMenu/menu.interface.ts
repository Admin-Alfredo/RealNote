import { ReactiveEffect, Ref } from "vue";


export interface MenuStateInterface {
  isOpen: boolean;
  posX: number;
  posY: number;
}
export interface MenuInterface {
  itemsMenu: Array<ItemsMenuInterface>;
  addItem(payload: ItemsMenuInterface): void;
}
export interface SubMenu extends MenuInterface {
  label: string
}
export interface ItemsChildrenMenuInterface extends ItemsMenuInterface {
  title: string
}

export interface ItemsMenuInterface {
  children?: Array<ItemsChildrenMenuInterface>;
  icon?: string;
  label?: string;
  submenu?: MenuInterface;
  click?: Function
}

