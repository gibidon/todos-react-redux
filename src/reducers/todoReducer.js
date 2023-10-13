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
			let newTodo = { id: getRandomId(), title: action.payload, completed: false }
			return [...state, newTodo]
		default:
			return state
	}
}
