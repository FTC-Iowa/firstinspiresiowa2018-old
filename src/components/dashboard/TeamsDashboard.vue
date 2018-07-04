<template>
    <div>
        <team-dashboard-card create="true" />
        <team-dashboard-card v-for="team in teams" :key="team.id" :team="team" />
        
    </div>
</template>

<script>
import TeamDashboardCard from './TeamDashboardCard.vue'
export default {
    components: {
        TeamDashboardCard
    },
    data: () => ({
        teams: []
    }),
    firestore() {
        return {
            teams: this.$db.collection('teams')
        }
    }
}
</script>

<style>

</style>
