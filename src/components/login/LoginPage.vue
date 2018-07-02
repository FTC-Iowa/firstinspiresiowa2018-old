<template>
    <div>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
    </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import {auth, authui} from '../../main'

export default {
    name: "LoginPage",
    data: () => ({
        email: null,
        password: null
    }),
    methods: {
    },
    mounted () {
        var uiConfig = {
            signInSuccessUrl: '/profile',
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    return true;
                },
                uiShown: function() {
                    document.getElementById('loader').style.display = 'none';
                }
            },
            signInFlow: 'popup',
            signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID
            ]
        }
        // authui.signIn();
        authui.reset();
        authui.start('#firebaseui-auth-container', uiConfig)
        
    }
}
</script>

<style lang="scss">
@import url(../../../node_modules/firebaseui/dist/firebaseui.css);
</style>
