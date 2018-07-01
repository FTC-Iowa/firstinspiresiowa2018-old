<template>
    <div>
    <div class="sign-up" id="firebaseui-auth-container">
        <!-- <h3>Create new account</h3>
        <input type="text" placeholder="Email" v-model="email"><br>
        <input type="text" placeholder="Password" v-model="password"><br>
        <button v-on:click="signUp">Sign Up</button> -->
    </div></div>
</template>

<script>
// var firebase = require('firebase')
// var firebaseui = require('firebaseui')
import firebase from 'firebase'
import firebaseui from 'firebaseui'

export default {
    name: "SignUpPage",
    data: () => ({
        email: null,
        password: null
    }),
    methods: {
    },
    mounted () {
        var uiConfig = {
            signInSuccessUrl: '/success',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ]
        }
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig)
    }
}
</script>

<style lang="scss">
@import url(../../../node_modules/firebaseui/dist/firebaseui.css);
</style>
