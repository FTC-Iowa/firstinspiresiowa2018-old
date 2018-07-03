<template>
    <div>
        <!-- <md-empty-state md-icon="dashboard" md-label="Select Leagues" md-description="You do not have access to any leagues.  Please select leagues to administer.">
            <md-button class="md-primary md-raised">Select Leagues</md-button>
        </md-empty-state> -->
        <league-dashboard-card v-for="league in leagues" :key="league.id" :league="league"/>
        <league-dashboard-card create="true"/>
    </div>
</template>

<script>
import LeagueDashboardCard from './LeagueDashboardCard.vue'
export default {
    components: {
        LeagueDashboardCard
    },
    data: () => ({
        leagues: []
    }),
    firestore() {
        return {
            leagues: this.$db.collection('leagues').orderBy("name")
        }
    }

}
</script>

<style>

</style>
