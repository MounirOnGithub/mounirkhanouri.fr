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
import i18n from './i18n'

library.add(fas)
library.add(fab)

Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
