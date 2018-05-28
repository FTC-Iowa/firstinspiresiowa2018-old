<template>
    <div class="">
        <md-tabs class="md-primary md-elevation-3" md-alignment="left" :md-active-tab="'tab-'+$route.path.split('/').pop()">
            <md-tab id="tab-home" md-label="Home" to="./home"></md-tab>
            <md-tab id="tab-schedule" md-label="Schedule" to="./schedule"></md-tab>
            <md-tab id="tab-teams" md-label="Teams" to="./teams"></md-tab>
            <md-tab id="tab-matches" md-label="Matches" to="matches"></md-tab>
            <md-tab id="tab-results" md-label="Results" to="results"></md-tab>
            <md-tab id="tab-rankings" md-label="Rankings" to="rankings"></md-tab>
            <md-tab id="tab-inspections" md-label="Inspections" to="inspections"></md-tab>
            <md-tab id="tab-awards" md-label="Awards" to="awards"></md-tab>
            <md-tab id="tab-twitter" md-label="Twitter" to="twitter"></md-tab>
        </md-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "EventPage"
}
</script>

<style>

</style>
