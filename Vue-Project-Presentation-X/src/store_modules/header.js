import axios from 'axios'

export default {
	namespaced: true,
	state: {
		isEditing: false,
		header_background: ''
	},
	mutations: {
		switchIsEditing(state) {
			state.isEditing = !state.isEditing;
		},
		updateHeaderBackground(state, value) {
			state.header_background = value;
		}
	}/*,
	actions: {
		async isResourceValid({ state }) {
			try {
				let response = await axios.options(state.header_background);
				return response;
			}catch(e) {
				throw "url isn't valid";
			}
		}
	}*/
}