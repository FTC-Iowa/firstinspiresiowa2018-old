<template>
    <md-card v-if="match" :id="matchId"><!--class="md-primary" md-theme="green-card"-->
        <md-ripple md-centered ref="ripple">
        <md-card-header :class="titleClasses">
            <md-card-header-text>
                <div class="md-title">{{match.name}}{{winnerString}}</div>
            </md-card-header-text>
            <md-button class="md-icon md-dense">
                <md-icon>notifications_none</md-icon>
                <md-tooltip md-direction="top">Notifications</md-tooltip>
            </md-button>
            <md-button v-if="this.match.red.score" class="md-icon md-dense" @click="share()">
                <md-icon>share</md-icon>
                <md-tooltip md-direction="top">Share</md-tooltip>
            </md-button>
            <md-button v-if="this.match.red.score" class="md-icon-button md-dense" :class="isrotated" v-on:click="showdetails = !showdetails">
                <md-icon>keyboard_arrow_down</md-icon>
                <md-tooltip md-direction="top">More Details</md-tooltip>
            </md-button>
        </md-card-header>

        <md-card-content>
            <table cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th class="firstcol"/>
                        <th >Red Aliance</th>
                        <th >Blue Aliance</th>
                    </tr>
                </thead>
                <tbody id="teams">
                    <tr>
                        <th>Teams</th>
                        <td >
                            <span v-if="match.red.teams[0]">
                                <router-link :to="'/team/' + match.red.teams[0].number + '/home'">
                                    {{match.red.teams[0].number}}
                                    <span v-if="match.red.teams[0].surrogate">*</span>
                                </router-link>
                            </span>
                            <span v-if="match.red.teams[1]">
                                , <router-link :to="'/team/' + match.red.teams[1].number + '/home'">
                                    {{match.red.teams[1].number}}
                                    <span v-if="match.red.teams[1].surrogate">*</span>
                                </router-link>
                            </span>
                            <span v-if="match.red.teams[2]">
                                , <router-link :to="'/team/' + match.red.teams[2].number + '/home'">
                                    {{match.red.teams[2].number}}
                                    <span v-if="match.red.teams[2].surrogate">*</span>
                                </router-link>
                            </span>
                        </td>
                        <td >
                            <span v-if="match.blue.teams[0]">
                                <router-link :to="'/team/' + match.blue.teams[0].number + '/home'">
                                    {{match.blue.teams[0].number}} 
                                    <span v-if="match.blue.teams[0].surrogate">*</span>
                                </router-link>
                            </span>
                            <span v-if="match.blue.teams[1]">
                                , <router-link :to="'/team/' + match.blue.teams[1].number + '/home'">
                                    {{match.blue.teams[1].number}}
                                    <span v-if="match.blue.teams[1].surrogate">*</span>
                                </router-link>
                            </span>
                            <span v-if="match.blue.teams[2]">
                                , <router-link :to="'/team/' + match.blue.teams[2].number + '/home'">
                                    {{match.blue.teams[2].number}}
                                    <span v-if="match.blue.teams[2].surrogate">*</span>
                                </router-link>
                            </span>
                        </td>
                    </tr>
                </tbody>
                <tbody id="details" v-if="showdetails">
                    <tr>
                        <th>Auto</th>
                        <td >{{match.red.score.autonomous}}</td>
                        <td >{{match.blue.score.autonomous}}</td>
                    </tr>
                    <tr>
                        <th>Tele-Op</th>
                        <td >{{match.red.score.teleop}}</td>
                        <td >{{match.blue.score.teleop}}</td>
                    </tr>
                    <tr>
                        <th>End Game</th>
                        <td >{{match.red.score.endgame}}</td>
                        <td >{{match.blue.score.endgame}}</td>
                    </tr>
                    <tr>
                        <th>Penalties</th>
                        <td >{{match.red.score.penalties}}</td>
                        <td >{{match.blue.score.penalties}}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td style="font-weight:bold;">{{match.red.score.total}}</td>
                        <td style="font-weight:bold;">{{match.blue.score.total}}</td>
                    </tr>
                </tbody>
            </table>
        </md-card-content>
        </md-ripple>
        <!-- <div>{{error}}</div> -->
    </md-card>
</template>

<script>
import TeamName from '../utils/TeamName.vue'
import {db} from '../../main'


export default {
    name: "MatchCard",
    props: ["matchId"],
    components: {TeamName},
    data: () => ({
        showdetails: false,
        match: null, 
        error: "error",
        triggerRipple: false
    }),
    firestore () {
        return {
            match: db.collection('matches').doc(this.matchId)
        }
    },
    computed :{
        isrotated() {
            return {
                'rotate': this.showdetails,
            }
        },
        titleClasses() {
            return {
                'red-won': this.match.red.score && this.match.red.score.total > this.match.blue.score.total,
                'blue-won': this.match.red.score && this.match.blue.score.total > this.match.red.score.total,
                'tie-won': this.match.red.score && this.match.red.score.total === this.match.blue.score.total,
                'not-played': !this.match.red.score
            }
        },
        winnerString() {
            if ( this.match.red.score && this.match.blue.score ) {
                if(this.match.red.score.total > this.match.blue.score.total) {
                    return ": Red " + this.match.red.score.total + "-" + this.match.blue.score.total;
                } else if(this.match.blue.score.total > this.match.red.score.total) {
                    return ": Blue " + this.match.red.score.total + "-" + this.match.blue.score.total;
                } else {
                    return ": Tie " + this.match.red.score.total + "-" + this.match.blue.score.total;
                }
            } else {
                return "";
            }
        },
    },
    watch: {
        $route: function(route) {
            if(route.hash === "#" + this.matchId){
                this.doRipple();
            }
        }
    },
    methods: {
        share() {
            if (navigator.share) {
                navigator.share({
                    title: this.match.name,
                    text: this.match.name + this.winnerString,
                    url: "https://firstinspiresiowa2018.firebaseapp.com" + this.$route.path + "#" + this.matchId
                }).then (() => this.error = "Successful share")
                .catch((error) => this.error = "error sharing: " + error);
            } else {
                this.error = "Sharring not available";
            }
        },
        doRipple() {
            this.$refs.ripple.startRipple({type: "router"});
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            if( this.$route.hash === "#" + this.matchId){
                this.triggerRipple = true;
            }
        })
    },
    updated: function() {
        if(this.triggerRipple) {
            this.triggerRipple = false;
            this.doRipple();
        }
    }
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
    margin: 16px;
    vertical-align: top;
}

.md-title {
    margin-top: 0 !important;
}

.rotate {
    transform: rotate(180deg);
}

.md-card-header {
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 8px;
    padding-right: 8px;
}

.md-card-content {
    // padding-left: 8px;
    // padding-right: 8px;
    // padding-bottom: 8px;
    // padding-top: 0px;
    padding: 0px;
}

table {
    width: 100%;
    text-align: center;
    tr {
        border-width: 0;
        border: none;
        padding: 0;
        height: 100%;
        th:first-child {
            background: #BBB;
        }
        th:nth-child(2){
            background: red;
        }
        td:first-of-type {
            background: red;
            a {
                color: white;
            }
        }
        th:nth-child(3) {
            background: #3399ff;
        }
        td:last-of-type {
            background: #3399FF;
            a {
                color: white;
            }
        }
        td, th {
            width: 33%;
            padding: 0;
            padding-left: 8px;
            padding-right: 8px;
        }
    }

}

.not-played {
    background-color: #ddd;
}

.tie-won {
    background-color: #bbb;
}

.red-won {
    background-color: red;
}

.blue-won {
    background-color: #3399ff;
}


</style>
