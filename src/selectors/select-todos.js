export const selectTodos = (state, options = {}) => {
	// if (options.sorting) {
	// 	let sortedList = state.todoState.sort(function (a, b) {
	// 		return b.title - a.title
	// 	})
	// 	return sortedList
	// }
	return state.todoState
}
