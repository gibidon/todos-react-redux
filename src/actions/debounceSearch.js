export const debounceSearch = (newPhrase) => {
	return (dispatch) => {
		setTimeout(() => {
			console.log("debouncing...")
			dispatch({ type: "SET_SEARCH_PHRASE", payload: newPhrase })
		}, 700)
	}
}
