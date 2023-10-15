import styles from "./todoTemplate.module.scss"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { updateTodo, setEditStatus, removeTodo } from "../../../actions"

export const TodoTemplate = ({ title, id, isEditing }) => {
	const dispatch = useDispatch()
	const [text, setText] = useState(title)

	return (
		<div className={styles.todo}>
			{isEditing ? (
				<div className={styles.editingBlock}>
					<input
						type="text"
						value={text}
						onChange={({ target }) => setText(target.value)}
					/>

					<button
						className={styles.saveBtn}
						onClick={() => dispatch(updateTodo(id, text))}
					>
						Save
					</button>
				</div>
			) : (
				<div className={styles.main}>
					<div className={styles.text}>{text}</div>
					<button
						className={styles.todo_edit_btn}
						onClick={() => dispatch(setEditStatus(id, true))}
					>
						Edit
					</button>
					<button
						className={styles.todo_remove_btn}
						onClick={() => dispatch(removeTodo(id))}
					>
						Delete
					</button>
				</div>
			)}
		</div>
	)
}
