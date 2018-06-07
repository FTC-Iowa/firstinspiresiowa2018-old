<template>

  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary" v-on:SearchExpanded="doSearchExpanded">
        <div class="color-strip md-elevation-5">
          <table cellspacing=0px cellpadding=0px >
            <tr>
              <td style="background-color:#00a651"></td>
              <td style="background-color:#ed1c24"></td>
              <td style="background-color:#f57e25"></td>
              <td style="background-color:#009cd7"></td>
            </tr>
          </table>
        </div>

        <md-button class="md-icon-button" @click="showNavigation=true">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title" v-show="hideOnExpand === false || searchExpanded === false" ref="title">FIRST Inspires Iowa</span>

        <div class="md-toolbar-section-end">
          <!-- <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button> -->
          <searchButton v-on:SearchExpanded="doSearchExpanded"></searchButton>
        </div>

      </md-app-toolbar>

      <md-app-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Navigation</span>
        </md-toolbar>

        <md-list>
          <router-link tag="md-list-item" to="/" @click.native="hideSideBar">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </router-link>

          <router-link tag="md-list-item" to="/teams" @click.native="hideSideBar">
            <md-icon>people</md-icon>
            <span class="md-list-item-text">Teams</span>
          </router-link>

          <router-link tag="md-list-item" to="/events" @click.native="hideSideBar">
            <md-icon>event</md-icon>
            <span class="md-list-item-text">Events</span>
          </router-link>

          <router-link tag="md-list-item" to="/leagues" @click.native="hideSideBar">
            <md-icon>rowing</md-icon>
            <span class="md-list-item-text">Leagues</span>
          </router-link>

          <router-link tag="md-list-item" to="/blogs" @click.native="hideSideBar">
            <md-icon>description</md-icon>
            <span class="md-list-item-text">Blogs</span>
          </router-link>

        </md-list>
      </md-app-drawer>

      <md-app-content id="content-pane">
        <router-view id="main-view"></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>



<script>
//import HelloWorld from './components/HelloWorld.vue'
import SearchButton from './components/search/SearchButton.vue'
export default {
  name: 'app',
  components: {
    SearchButton
  },
  data: () => ({
    showNavigation: false,
    showSidepanel: false,
    searchExpanded: false,
    hideOnExpand: true,
    pageWidth: 100,
    titleRightEdge: 100
  }),
  methods: {
    doSearchExpanded(isExpanded) {
      console.log("Search expanded event:", isExpanded);
      this.searchExpanded = isExpanded;

    },
    calculateOnResize() {
        this.pageWidth = window.innerWidth;
        if ( this.pageWidth > this.titleRightEdge + 300 ) {
          this.hideOnExpand = false;
        } else {
          this.hideOnExpand = true;
        }
        // this.numChildren = this.$refs.tabBar.$children.length - 1;
        // console.log("width=", this.pageWidth);
        // console.log("bar", this.numChildren)
        // if (this.numChildren * 100 > this.pageWidth) {
        //     this.hasNavigationScroll = true;
        // } else {
        //     this.hasNavigationScroll = false;
        // }
    },
    hideSideBar() {
      this.showNavigation = false;
    }
  },
  mounted() {
      this.$nextTick(() => {
          this.titleRightEdge = this.$refs.title.offsetLeft + this.$refs.title.offsetWidth;
          this.calculateOnResize();
          window.addEventListener('resize', this.calculateOnResize);
      })
  },
  beforeDestroy() {
      window.removeEventListener('resize', this.calculateOnResize);
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#main-view {
  height: 100%;
}

#content-pane {
  padding: 0px;
  border: 0px;
}

.md-app {
  min-height: 100vh;
}

.md-app-toolbar {
  padding-left: 0;
  padding-right: 0;
  padding-top: 10px;
}
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.color-strip {
  width: 100%;
  height: 10px;
  position:absolute;
  top: 0px;
}

.color-strip table {
  width: 100%;
  height: 10px;
}

.color-strip td {
  width: 25%;
  height: 10px;
  padding: 0;
  border-width: 0;
}

</style>
