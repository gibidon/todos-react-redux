import { getRandomId } from "../utils/get-random-id"

export const initialTodoState = [
	{ id: 12, title: "lorem ipsum dolor sir amet", done: false },
	{ id: 22, title: "dolor", done: true },
	{ title: "sir amet", done: false, id: 2 },
	{ id: 245, title: "lorem ipsum dolor sir amet", done: false },
	{ id: 25, title: "bbb lorem ipsum dolor sir", done: false },
]

export const todoReducer = (state = initialTodoState, action) => {
	switch (action.type) {
		case "ADD_TODO":
			let newTodo = {
				id: Number(getRandomId()),
				title: action.payload,
				completed: false,
			}
			return [...state, newTodo]

		case "REMOVE_TODO":
			let removeTodoIndex = state.indexOf(
				state.find((todo) => todo.id === action.payload)
			)
			// let removingTodo = state.find((todo) => todo.id === action.payload)
			// let removeTodoIndex = state.findIndex((todo) => todo.id === removingTodo.id)

			return [
				...state.slice(0, removeTodoIndex),
				...state.slice(removeTodoIndex + 1),
			]

		case "SET_EDIT_STATUS":
			// return [
			// 	...state.map((todo) =>
			// 		todo.id === action.payload.id
			// 			? { ...todo, isEditing: action.payload.status }
			// 			: todo
			// 	),
			// ]
			let editingTodo = state.find((todo) => todo.id === action.payload.id)
			let editingTodoIndex = state.findIndex((todo) => todo.id === editingTodo.id)
			return [
				...state.slice(0, editingTodoIndex),
				{ ...editingTodo, isEditing: true },
				...state.slice(editingTodoIndex + 1),
			]

		case "UPDATE_TODO":
			// return [
			// 	...state.map((todo) =>
			// 		todo.id === action.payload.id
			// 			? { ...todo, title: action.payload.text, isEditing: false }
			// 			: todo
			// 	),
			// ]
			let updatingTodo = state.find((todo) => todo.id === action.payload.id)
			let updatingTodoIndex = state.findIndex(
				(todo) => todo.id === updatingTodo.id
			)
			return [
				...state.slice(0, updatingTodoIndex),
				{ ...updatingTodo, title: action.payload.text, isEditing: false },
				...state.slice(updatingTodoIndex + 1),
			]

		default:
			return state
	}
}
