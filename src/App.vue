<template>

  <div class="page-container md-layout-row">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar id="toolbar" class="md-primary" v-on:SearchExpanded="doSearchExpanded">
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
        <router-link class="md-title" v-show="hideOnExpand === false || searchExpanded === false" ref="title" to="/">FIRST Inspires Iowa</router-link>

        <div class="md-toolbar-section-end">
          <!-- <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button> -->
          <searchButton v-on:SearchExpanded="doSearchExpanded"></searchButton>
        </div>

      </md-app-toolbar>

      <md-app-drawer :md-active.sync="showNavigation">
        <navigation-pane v-on:close-sidebar="showNavigation = false"/>
      </md-app-drawer>

      <md-app-content id="content-pane">
        <router-view id="main-view" class="md-scrollbar" tag="md-app-content"></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>



<script>
//import HelloWorld from './components/HelloWorld.vue'
import SearchButton from './components/search/SearchButton.vue'
import NavigationPane from './components/layout/NavigationPane.vue'
export default {
  name: 'app',
  components: {
    SearchButton,
    NavigationPane
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
.page-container {
  background-image: linear-gradient(to right, rgb(0, 57,116), rgb(108, 194, 201), rgb(0, 57, 116));
}

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
  max-height: 100vh;
  max-width: 1000px;
  margin: auto;
}

.md-app-toolbar {
  padding-left: 0;
  padding-right: 0;
  padding-top: 10px;
  //position: sticky;
  // top: 0;
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
