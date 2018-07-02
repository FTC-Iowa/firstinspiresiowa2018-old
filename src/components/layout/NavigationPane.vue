<template>
    <div>
        <md-toolbar class="md-transparent" md-elevation="0">
            <md-button class="md-icon-button" @click="hideSideBar">
                <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
            <span class="md-title">Navigation</span>
        </md-toolbar>

        <md-list>
            <router-link tag="md-list-item" to="/" @click.native="hideSideBar">
                <md-icon>home</md-icon>
                <span class="md-list-item-text">Home</span>
            </router-link>

            <router-link tag="md-list-item" to="/teams" @click.native="hideSideBar">
                <md-icon>people</md-icon>
                <span class="md-list-item-text">Teams</span>
            </router-link>

            <router-link tag="md-list-item" to="/events" @click.native="hideSideBar">
                <md-icon>event</md-icon>
                <span class="md-list-item-text">Events</span>
            </router-link>

            <router-link tag="md-list-item" to="/leagues" @click.native="hideSideBar">
                <md-icon>group_work</md-icon>
                <span class="md-list-item-text">Leagues</span>
            </router-link>

            <router-link tag="md-list-item" to="/blogs" @click.native="hideSideBar">
                <md-icon>description</md-icon>
                <span class="md-list-item-text">Blogs</span>
            </router-link>

            <md-divider />

            <router-link v-if="!user" tag="md-list-item" to="/login" @click.native="hideSideBar">
                <md-icon>person</md-icon>
                <span class="md-list-item-text">Login</span>
            </router-link>

            <router-link v-if="user" tag="md-list-item" to="/profile" @click.native="hideSideBar">
                <md-icon>person</md-icon>
                <span class="md-list-item-text">Profile</span>
            </router-link>

            <router-link v-if="user" tag="md-list-item" to="/eventdashboard" @click.native="hideSideBar">
                <md-icon>dashboard</md-icon>
                <span class="md-list-item-text">Event Dashboard</span>
            </router-link>
        </md-list>
    </div>
</template>

<script>
export default {
    data: () => ({
        // user: null
    }),
    computed: {
        user() {
            //console.log("firebase", firebase.auth().currentUser)
            //return firebase.auth().currentUser 
            return this.$store.state.user;
        }
    },
  methods: {
    hideSideBar() {
      this.$emit("close-sidebar");
    }
    },
    mounted() {

  }
};
</script>

<style>
</style>
