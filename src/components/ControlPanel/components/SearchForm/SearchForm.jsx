import { useState, useRef } from "react"
import { useDispatch } from "react-redux"
import { debounceSearch } from "../../../../actions/debounceSearch"

export const SearchForm = () => {
	const [inputState, setInputState] = useState("")
	const timeout = useRef()
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
					clearTimeout(timeout.current)
					timeout.current = setTimeout(() => {
						dispatch(debounceSearch(e.target.value))
					}, 600)
				}}
			/>
			<button>Start search</button>
		</div>
	)
}
