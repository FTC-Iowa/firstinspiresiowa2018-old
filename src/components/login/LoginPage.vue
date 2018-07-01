<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" placeholder="Email"><br>
        <input type="password" placeholder="Password"><br>
        <button>Login</button><br>

        <span>Don't have an account?  Create one <router-link to="/signup">here</router-link></span>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    data: () => ({

    }),
    methods: {

    }
}
</script>

<style>

</style>
