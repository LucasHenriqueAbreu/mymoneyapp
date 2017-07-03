// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueLocalStorage from 'vue-localstorage'


Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(VueLocalStorage)



Vue.config.productionTip = false
// Vue.http.options.root = process.env.API
Vue.http.options.root = 'http://localhost:3000/api/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
