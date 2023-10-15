const initialSearchPhrase = { searchPhrase: "" }

export const searchPhraseReducer = (state = initialSearchPhrase, action) => {
	switch (action.type) {
		case "SET_SEARCH_PHRASE":
			return { ...state, searchPhrase: action.payload }
		default:
			return state
	}
}
