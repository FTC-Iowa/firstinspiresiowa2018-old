<template>
    <div>
        <match-card v-for="match in matches" :match="match" :key="match.name"/>
        <!-- <match-card />
        <match-card />
        <match-card /> -->

        <!-- <article v-for="(location, idx) in locations" :key="idx">
            <img :src="location.images">
            <h1>{{ location.name }}</h1>
        </article> -->
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
