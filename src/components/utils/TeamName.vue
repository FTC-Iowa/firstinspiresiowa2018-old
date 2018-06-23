<template>
    <span>
        {{ team.name }}
    </span>
</template>

<script>
import {db} from '../../main'
export default {
    name: "TeamName",
    props: ["number"],
    data: () => ({
        team: {name: "Team Name Unknown"}
    }),
    firestore() {
        return {
            team: db.collection("teams").doc(this.number)
        }
    }
}
</script>

<style>

</style>
