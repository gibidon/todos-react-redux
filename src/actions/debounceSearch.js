export const debounceSearch = (newPhrase) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch({ type: "SET_SEARCH_PHRASE", payload: newPhrase })
		}, 700)
	}
}

// export const changeUser = () => {
//     return (dispatch) => {
//       return fetchUserDataMock().then((userDataFromServer) => {
//         dispatch({
//           type: 'CHANGE_USER',
//           payload: userDataFromServer,
//         });
//       });
//     };
//   };
