<template>
    <div>
        <league-dashboard-card create="true"/>
        <league-dashboard-card v-for="league in leagues" :key="league.id" :league="league"/>
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
