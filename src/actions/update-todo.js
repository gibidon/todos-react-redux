export const updateTodo = (id, text) => {
	return { type: "UPDATE_TODO", payload: { id: id, text: text } }
}
