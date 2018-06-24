<template>
    <md-table v-model="searched" md-sort="name" md-sort-order="asc" @md-selected="onSelect">
        <md-table-toolbar>
            <div class="md-toolbar-section-start">
                <h1 class="md-title">Events</h1>
            </div>

            <md-field md-clearable class="md-toolbar-section-end">
                <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
            </md-field>
        </md-table-toolbar>

        <md-table-empty-state md-label="No events found" :md-description="`No events found for this '${search}' query. Try a different search term.`">
            <!--<md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>-->
        </md-table-empty-state>

        <!-- <router-link tag="md-table-row" to="/event/{ item.id }" slot="md-table-row" slot-scope="{ item }" md-selectable="single"> -->
        <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
            <!--<md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>-->
            <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="Location" md-sort-by="location">{{ item.location }}</md-table-cell>
        </md-table-row>
        <!-- </router-link> -->

    </md-table>
</template>

<script>
import {db} from '../../main'

  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)) || toLower(item.location).includes(toLower(term)))
    }

    return items
  }


export default {
    name: "LeagueList",
    data: () => ({
      search: null,
      searched: [],
      selected: {},
      leagues: []
    }),
    firestore() {
      return {
        leagues: db.collection('leagues').orderBy('name',"asc")
      }
    },
    methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.leagues, this.search)
      },
      onSelect (item) {
          this.selected = item
          this.$router.push('/league/'+item.id+"/home");
      }
    },
    created () {
      this.searched = this.leagues
    }
}
</script>


<style>

</style>
