<template>
<md-table v-model="searched" md-sort="name" md-sort-order="asc" @md-selected="onSelect">
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Teams</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No teams found"
        :md-description="`No teams found for this '${search}' query. Try a different search term.`">
        <!--<md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>-->
      </md-table-empty-state>

        <!-- <router-link tag="md-table-row" to="/event/{ item.id }" slot="md-table-row" slot-scope="{ item }" md-selectable="single"> -->
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
        <!--<md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>-->
        <md-table-cell md-label="Number" md-sort-by="number">{{ item.number }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="League" md-sort-by="league">{{ item.league }}</md-table-cell>
        <md-table-cell md-label="Location" md-sort-by="location">{{ item.location }}</md-table-cell>
        <!--<md-table-cell md-label="Email" md-sort-by="email">{{ item.email }}</md-table-cell>
        <md-table-cell md-label="Gender" md-sort-by="gender">{{ item.gender }}</md-table-cell>
        <md-table-cell md-label="Job Title" md-sort-by="title">{{ item.title }}</md-table-cell>-->
      </md-table-row>
        <!-- </router-link> -->

    </md-table>
</template>

<script>
    const toLower = text => {
        return text.toString().toLowerCase()
    }

    const searchByName = (items, term) => {
        if (term) {
        return items.filter(item => toLower(item.name).includes(toLower(term)))
        }

        return items
    }
    export default {
        name: "TeamList",
        data: () => ({
        search: null,
        searched: [],
        selected: {},
        users: [
            {
            id: 1,
            name: "robots are cool!",
            number: "5681",
            league: "VanSant",
            location: "Villiska, IA"
            },
            {
            id: 2,
            name: "ROBOTS",
            number: "1298",
            league: "Sangster",
            location: "Manning, IA"
            },
            {
            id: 3,
            name: "PROGRAMMING",
            number: "12345",
            league: "VanSant",
            location: "Council Bluffs, IA"
            },
            {
            id: 4,
            name: "Another team name",
            number: "7777",
            league: "Stearns",
            location: "Johnston, IA"
            },
                ]
            }),
            methods: {
            newUser () {
                window.alert('Noop')
            },
            searchOnTable () {
                this.searched = searchByName(this.users, this.search)
            },
                onSelect (item) {
                    this.selected = item
                    this.$router.push('/team/'+item.number+'/home');
                }
            },
            created () {
            this.searched = this.users
            }
        }
</script>

<style>
 .md-field {
    max-width: 300px;
  }
</style>
