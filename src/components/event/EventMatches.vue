<template>
    <div>
        <match-card v-for="match in matches" :match="match" :key="match.name"/>
    </div>
</template>

<script>
import { db } from '../../main'
import MatchCard from '../match/MatchCard.vue'

export default {
    name: 'EventMatches',
    components: {MatchCard},
    data () {
        return {
        matches: []
        }
    },
    firestore () {
        return {
        matches: db.collection('matches')
        }
    }
}
</script>

<style>

</style>
