<template>
    <div>
        <md-tabs class="md-primary" md-alignment="left" :md-active-tab="'tab-'+$route.path.split('/').pop()">
            <md-tab id="tab-home" md-label="Home" to="./home"></md-tab>
            <md-tab id="tab-matches" md-label="Matches" to="./matches"></md-tab>
            <md-tab id="tab-awards" md-label="Awards" to="./awards"></md-tab>
        </md-tabs>
        <router-view></router-view>
    </div>     
</template>

<script>
export default {
    name: "TeamPage"
}
</script>

<style>

</style>
