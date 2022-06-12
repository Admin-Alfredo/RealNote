import { reactive } from "vue"



export class PopupState {
  isOpen: boolean
  posX: number
  posY: number
  constructor (isOpen: boolean, posX: number, posY: number){
    this.isOpen = isOpen
    this.posX = posX
    this.posY = posY
  }
}
export const createPopupState = (isOpen?: boolean, posX?: number, posY?: number): PopupState => {
  return reactive<PopupState>(new PopupState(isOpen ?? false, posX ?? 0, posY ?? 0))
}