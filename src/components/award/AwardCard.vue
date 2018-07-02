<template>
    <md-card v-if="award">
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
            <dl v-if="award.ordered">
                <div v-if="award.teams[0]">
                    <dt>1st:</dt>
                    <dd>{{award.teams[0]}} - <team-name :number="award.teams[0]"/></dd>
                </div>
                <div v-if="award.teams[1]">
                    <dt>2nd:</dt>
                    <dd>{{award.teams[1]}} - <team-name :number="award.teams[1]"/></dd>
                </div>
                <div v-if="award.teams[2]">
                    <dt>3rd:</dt>
                    <dd>{{award.teams[2]}} - <team-name :number="award.teams[2]"/></dd>
                </div>
                <div v-if="award.teams[3]">
                    <dt>4th:</dt>
                    <dd>{{award.teams[3]}} - <team-name :number="award.teams[3]"/></dd>
                </div>
            </dl>
            <dl v-else>
                <div v-if="award.teams[0]">
                    <dt>Winner:</dt>
                    <dd>{{award.teams[0]}} - <team-name :number="award.teams[0]"/></dd>
                </div>
                <div v-if="award.teams[1]">
                    <dt>Finalists:</dt>
                    <dd>{{award.teams[1]}} - <team-name :number="award.teams[1]"/></dd>
                    <dd v-if="award.teams[2]">{{award.teams[2]}} - <team-name :number="award.teams[2]"/></dd>
                    <dd v-if="award.teams[3]">{{award.teams[3]}} - <team-name :number="award.teams[3]"/></dd>
                </div>
            </dl>
            <div class="img-holder" v-if="imgurl">
                <img :src="imgurl" alt="astromechs"/>
           </div>
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
// import {storage} from '../../main'

export default {
    name: "AwardCard",
    props: ["award", "showevent", ],
    components: {
        TeamName
    },
    data: () => ({
        imgurl: ""
    }),
    watch: {
        award: {
            immediate: true,
            handler (newVal) {
                if(newVal.picture) {
                    this.$storage.ref(newVal.picture).getDownloadURL().then((url) => this.imgurl = url);
                }
            }   
        }
    }
}
</script>

<style lang="scss">
.md-card-content {
    display:flex;
    justify-content: space-between;
    flex-flow: row wrap;
    dl {
        min-width: 300px;
        dt {
            font-weight: bold;
        }
    }
    .img-holder {
        max-width: 200px;
    }
}

</style>
