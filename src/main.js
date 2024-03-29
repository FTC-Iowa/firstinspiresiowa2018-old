import Vue from 'vue'

import store from './store.js'
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
import 'firebase/storage'
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
// export const db = firestore;
const firestorage = firebase.storage();
// export const storage = firestorage;
const fireauth = firebase.auth();
export const auth = fireauth;

import firebaseui from 'firebaseui'
const fireauthui = new firebaseui.auth.AuthUI(auth);
export const authui = fireauthui;
Vue.prototype.$db = firestore;
Vue.prototype.$storage = firestorage;


auth.onAuthStateChanged((user) => {
  if(user) {
    //user is signed in
    //console.log("User is signed in", JSON.stringify(user));
    store.commit('login',user);
  } else {
    console.log("User is logged out");
    store.commit('logout');
  }
})

// Dynamic routes
import router from  './routes.js'

// Google Analytics
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-111934327-2',
  router
  // @todo add additional features to better track what page is viewed
})

// Main app entry point
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log("login success")
      } else {
        console.log("need to login")
      }
    })
  }
}).$mount('#app')
