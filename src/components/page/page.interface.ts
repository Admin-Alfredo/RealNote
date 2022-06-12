
export declare interface PageInterface {
  contentText?: string
  contentHTML?: string
  statePage?: string
  isFocus?: boolean
  _id: string
}

export declare interface PayloadEventOpenMenu {
  event: (PointerEvent | MouseEvent)
  x: number;
  y: number
}
  