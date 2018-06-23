<template>
    <md-card>
        <md-card-header>
            <md-card-header-text>
            <div class="md-title">
                {{award.name}}
            </div>
            <div class="md-subhead" v-if="showevent">
                Iowa State Championship
            </div>
            </md-card-header-text>
            <md-card-expand-trigger>
                    <md-button class="md-icon-button">
                    <md-icon>keyboard_arrow_down</md-icon>
                    </md-button>
            </md-card-expand-trigger>
        </md-card-header>

        <md-card-content>
           <ul>
               <li v-for="team in award.teams" :key=team> 
                   {{team}} - <team-name v-bind:number="team"/>
               </li>
           </ul>
        </md-card-content>

        <md-card-expand>
            <md-card-expand-content>
                <md-card-content>
                    Judging Script 
                    <br>
                    <em>
                        {{award.judgescript}}
                    </em>
                </md-card-content>
            </md-card-expand-content>
        </md-card-expand>
    </md-card>
</template>

<script>
import TeamName from '../utils/TeamName.vue'
export default {
    name: "AwardCard",
    props: ["award", "showevent", ],
    components: {
        TeamName
    }
}
</script>

<style>

</style>
