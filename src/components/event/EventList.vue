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

      <md-table-empty-state
        md-label="No events found"
        :md-description="`No events found for this '${search}' query. Try a different search term.`">
        <!--<md-button class="md-primary md-raised" @click="newUser">Create New User</md-button>-->
      </md-table-empty-state>

        <!-- <router-link tag="md-table-row" to="/event/{ item.id }" slot="md-table-row" slot-scope="{ item }" md-selectable="single"> -->
      <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
        <!--<md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>-->
        <md-table-cell md-label="Type" md-sort-by="type">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Date" md-sort-by="date">{{ item.date }}</md-table-cell>
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
    name: "EventList",
    data: () => ({
      search: null,
      searched: [],
      selected: {},
      users: [
        {
          id: 1,
          name: "VanSant Meet 1",
          type: "League Meet",
          date: "10/21/2017",
          location: "Villiska, IA"
        },
        {
          id: 2,
          name: "Sangster Meet 1",
          type: "League Meet",
          date: "10/28/2017",
          location: "Manning, IA"
        },
        {
          id: 3,
          name: "VanSant Meet 2",
          type: "League Meet",
          date: "11/11/2017",
          location: "Council Bluffs, IA"
        },
        {
          id: 4,
          name: "Stearns Meet 2",
          type: "League Meet",
          date: "11/18/2017",
          location: "Johnston, IA"
        },
        {
          id: 5,
          name: "Sant Meet 1",
          type: "League Meet",
          date: "12/2/2017",
          location: "Marshalltown, IA"
        },
        {
          id: 6,
          name: "Reininga Meet 4",
          type: "League Meet",
          date: "12/9/2017",
          location: "Mason City, IA"
        },
        {
          id: 7,
          name: "Stearns Meet 3",
          type: "League Meet",
          date: "12/16/2017",
          location: "Johnston, IA"
        },
        {
          id: 8,
          name: "Sant Meet 2",
          type: "League Meet",
          date: "12/16/2017",
          location: "West Des Moines, IA"
        },
        {
          id: 9,
          name: "Corning League Championship",
          type: "League Championship",
          date: "1/6/2018",
          location: "Corning, IA"
        },
        {
          id: 10,
          name: "Sioux City League Championship",
          type: "League Championship",
          date: "1/13/2018",
          location: "Sioux City, IA"
        },
        {
          id: 11,
          name: "Overland Park Qualifier",
          type: "Qualifier",
          date: "1/20/2018",
          location: "Overland Park, KS"
        },
        {
          id: 12,
          name: "Nevada League Championship",
          type: "League Championship",
          date: "1/27/2018",
          location: "Nevada, IA"
        },
        {
          id: 13,
          name: "Johnston Super Qualifier",
          type: "Super Qualifier",
          date: "2/3/2018",
          location: "Johnston, IA"
        },
        {
          id: 14,
          name: "Nebraska Championship",
          type: "Championship",
          date: "2/10/2018",
          location: "Grand Island, NE"
        },
        {
          id: 15,
          name: "Iowa Championship",
          type: "Championship",
          date: "2/24/2018",
          location: "Coralville, IA"
        },
        {
          id: 16,
          name: "North Super Regional",
          type: "Super Regional",
          date: "3/17/2018",
          location: "Cedar Rapids, IA"
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
            console.log("selected", item);
            this.$router.push('/event/'+item.id+"/home");
        }
    },
    created () {
      this.searched = this.users
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
