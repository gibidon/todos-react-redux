import styles from "./TodoList.module.scss"
import { useSelector } from "react-redux"
import { selectTodos, selectFilters } from "../../selectors"
import { TodoTemplate } from "./components/todoTemplate"
import { sortTodosByTitle } from "../../utils"

export const TodoList = () => {
	let todos = useSelector(selectTodos)
	const { sortingMode, searchPhrase } = useSelector(selectFilters)

	if (searchPhrase !== "") {
		todos = todos.filter((todo) => todo.title.includes(searchPhrase))
	}
	if (sortingMode) {
		todos = sortTodosByTitle(todos)
	}

	let todoElems = todos.map((todo) => (
		<TodoTemplate
			key={todo.id}
			title={todo.title}
			done={todo.done}
			id={todo.id}
			isEditing={todo.isEditing}
		/>
	))
	return <div className={styles.todoList}>{todoElems}</div>
}
