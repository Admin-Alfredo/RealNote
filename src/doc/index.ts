import { Page, createPage } from "../components/page/page.class";
import { reactive } from 'vue'
 export class Doc {
  name: string 
  pages:  Array<Page> = reactive<Array<Page>>([])
  private createdAt: Date = new Date()
  private consumer: string
  constructor(name: string, consumer: string , pages: (Array<Page> | Page)){
    this.consumer = consumer;
    this.name = name
    this.pages = reactive<Array<Page>>([...this.pages, createPage()])
  }
  addPage(): void {
    const page = createPage()
    page.contentHTML =  `[new page ${this.pages.length}]`
    this.pages = reactive<Array<Page>>([...this.pages, page])
  }
  removePage(page: Page): void{
    this.pages = reactive<Array<Page>>(this.pages.filter(_page => _page._id !== page._id))
  }
  getAllPages(){
    return this.pages
  }
}

export const createDocument = (name?: string, consumer?: string, pages?: Page): Doc => (
  new Doc(name ?? 'new document _', consumer ?? 'Admiro Alfredo', pages ?? [])
)
