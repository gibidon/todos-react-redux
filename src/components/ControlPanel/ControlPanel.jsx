import { AddTaskForm, SearchForm, Sorting } from "./components/"
import styles from "./controlPanel.module.scss"

export const ControlPanel = () => {
	return (
		<div className={styles.controlPanel}>
			<AddTaskForm />
			<SearchForm />
			<Sorting />
		</div>
	)
}
