import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import SearchPage from './components/search/SearchPage.vue'

import HomePage from './components/HomePage.vue'
import TeamList from './components/team/TeamList.vue'
import EventList from './components/event/EventList.vue'
import LeagueList from './components/league/LeagueList.vue'
import BlogPage from './components/blog/BlogPage.vue'

import EventPage from './components/event/EventPage.vue'
import EventHome from './components/event/EventHome.vue'
import EventMatches from './components/event/EventMatches.vue'


import LeaguePage from './components/league/LeaguePage.vue'
import LeagueHome from './components/league/LeagueHome.vue'
import LeagueTeams  from './components/league/LeagueTeams.vue'
import LeagueEvents from './components/league/LeagueEvents.vue'
import LeagueRankings from './components/league/LeagueRankings.vue'

import TeamPage from './components/team/TeamPage.vue'
import TeamHome from './components/team/TeamHome.vue'
import TeamMatches from './components/team/TeamMatches.vue'
import TeamAwards from './components/team/TeamAwards.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/search', component: SearchPage },
    { path: '/teams', component: TeamList },
    { path: '/events', component: EventList },
    { path: '/leagues', component: LeagueList },
    { path: '/blogs', component: BlogPage },

    { path: '/event/:eventId', component: EventPage, props: true,
        children: [
            { path: 'home', component: EventHome },
            { path: 'schedule', component: HomePage },
            { path: 'teams', component: HomePage },
            { path: 'matches', component: EventMatches },
            { path: 'results', component: HomePage },
            { path: 'rankings', component: HomePage },
            { path: 'inspections', component: HomePage },
            { path: 'awards', component: HomePage },
            { path: 'twitter', component: HomePage },
        ]


    },


    { path: '/league/:id', component: LeaguePage,
        children: [
            { path: 'home', component: LeagueHome },
            { path: 'teams', component: LeagueTeams },
            { path: 'events', component: LeagueEvents },
            { path: 'rankings', component: LeagueRankings }
        ]
    },
    { path: '/team/:id', component: TeamPage,
        children: [
            { path: 'home', component: TeamHome },
            { path: 'matches', component: TeamMatches },
            { path: 'awards', component: TeamAwards }
        ]
    }
  ];

export default new VueRouter({
    routes // short for `routes: routes`
});
