import { getRandomId } from "../utils/get-random-id"

export const initialTodoState = [
	{ id: 12, title: "asdfkajsdf", done: false },
	{ id: 22, title: "dasdasd", done: true },
	{ title: "Новое дело 22", done: false, id: 2 },
	{ id: 245, title: "aaaadkasjdkajdkj", done: false },
	{ id: 25, title: "bbb", done: false },
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
			// let newTodos = state.filter((todo) => todo.id !== action.payload)
			// return [...newTodos]
			return [...state.filter((todo) => todo.id !== action.payload)]
		case "SET_EDIT_STATUS":
			// let newTodos = state.map((todo) =>
			// todo.id === action.payload ? (todo.isEditing = true) : todo
			// return newTodos
			return [
				// ...state,
				...state.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, isEditing: action.payload.status }
						: todo
				),
			]
		case "UPDATE_TODO":
			return [
				...state.map((todo) =>
					todo.id === action.payload.id
						? { ...todo, title: action.payload.text, isEditing: false }
						: todo
				),
			]

		default:
			return state
	}
}
