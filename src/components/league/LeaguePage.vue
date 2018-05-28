<template>
    <div>
        <md-tabs class="md-primary md-elevation-3" md-alignment="left" :md-active-tab="'tab-'+$route.path.split('/').pop()">
            <md-tab id="tab-home" md-label="Home" to="./home"></md-tab>
            <md-tab id="tab-teams" md-label="Teams" to="./teams"></md-tab>
            <md-tab id="tab-events" md-label="Events" to="./events"></md-tab>
            <md-tab id="tab-rankings" md-label="Rankings" to="rankings"></md-tab>
        </md-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "LeaguePage"
}
</script>

<style>

</style>
