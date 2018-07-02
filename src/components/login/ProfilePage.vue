<template>
    <div>  
        <p>{{JSON.stringify(user)}}</p>

        <button @click="logout">Log Out</button>
    </div>
</template>

<script>
import {auth} from '../../main'

export default {
    name: 'ProfilePage',
    data: () => ({
        profile: null
    }),
    firestore() {
    },
    methods: {
        logout() {
            auth.signOut();
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
    },
    watch: {
        user (newUser) {
            console.log("new User Detected")
            if(newUser && newUser.uid) {
                var docRef = this.$db.collection("profiles").doc(newUser.uid);
                docRef.onSnapshot((doc) => {
                    if (doc.exists) {
                        console.log("profile data: ", doc.data());
                        this.profile = doc.data();
                    } else {
                        console.log("no profile data found");
                        this.profile = null;
                    }
                }, (error) => {
                    console.log("error getting profile data", error);
                    this.profile = null;
                })
                
            } else {
                this.$router.replace('/login');
            }
        }
    }
}
</script>

<style>

</style>
