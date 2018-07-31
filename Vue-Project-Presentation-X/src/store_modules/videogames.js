import axios from 'axios'

export default {
	namespaced: true,
	state: {
    games: [],
    /*----------------------- Not neccesary if back end has a DB --------------------------*/
		next_id: null
    /*-------------------------------------------------------------------------------------*/
	},
	mutations: {
    setGames(state, games) {
      state.games = games;
    },
    /*----------------------- Not neccesary if back end has a DB --------------------------*/
    setNextId(state, id) {
      state.next_id = id;
    },
		increaseNextId(state) {
			state.next_id++;
		},
    /*-------------------------------------------------------------------------------------*/
		addGame(state, game) {
			state.games.push(game)
		},
		removeGame(state, game) {
      state.games.splice(state.games.indexOf(game), 1);
		}
	},
	actions: {
    
    /*----------------------- Not neccesary if back end has a DB --------------------------*/
    async getNextId({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/primary_key_id_next').
        then((response) => {
          commit('setNextId', response.data.id);
          resolve();
        }).
        catch(() => {
          //could not retrieve id
          reject('Error getting id');
        });
      });
    },
    async setNextId({ commit, state }) {

      //------------fix the primary key data ------------

      return new Promise((resolve, reject) => {
        axios.put('http://localhost:3000/primary_key_id_next', {id: state.next_id + 1}, { headers: {'Content-Type': 'application/json'} }).
        then(() => {
          //update successfull
          commit('increaseNextId');
          resolve('primary key successfully increased');
        }).
        catch(() => {
          reject('could not increase the primary key');          
        });
      });
    },
    /*-------------------------------------------------------------------------------------*/
   
    async initialize({ dispatch, commit }) { //The async operation that fetches all the data from the back end
      try {
        /*----------------------- Not neccesary if back end has a DB --------------------------*/
        await dispatch('getNextId');
        console.log('Id get');
        /*-------------------------------------------------------------------------------------*/
        let response = await axios.get('http://localhost:3000/games');
        console.log('games get');
        commit('setGames', response.data);
        return;
      }catch(e) {
        throw e; //if dispatch('getNextId') got rejected, it will say 'Error getting id'
        //else it will display the axios.get reject message
      }
    },
		async addGame({ dispatch, commit, state }, game) {
      /*----------------------- Not neccesary if back end has a DB --------------------------*/
      if(!state.next_id){
        throw "The primary hasn't been retrieved yet, so adding more items is currently unavailable"
      }
      let id = state.next_id;
      game = {
        id,
        ...game
      };
      /*-------------------------------------------------------------------------------------*/
      try{
        await axios.post('http://localhost:3000/games', game, { headers: {'Content-Type': 'application/json'} });
        commit('addGame', game);
        /*----------------------- Not neccesary if back end has a DB --------------------------*/
        let answer = await dispatch('setNextId'); //if this fails... I should probably undo the previous change right? I'll do that later...
        console.log(answer);
        /*--------------------------------------------------------------------------------*/
        return 'game was successfully added';
      }catch(e) {
        throw e;
      }            
		},
		async removeGame({ commit }, game) {
      try {
        await axios.delete('http://localhost:3000/games/'+game.id)
        commit('removeGame', game);
        return 'game successfully removed';
      }catch(e) {
        throw e;
      }
		}
	}
}