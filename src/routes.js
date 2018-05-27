import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomePage from './components/HomePage.vue'
import TeamList from './components/team/TeamList.vue'
import EventList from './components/event/EventList.vue'
import BlogPage from './components/blog/BlogPage.vue'

import EventPage from './components/event/EventPage.vue'
import EventHome from './components/event/EventHome.vue'

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
            { path: 'matches', component: HomePage },
            { path: 'results', component: HomePage },
            { path: 'rankings', component: HomePage },
            { path: 'inspections', component: HomePage },
            { path: 'awards', component: HomePage },
            { path: 'twitter', component: HomePage },
        ]


    }
  ];

export default new VueRouter({
    routes // short for `routes: routes`
});
