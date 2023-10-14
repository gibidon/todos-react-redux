import styles from "./TodoList.module.scss"

import { useSelector } from "react-redux"
import { useRef } from "react"
import {
	selectTodos,
	selectSortingMode,
	selectSearchPhrase,
	selectSortedTodos,
} from "../../selectors"
import { TodoTemplate } from "./components/todoTemplate"

export const TodoList = () => {
	const timeout = useRef()
	let todos = useSelector(selectTodos)
	console.log("todos in todoList: ", todos)
	const isSortingMode = useSelector(selectSortingMode)

	const searchPhrase = useSelector(selectSearchPhrase).searchPhrase

	// const sortedTodosSeparately = useSelector(selectSortedTodos)
	// console.log("separated todos sorted ", sortedTodosSeparately)

	if (isSortingMode) {
		todos = todos.sort(function (a, b) {
			// return b.title < a.title
			const titleA = a.title.toUpperCase() // ignore upper and lowercase
			const titleB = b.title.toUpperCase() // ignore upper and lowercase
			if (titleA < titleB) {
				return -1
			}
			if (titleA > titleB) {
				return 1
			}

			return 0
		})
	}
	if (searchPhrase !== "") {
		todos = todos.filter((todo) => todo.title.includes(searchPhrase))
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
