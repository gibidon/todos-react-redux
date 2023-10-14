import { ControlPanel, TodoList } from "./components"
import styles from "./main.module.scss"

const App = () => {
	return (
		<div className={styles.container}>
			<header className={styles.header}>My todos:</header>
			<TodoList />
			<ControlPanel />
		</div>
	)
}

export default App
