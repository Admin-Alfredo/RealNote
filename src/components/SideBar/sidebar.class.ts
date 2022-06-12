import { reactive } from "vue";


export class SideBarState{
  isOpen: boolean;
  width: number
  readonly maxWidth: number = 350
  readonly minWidth: number = 0
  constructor(isOpen:boolean, width: number){
    this.isOpen = isOpen
    this.width = width
  }
}

export const createSideBarState = (isOpen?: boolean, width?: number): SideBarState => (
  reactive<SideBarState>(new SideBarState(isOpen ?? false, width ?? 0))
)