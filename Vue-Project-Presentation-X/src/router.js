import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cooking from './views/Cooking.vue'
import Videogames from './views/Videogames.vue'
import Programming from './views/Programming.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cooking',
      name: 'Cooking',
      component: Cooking
    },
    {
      path: '/Videogames',
      name: 'Videogames',
      component: Videogames
    },
    {
      path: '/Programming',
      name: 'Programming',
      component: Programming
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
