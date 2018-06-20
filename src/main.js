// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//引入we-vue
import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入we-vue
Vue.use(WeVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
