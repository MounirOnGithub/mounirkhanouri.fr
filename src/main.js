import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from "./router";
import '@babel/polyfill'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(fab)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
