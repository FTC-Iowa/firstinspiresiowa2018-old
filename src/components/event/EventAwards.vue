<template>
    <div>
        <award-card v-for="award in awards" :award="award" />
    </div>
</template>

<script>
import AwardCard from '../award/AwardCard.vue'
import {db} from '../../main'

export default {
    name: "EventAwards",
    components: {
        AwardCard
    },
    data: () => ({
        awards: []
    }),
    firestore: () => ({
        awards: db.collection("awards")
    })
}
</script>

<style>

</style>
