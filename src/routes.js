import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './components/HomePage.vue'
import TeamList from './components/team/TeamList.vue'
import EventList from './components/event/EventList.vue'
import BlogPage from './components/blog/BlogPage.vue'

import EventPage from './components/event/EventPage.vue'
import EventHome from './components/event/EventHome.vue'
import EventMatches from './components/event/EventMatches.vue'

import TeamPage from './components/team/TeamPage.vue'
import TeamHome from './components/team/TeamHome.vue'
import TeamMatches from './components/team/TeamMatches.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/teams', component: TeamList },
    { path: '/events', component: EventList },
    { path: '/blogs', component: BlogPage },

    { path: '/event/:id', component: EventPage,
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
    { path: '/team/:id', component: TeamPage,
        children: [
            { path: 'home', component: TeamHome },
            { path: 'matches', component: TeamMatches }
        ]
    }
  ];

export default new VueRouter({
    routes // short for `routes: routes`
});
