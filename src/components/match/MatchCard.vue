<template>
    <md-card v-if="match"><!--class="md-primary" md-theme="green-card"-->
        
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">Match {{match.name}}: Red {{match.red.score.total}}-{{match.blue.score.total}}</div>
            </md-card-header-text>
            <md-button class="md-icon-button" v-on:click="showdetails = !showdetails">
                <md-icon>keyboard_arrow_down</md-icon>
            </md-button>
        </md-card-header>

        <md-card-content>
            <table>
                <thead>
                    <tr>
                        <th/>
                        <th>Red Aliance</th>
                        <th>Blue Aliance</th>
                    </tr>
                </thead>
                <tbody id="teams">
                    <tr>
                        <th>Teams</th>
                        <td>
                            <span v-if="match.red.teams[0]">
                                <router-link :to="'/team/' + match.red.teams[0].number + '/home'">{{match.red.teams[0].number}}</router-link>
                            </span>
                            <span v-if="match.red.teams[1]">
                                , <router-link :to="'/team/' + match.red.teams[1].number + '/home'">{{match.red.teams[1].number}}</router-link>
                            </span>
                            <span v-if="match.red.teams[2]">
                                , <router-link :to="'/team/' + match.red.teams[2].number + '/home'">{{match.red.teams[2].number}}</router-link>
                            </span>
                        </td>
                        <td>
                            <span v-if="match.blue.teams[0]">
                                <router-link :to="'/team/' + match.blue.teams[0].number + '/home'">{{match.blue.teams[0].number}}</router-link>
                            </span>
                            <span v-if="match.blue.teams[1]">
                                , <router-link :to="'/team/' + match.blue.teams[1].number + '/home'">{{match.blue.teams[1].number}}</router-link>
                            </span>
                            <span v-if="match.blue.teams[2]">
                                , <router-link :to="'/team/' + match.blue.teams[2].number + '/home'">{{match.blue.teams[2].number}}</router-link>
                            </span>
                        </td>
                    </tr>
                </tbody>
                <tbody id="details" v-if="showdetails">
                    <tr>
                        <th>Auto</th>
                        <td>{{match.red.score.autonomous}}</td>
                        <td>{{match.blue.score.autonomous}}</td>
                    </tr>
                    <tr>
                        <th>Tele-Op</th>
                        <td>{{match.red.score.teleop}}</td>
                        <td>{{match.blue.score.teleop}}</td>
                    </tr>
                    <tr>
                        <th>End Game</th>
                        <td>{{match.red.score.endgame}}</td>
                        <td>{{match.blue.score.endgame}}</td>
                    </tr>
                    <tr>
                        <th>Penalties</th>
                        <td>{{match.red.score.penalties}}</td>
                        <td>{{match.blue.score.penalties}}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>{{match.red.score.total}}</td>
                        <td>{{match.blue.score.total}}</td>
                    </tr>
                </tbody>
            </table>
        </md-card-content>
    </md-card>
</template>

<script>
import TeamName from '../utils/TeamName.vue'

export default {
    name: "MatchCard",
    props: ["match"],
    components: {TeamName},
    data: () => ({
        showdetails: false
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

.md-card-header {
    padding: 8px;
}

.md-card-content {
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 8px;
    padding-top: 0px;
}

table {
    width: 100%;
    text-align: center;
    td {
        width: 50%;
    }
}

</style>
