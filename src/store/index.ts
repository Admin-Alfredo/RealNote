// import vuex, { createStore, Store } from 'vuex'
// import vue, { InjectionKey } from 'vue'
// import { createDoc, Doc } from '../doc'

import { reactive } from "vue";
import { Doc, createDocument } from "../doc";

// export interface State {
//   count: 0;
//   doc: (Doc | null)
// }
// export const key: InjectionKey<Store<State>> = Symbol()

// export default createStore<State>({
//   state: {
//     count: 0,
//     doc: null
//   },
//   mutations: {
//     increment(state, payload) {
//       state.count += payload
//     },
//     createDoc(state) { state.doc = createDoc() }
//   },
//   actions: {
//     increment(context) {
//       context.commit('increment', 2)
//     },
//     createDoc({ commit }) { commit('createDoc') }
//   }
// })


export const globalState = reactive<{
  docActived:( Doc | null);
  addPage(): void;
  createDoc(name: string): void;
}>({
  docActived: null,
  createDoc(name: string){ this.docActived = createDocument(name) },
  addPage(){ this.docActived?.addPage() }
})