import Vue from 'vue'

// Vue Material Library
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial);

// GUN
// import VueGun from 'vue-gun';
// import Gun from 'gun';
// const gunPeers = [
//   "http://localhost:5000/gun"
// ];
// const gun = new Gun(gunPeers);
// Vue.use(VueGun, {
//   gun: gun
// });

// Firebase
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
Vue.use(VueFire);
firebase.initializeApp ({
    apiKey: "AIzaSyDQOhAqHtOOjWetSbzfvdlpXB_RMtfb_NU",
    authDomain: "firstinspiresiowa2018.firebaseapp.com",
    databaseURL: "https://firstinspiresiowa2018.firebaseio.com",
    projectId: "firstinspiresiowa2018",
    storageBucket: "firstinspiresiowa2018.appspot.com",
    messagingSenderId: "42095702430"
  }
)
const firestore = firebase.firestore();
firestore.settings({timestampsInSnapshots: true});
export const db = firestore;

// Dynamic routes
import router from  './routes.js'

// Main app entry point
import App from './App.vue'

Vue.config.productionTip = false

//Vue.component('my-component', Home);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
