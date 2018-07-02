<template>
    <div>
        <award-card v-for="award in awards" :award="award" :key="award.id" showevent="true">
            
        </award-card>
    </div>
</template>

<script>
import AwardCard from '../award/AwardCard.vue'
// import {db} from '../../main'
export default {
    name: 'TeamAwards',
    components: {
        AwardCard
    },
    data() {
        return{
            awards: []
        }
    },
    firestore() {
        return{
            awards: this.$db.collection("awards")
        }
    }
}
</script>

<style>

</style>
