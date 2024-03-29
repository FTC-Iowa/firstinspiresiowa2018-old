import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        login (state, user) {
            state.user = user;
        },
        logout (state) {
            state.user = null;
        }
    }
})

export default store;
