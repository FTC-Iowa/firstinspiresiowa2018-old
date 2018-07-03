<template>
    <md-app class="dashboard">
        <md-app-drawer md-permanent="full" class="">
            <!-- <md-toolbar class="md-transparent" md-elevation="0">
                Dashboards
            </md-toolbar> -->

            <md-list>
                <md-list-item to="/dashboard/profile" class="md-accent">
                    User Profile
                </md-list-item>
                <md-list-item to="/dashboard/admin" class="md-accent">
                    Admin
                </md-list-item>
                <md-list-item to="/dashboard/league" class="md-accent">
                    Leagues
                </md-list-item>
                <md-list-item to="/dashboard/team" class="md-accent">
                    Teams
                </md-list-item>
                <md-list-item to="/dashboard/event" class="md-accent">
                    Events
                </md-list-item>

            </md-list>
        </md-app-drawer>
        <md-app-content class="md-scrollbar">
            <router-view />
        </md-app-content>
    </md-app>
</template>

<script>
// import {db} from '../../main'
export default {
    name: 'EventDashboardPage'
}
</script>

<style>
.dashboard {
    min-height: unset !important;
}

.md-app-drawer {
    max-width: 120px;
    background-color: red;
}

.md-app-content {
    overflow-wrap: break-word;
}

.md-list {
    border: 1px solid rgba(#000, .12);
    background: red;
}


</style>
