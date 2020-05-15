import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = true

Vue.use(ElementUI);
Vue.use(dataV);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
