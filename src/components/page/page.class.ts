import { PageInterface } from "./page.interface";
import {v4 as uuidv4} from 'uuid'
export class Page implements PageInterface {
  contentText?: string | undefined;
  contentHTML?: string | undefined;
  statePage?: string | undefined;
  isFocus?: boolean | undefined;
  _id: string;
  constructor(){
    this._id = uuidv4()
  }
}
export const createPage = (): Page => (new Page())


