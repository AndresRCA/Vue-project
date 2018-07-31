import Vue from 'vue'
import Vuex from 'vuex'
import cooking from './store_modules/cooking.js'
import videogames from './store_modules/videogames.js'
import header from './store_modules/header.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		cooking,
		videogames,
		header
	}
})
