<template>
    <div>
        <article v-for="(location, idx) in locations" :key="idx">
            <img :src="location.images">
            <h1>{{ location.name }}</h1>
        </article>
    </div>
</template>

<script>
import { db } from '../../main'

export default {
    name: 'EventMatches',
    data () {
        return {
        locations: []
        }
    },
    firestore () {
        return {
        locations: db.collection('locations').orderBy('createdAt')
        }
    }
}
</script>

<style>

</style>
