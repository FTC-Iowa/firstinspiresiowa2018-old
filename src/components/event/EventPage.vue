<template>
    <div class="">
        <md-content id="tab-container" class="md-primary">
            <!-- <div id="left-button-div" class="button-div"> -->
                <md-button class="md-icon-button md-dense button navButtonRight" v-if="hasNavigationScroll" @click="navigationScrollLeft">
                    <md-icon>chevron_left</md-icon>
                </md-button>
            <!-- </div> -->
            <div id="tab-div" :class="tabDivClasses">
                <div class="scroll" id="scroll" ref="tabContainer">
                <md-tabs class="md-primary md-elevation-3" md-alignment="left" :md-active-tab="'tab-'+$route.path.split('/').pop()" ref="tabBar">
                    <md-tab id="tab-home" md-label="Home" to="./home"></md-tab>
                    <md-tab id="tab-schedule" md-label="Schedule" to="./schedule"></md-tab>
                    <md-tab id="tab-teams" md-label="Teams" to="./teams"></md-tab>
                    <md-tab id="tab-matches" md-label="Matches" to="matches"></md-tab>
                    <md-tab id="tab-results" md-label="Results" to="results"></md-tab>
                    <md-tab id="tab-rankings" md-label="Rankings" to="rankings"></md-tab>
                    <md-tab id="tab-inspections" md-label="Inspections" to="inspections"></md-tab>
                    <md-tab id="tab-awards" md-label="Awards" to="awards"></md-tab>
                    <md-tab id="tab-twitter" md-label="Twitter" to="twitter"></md-tab>
                </md-tabs>
                </div>
            </div>
            <!-- <div id="right-button-div" class="button-div"> -->
                <md-button class="md-icon-button  md-dense button navButtonLeft" v-if="hasNavigationScroll" @click="navigationScrollRight">
                    <md-icon>chevron_right</md-icon>
                </md-button>
            <!-- </div> -->
        </md-content>

        <p> page width = {{ pageWidth }}, numChildren = {{ numChildren }} </p>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "EventPage",
    data: () => ({
        hasNavigationScroll: false,
        isNavigationOnStart: true,
        isNavigationOnEnd: false,
        pageWidth: 100,
        numChildren: 5
    }),
    computed :{
        tabDivClasses() {
            return {
                'without-scroll': !this.hasNavigationScroll,
                'with-scroll': this.hasNavigationScroll
            }
        }
    },
    methods: {
        navigationScrollLeft() {
            this.$refs.tabContainer.scrollLeft -= 50;
        },
        navigationScrollRight() { 
            this.$refs.tabContainer.scrollLeft += 50;
        },
        calculateOnResize() {
            this.pageWidth = window.innerWidth;
            this.numChildren = this.$refs.tabBar.$children.length - 1;
            console.log("width=", this.pageWidth);
            console.log("bar", this.numChildren)
            if (this.numChildren * 100 > this.pageWidth) {
                this.hasNavigationScroll = true;
            } else {
                this.hasNavigationScroll = false;
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.calculateOnResize();
            window.addEventListener('resize', this.calculateOnResize);
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.calculateOnResize);
    }
}
</script>

<style lang="scss">

#tab-container {
    width: 100%;
    height: 48px;
}

#tab-div {
    display:inline-block;
    height: 48px;
    overflow-y: hidden;
    &.without-scroll {
        width: 100%;
    }
    &.with-scroll {
        width: calc(100% - 84px);
    }
}



.button {
    margin-left: 0;
    margin-right: 0;
    margin-top: 8px;
}

.scroll {
    overflow-x: auto;
}

.md-tabs-navigation {
    //overflow-x:visible;
    .md-button {
        min-width: 100px ;
        width: 100px;
    }
}

.md-tabs {
    box-shadow: unset;
}

.navButtonRight {
    margin-right: 10px;
}

.navButtonLeft {
    margin-left: 10px;
}

</style>
