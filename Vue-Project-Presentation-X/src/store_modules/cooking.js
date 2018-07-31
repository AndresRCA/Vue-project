import axios from 'axios'

export default {
	namespaced: true,
	state: {
		recipes: [],
		cooking_links: []
	},
	mutations: {
    setRecipes(state, recipes) {
      state.recipes = recipes;
    },
    setCookingLinks(state, cooking_links) {
      state.cooking_links = cooking_links;
    },
		/*addRecipe(state, recipe) {
			state.recipe.push(recipe);
		},*/
		addWebsite(state, website) {
			state.cooking_links.push(website);
		}
	},
	actions: {
		/*addRecipe({ commit }, recipe) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
  				commit('addRecipe', recipe);
  				resolve();
  			}, 1);
			});
		},*/
    async initialize({ commit }) { //this isn't really as detailed as videogames.js, but its simpler
      try {
        let recipe = await axios.get('http://localhost:3000/recipes');
        commit('setRecipes', recipe.data);
        let cooking_links = await axios.get('http://localhost:3000/cooking_links');
        commit('setCookingLinks', cooking_links.data);
        return 'recipes and cooking links retrieved successfully';
      }catch(e) {
        throw e;
      }
    },
		async addWebsite({ commit }, website) {
      try {
        await axios.post('http://localhost:3000/cooking_links', website, { headers: {'Content-Type': 'application/json'} });
        commit('addWebsite', website);
        return 'cooking link successfully added';
      }catch(e) {
        throw e;
      }
  	}
	}
}