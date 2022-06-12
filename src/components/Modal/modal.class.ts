import { reactive } from "vue";

export class ModalState {
  isOpen: boolean;
  overlay: boolean;
  width: number;
  minHeight: number;
  isPixal: boolean;
  cancelButton: boolean 
  constructor(isOpen: boolean, overlay: boolean, width: number, minHeight: number, isPixal: boolean, cancelButton: boolean) {
    this.isOpen = isOpen
    this.overlay = overlay
    this.width = width
    this.minHeight = minHeight
    this.isPixal = isPixal
    this.cancelButton = cancelButton
  }
}

export const createModalState = (isOpen?: boolean, overlay?: boolean, width?: number, minHeight?: number, isPixal?: boolean, cancelButton?: boolean): ModalState => (
  reactive<ModalState>(new ModalState(isOpen ?? false, overlay ?? true, width ?? 75, minHeight ?? 50, isPixal ?? false, cancelButton ?? true))
)
