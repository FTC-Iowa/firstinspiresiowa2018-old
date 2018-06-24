<template>
    <div>
        <match-card v-for="match in this.eventData.matches" :matchId="match" :key="match.name"/>
    </div>
</template>

<script>
import { db } from '../../main'
import MatchCard from '../match/MatchCard.vue'

export default {
    name: 'EventMatches',
    props: ["eventData"],
    components: {MatchCard},
    data () {
        return {
        matches: []
        }
    },
    firestore () {
        return {
        matches: db.collection('matches').orderBy("index", "desc")
        }
    }
}
</script>

<style>

</style>
