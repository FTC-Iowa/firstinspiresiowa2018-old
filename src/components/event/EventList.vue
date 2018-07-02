<template>
    <md-table v-model="searched" :md-sort.sync="currentSort" :md-sort-order.sync="currentSortOrder" :md-sort-fn="customSort" @md-selected="onSelect">
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Events</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search events..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No events found"
        :md-description="`No events found for this '${search}' query. Try a different search term.`" mdIcon="error">
        <!-- <md-button class="md-primary md-raised" @click="newUser">Create New User</md-button> -->
      </md-table-empty-state>


      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
        <md-table-cell md-label="Type" md-sort-by="type">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Date" md-sort-by="date"><date-format v-bind:time="item.date" /></md-table-cell>
        <md-table-cell md-label="Location" md-sort-by="location">{{ item.location }}</md-table-cell>
      </md-table-row>

    </md-table>
</template>

<script>
import DateFormat from '../utils/DateFormat.vue'

  const toLower = text => {
    return text.toString().toLowerCase()
  }

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => toLower(item.name).includes(toLower(term)) || toLower(item.type).includes(toLower(term)) || toLower(item.location).includes(toLower(term)))
    }

    return items
  }

export default {
    name: "EventList",
    components: {DateFormat},
    data: () => ({
      search: null,
      currentSort: "date",
      currentSortOrder: "asc",
      searched: [],
      selected: {},
      events: [ ]
    }),
    firestore() {
      return {
        events: this.$db.collection('events').orderBy('date', "desc")
      }
    },
    methods: {
      newUser () {
        
      },
      searchOnTable () {
        this.searched = searchByName(this.events, this.search)
      },
      onSelect (item) {
          this.selected = item
          this.$router.push('/event/'+item.id+"/home");
      },
      customSort (value) {
        return value.sort((a, b) => {
          const sortBy = this.currentSort

          if (this.currentSort === 'date') {
            if (this.currentSortOrder === 'asc')
              return a.date.seconds < b.date.seconds ? 1 : -1;
            else
              return a.date.seconds > b.date.seconds ? 1 : -1;
          } else {
            if (this.currentSortOrder === 'desc') {
              return a[sortBy].localeCompare(b[sortBy])
            } else {
              return b[sortBy].localeCompare(a[sortBy])
            }
          }
        })
      }
    },
    created () {
      this.searched = this.events
    }
  }
</script>

<style lang="scss" scoped>
  .md-field {
    max-width: 300px;
  }

  .md-table-content {
      height: 100px !important;
  }
</style>
