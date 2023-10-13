import { ControlPanel, TodoList } from "./components"
import styles from "./main.module.scss"
// import { TodoList } from "./components"
import { useDispatch, useSelector } from "react-redux"
import { selectTodos } from "./selectors/select-todos"

const App = () => {
	// const [todos, setTodos] = useState([])
	// const timeout = useRef()

	// const dispatch = (action) => {
	//   const { type, payload } = action

	//   switch (type) {
	//     case "ADD_TODO": {
	//       onAddTodo(payload)
	//       break
	//     }
	//     case "REMOVE_TODO": {
	//       onRemoveTodo(payload)
	//       break
	//     }
	//     case "UPDATE_TODO": {
	//       onUpdateTodo(payload.id, payload.newText)
	//       break
	//     }
	//     case "SEARCH_TODO": {
	//       onSearchTodos(payload)
	//       break
	//     }
	//     case "SORT_TODOS": {
	//       onSortTodo()
	//       break
	//     }

	//     default:
	//     // do nothing
	//   }
	// }

	// const onAddTodo = (newText) => {
	//   addTodo(newText).then((newTodo) => {
	//     let updatedTodos = [...todos, newTodo]
	//     setTodos(updatedTodos)
	//   })
	// }

	// const onUpdateTodo = (id, newText) => {
	//   updateTodo(id, newText).then(() => {
	//     setTodos(todos.map((todo) => (todo.id === id ? { id: id, title: newText } : todo)))
	//   })
	// }

	// const onRemoveTodo = (id) => {
	//   removeTodo(id).then(() => {
	//     let cleanedTodos = todos.filter((todo) => todo.id !== id)
	//     setTodos(cleanedTodos)
	//   })
	// }

	// const onSortTodo = () => {
	//   sortTodos().then((sortedTodos) => setTodos(sortedTodos))
	// }

	// const onSearchTodos = (text) => {
	//   clearTimeout(timeout.current)
	//   timeout.current = setTimeout(() => {
	//     searchTodos(text).then((foundTodos) => setTodos(foundTodos))
	//   }, 600)
	// }

	// useEffect(() => {
	//   readTodos().then((receivedList) => {
	//     console.log("setting todos")

	//     setTimeout(() => {
	//       setTodos(receivedList)
	//     }, 2000)
	//   })
	// }, [])
	// const todos = useSelector(selectTodos)
	const dispatch = useDispatch()

	// let todoElems = todos.map((todo) => (
	// 	<TodoTemplate key={todo.id} id={todo.id} />
	// ))

	return (
		<div className={styles.container}>
			<header className={styles.header}>My todos:</header>
			{/* <div className={styles.todos}>{todoElems}</div> */}
			<TodoList />
			<ControlPanel />
			<button onClick={() => dispatch({ type: "CHANGE_SORTING_MODE" })}>
				Press to change sorting mode
			</button>
		</div>
	)
}

export default App
