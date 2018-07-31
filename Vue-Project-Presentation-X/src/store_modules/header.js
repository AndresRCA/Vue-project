export default {
	namespaced: true,
	state: {
		isEditing: false,
		header_background: ''
	},
	mutations: {
		switchIsEditing(state) {
			state.isEditing = !state.isEditing;
		}
	}
}