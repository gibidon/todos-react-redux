export const selectSortedTodos = (state) => {
	const sortedTodos = state.todoState.sort(function (a, b) {
		const titleA = a.title.toUpperCase() // ignore upper and lowercase
		const titleB = b.title.toUpperCase() // ignore upper and lowercase
		if (titleA < titleB) {
			return -1
		}
		if (titleA > titleB) {
			return 1
		}

		return 0
	})
	return sortedTodos
}
