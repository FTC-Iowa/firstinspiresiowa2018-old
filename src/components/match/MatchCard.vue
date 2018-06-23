<template>
    <md-card v-if="match"><!--class="md-primary" md-theme="green-card"-->
        
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">Match {{match.name}} <team-name number="1111"/></div>
                <div class="md-subhead">Red {{match.red.score.total}}-{{match.blue.score.total}}</div>
                <div class="columns">
                    Red Aliance
                    
                    <ul>
                        <li v-for="team in match.red.teams" :key="team.number">{{team.number}}</li>
                    </ul>
                </div>
                <div class="columns">
                    Blue Aliance
                    <ul>
                        <li v-for="team in match.blue.teams" :key="team.number">{{team.number}}</li>
                    </ul>
                </div>
            </md-card-header-text>
            <md-card-expand-trigger>
                <md-button class="md-icon-button">
                    <md-icon>keyboard_arrow_down</md-icon>
                </md-button>
            </md-card-expand-trigger>
        </md-card-header>

        <md-card-expand>
            <md-card-expand-content>
                <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
                </md-card-content>
            </md-card-expand-content>
            <!-- <md-card-actions md-alignment="right">
            </md-card-actions> -->

        </md-card-expand>
    </md-card>
</template>

<script>
import TeamName from '../utils/TeamName.vue'

export default {
    name: "MatchCard",
    props: ["match"],
    components: {TeamName},
    data: () => ({
        // match: {
        //     name: "Q-1",
        //     red: {
        //         teams: [{
        //                 number: 6596,
        //                 surrogate: false
        //             },{
        //                 number: 12835,
        //                 surrogate: false
        //             }
        //         ],
        //         score: {
        //             autonomous: 125,
        //             autobonus: 0,
        //             teleop: 86,
        //             endgame: 20,
        //             penalties: 0,
        //             total: 231
        //         }
        //     },
        //     blue: {
        //         teams: [{
        //                 number: 8813,
        //                 surrogate: false
        //             },{
        //                 number: 9968,
        //                 surrogate: false
        //             }
        //         ],
        //         score: {
        //             autonomous: 140,
        //             autobonus: 0,
        //             teleop: 56,
        //             endgame: 55,
        //             penalties: 0,
        //             total: 251
        //         }
        //     },
        //     starttime: {
        //         seconds: 1528569639,
        //         milliseconds: 0
        //     }
        // }
    })
}
</script>

<style lang="scss" scoped>
@import "~vue-material/dist/theme/engine";

@include md-register-theme("green-card", (
    primary: md-get-palette-color(red, 500)
));

@import "~vue-material/dist/base/theme";
@import "~vue-material/dist/components/MdCard/theme";

.md-card {
    margin: 8px;
    vertical-align: top;
}

.columns {
    width: 50%;
    float: left;
}

</style>
