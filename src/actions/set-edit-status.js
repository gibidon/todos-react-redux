export const setEditStatus = (id, status) => {
	return { type: "SET_EDIT_STATUS", payload: { id: id, status: status } }
}
