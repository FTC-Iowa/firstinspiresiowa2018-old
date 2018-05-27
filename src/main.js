import Vue from 'vue'

// Vue Material Library
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial);

// Dynamic routes
import router from  './routes.js'

// Main app entry point
import App from './App.vue'
//import Home from './components/Home.vue'



Vue.config.productionTip = false

//Vue.component('my-component', Home);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
