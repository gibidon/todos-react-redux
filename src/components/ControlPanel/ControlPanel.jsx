import { AddTaskForm } from "./components/AddTaskForm/AddTaskForm"
import { SearchForm } from "./components/SearchForm/SearchForm"

import { Sorting } from "./components/Sorting/Sorting"
import styles from "./controlPanel.module.scss"
import { useDispatch } from "react-redux"

export const ControlPanel = () => {
	const dispatch = useDispatch()
	return (
		<div className={styles.controlPanel}>
			<AddTaskForm />
			<SearchForm />
			{/* <Sorting /> */}
			<button onClick={() => dispatch({ type: "CHANGE_SORTING_MODE" })}>
				Press to change sorting mode
			</button>
		</div>
	)
}
