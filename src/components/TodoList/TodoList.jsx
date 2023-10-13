import styles from "./TodoList.module.scss"
import { EditTemplate } from "../EditTemplate/EditTemplate"
// import { AppContext } from "../../contexts/AppContext"
import { useSelector } from "react-redux"
import {
	selectTodos,
	selectSortingMode,
	selectSearchPhrase,
} from "../../selectors"
import { TodoTemplate } from "./components/todoTemplate"

export const TodoList = () => {
	// const [isEditing, setIsEditing] = useState(false)
	// const { todos, dispatch } = useContext(AppContext)
	// const currentTodo = todos.find((todo) => todo.id === id)
	let todos = useSelector(selectTodos)
	const isSortingMode = useSelector(selectSortingMode)
	const searchPhrase = useSelector(selectSearchPhrase).searchPhrase
	console.log("sf", searchPhrase)

	console.log("is sorting in todolist ", isSortingMode)
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

	console.log("todos", todos)

	let todoElems = todos.map((todo) => (
		<TodoTemplate
			key={todo.id}
			title={todo.title}
			done={todo.done}
			id={todo.id}
			isEditing={todo.isEditing}
		/>
	))
	return <div>{todoElems}</div>
}
