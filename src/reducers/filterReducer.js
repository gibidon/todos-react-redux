const initialFilterState = {
	searchPhrase: "",
	sortingMode: false,
}

export const filterReducer = (state = initialFilterState, action) => {
	switch (action.type) {
		case "CHANGE_SORTING_MODE":
			return { ...state, sortingMode: !state.sortingMode }
		case "SET_SEARCH_PHRASE":
			return { ...state, searchPhrase: action.payload }
		default:
			return state
	}
}
