<template>

  <div class="page-container md-layout-row">

      
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="color-strip">
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
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Navigation</span>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea repudiandae maxime? Quae non explicabo, neque.
      </md-app-content>
    </md-app>
  </div>
</template>



<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
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
