import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { debounceSearch } from "../../../../actions/debounceSearch"

export const SearchForm = () => {
	const [inputState, setInputState] = useState("")
	// const timeout = useRef()
	const dispatch = useDispatch()

	return (
		<div>
			<label htmlFor="search_text">Search todo by keywords:</label>
			<input
				value={inputState}
				id="search_text"
				type="text"
				placeholder="enter the text"
				onChange={(e) => {
					setInputState(e.target.value)
					console.log(e.target.value)
					// dispatch({ type: "SET_SEARCH_PHRASE", payload: e.target.value })
					dispatch(debounceSearch(e.target.value))
				}}
			/>
			<button>Start search</button>
		</div>
	)
}

// const onSearchTodos = (text) => {
//   clearTimeout(timeout.current)
//   timeout.current = setTimeout(() => {
//     searchTodos(text).then((foundTodos) => setTodos(foundTodos))
//   }, 600)
// }
