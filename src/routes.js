import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'

Vue.use(VueRouter)

import SearchPage from './components/search/SearchPage.vue'

import HomePage from './components/HomePage.vue'
import TeamList from './components/team/TeamList.vue'
import EventList from './components/event/EventList.vue'
import LeagueList from './components/league/LeagueList.vue'
import BlogPage from './components/blog/BlogPage.vue'
import LoginPage from './components/login/LoginPage.vue'
// import SignUpPage from './components/login/SignUpPage.vue'

import DashboardPage from './components/dashboard/DashboardPage.vue'
import ProfileDashboard from './components/dashboard/ProfileDashboard.vue'
import AdminDashboard from './components/dashboard/AdminDashboard.vue'
import LeaguesDashboard from './components/dashboard/LeaguesDashboard.vue'
import TeamsDashboard from './components/dashboard/TeamsDashboard.vue'
import EventsDashboard from './components/dashboard/EventsDashboard.vue'

import RouteError from './RouteError.vue'

import EventPage from './components/event/EventPage.vue'
import EventHome from './components/event/EventHome.vue'
import EventMatches from './components/event/EventMatches.vue'
import EventAwards from './components/event/EventAwards.vue'
import EventTwitter from './components/event/EventTwitter.vue'

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
    { path: '/', name: 'home', component: HomePage },
    { path: '/search', component: SearchPage },
    { path: '/teams', component: TeamList },
    { path: '/events', component: EventList },
    { path: '/leagues', component: LeagueList },
    { path: '/blogs', component: BlogPage },
    { path: '/login', name: 'login', component: LoginPage },
    //{ path: '/profile', component: ProfilePage },
    // { path: '/signup', component: SignUpPage },

    { path: '/dashboard', component: DashboardPage,
        meta: {
            requiresAuth: true
        },
        children: [
            { path: 'profile', name: 'profile', component: ProfileDashboard },
            { path: 'admin', name: 'admin-dashboard', component: AdminDashboard },
            { path: 'league', name: 'leagues-dashboard', component: LeaguesDashboard },
            { path: 'team', name: 'teams-dashboard', component: TeamsDashboard },
            { path: 'event', name: 'events-dashboard', component: EventsDashboard }
        ]
    },

    { path: '/event/', redirect: '/events'},
    { path: '/event/:eventId', redirect: '/event/:eventId/home', component: EventPage, props: true,
        children: [
            { path: 'home', component: EventHome },
            { path: 'schedule', component: HomePage },
            { path: 'teams', component: HomePage },
            { path: 'matches', component: EventMatches },
            { path: 'results', component: HomePage },
            { path: 'rankings', component: HomePage },
            { path: 'inspections', component: HomePage },
            { path: 'awards', component: EventAwards },
            { path: 'twitter', component: EventTwitter },
        ]


    },


    { path: '/league/:leagueId', redirect: '/league/:leagueId/home', component: LeaguePage, props: true,
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
    },
    { path: '*', component: RouteError }
  ];

let router = new VueRouter({
    mode: 'history',
    scrollBehavior: function(to) {
        if (to.hash) {
            // console.log("to", to);
            return {selector: to.hash}
        } else {
            return {x: 0, y: 0}
        }
    },
    routes // short for `routes: routes`
});

router.beforeEach((to, _from, next) => {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // if (requiresAuth && !currentUser) next('login');
    // // else if (requiresAuth && currentUser) next('home')
    // else next()
    next()
})

export default router;
