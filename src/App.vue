<template>

  <div class="page-container md-layout-row">
    <md-app>
      <md-app-toolbar class="md-primary">
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
        <span class="md-title">FIRST Inspires Iowa</span>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button">
            <md-icon>search</md-icon>
          </md-button>
        </div>

      </md-app-toolbar>

      <md-app-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Navigation</span>
        </md-toolbar>

        <md-list>
          <router-link tag="md-list-item" to="/">
            <md-icon>home</md-icon>
            <span class="md-list-item-text">Home</span>
          </router-link>

          <router-link tag="md-list-item" to="/teams">
            <md-icon>people</md-icon>
            <span class="md-list-item-text">Teams</span>
          </router-link>

          <router-link tag="md-list-item" to="/events">
            <md-icon>event</md-icon>
            <span class="md-list-item-text">Events</span>
          </router-link>

          <router-link tag="md-list-item" to="/leagues">
            <md-icon>rowing</md-icon>
            <span class="md-list-item-text">Leagues</span>
          </router-link>

          <router-link tag="md-list-item" to="/blogs">
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

export default {
  name: 'app',
  components: {
  },
  data: () => ({
    showNavigation: false,
    showSidepanel: false
  })
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
