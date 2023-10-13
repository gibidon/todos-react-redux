// export const initialSortingState = { sortingMode: false }
export const initialSortingState = false

export const sortingModeReducer = (state = initialSortingState, action) => {
	switch (action.type) {
		case "CHANGE_SORTING_MODE":
			return !state //mutation???!!!???
		// return { ...state, sortingMode: !state.sortingMode }
		// break

		default:
			return state
	}
}
