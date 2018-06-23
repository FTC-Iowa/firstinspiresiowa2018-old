<template>
    <!-- <div> {{ $route.params.id }} </div> -->
    <div>
        <team-basic-info-card>
        </team-basic-info-card>

        <team-extra-info-card>
        </team-extra-info-card>

        <team-social-media-card>
        </team-social-media-card>
    </div>
</template>

<script>
import TeamBasicInfoCard from '../team/TeamBasicInfoCard.vue'
import TeamExtraInfoCard from '../team/TeamExtraInfoCard.vue'
import TeamSocialMediaCard from '../team/TeamSocialMediaCard.vue'

export default {
    name: "TeamHome",
    components: {
        TeamBasicInfoCard,
        TeamExtraInfoCard,
        TeamSocialMediaCard
    }
}
</script>

<style>

</style>
