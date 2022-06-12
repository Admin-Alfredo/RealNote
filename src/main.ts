import { createApp } from 'vue'
import App from './App.vue'
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import store, { key } from './store/index'
dom.watch()
library.add(far, fas)

// library.add(faBeer, faHatWizard, faPhone)
createApp(App)
  // .use(store, key)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
