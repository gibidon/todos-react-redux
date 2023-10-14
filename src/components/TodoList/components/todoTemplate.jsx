import styles from "./todoTemplate.module.scss"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { updateTodo, setEditStatus, removeTodo } from "../../../actions"

export const TodoTemplate = ({ title, done, id, isEditing }) => {
	const dispatch = useDispatch()
	const [text, setText] = useState(title)

	return (
		<div className={styles.todo}>
			{/* <span className={styles.todo_text}>{title}</span> */}
			{/* <input type="checkbox" checked={done} onChange={() => console.log(id)} /> */}
			{/* onChange={({ target }) => onCompletedChange(target.checked)}  !!!*/}

			<div className={styles.title}>
				{isEditing ? (
					<input
						type="text"
						value={text}
						onChange={({ target }) => setText(target.value)}
					/>
				) : (
					<>
						<div>{text}</div>
						<button
							className={styles.todo_edit_btn}
							onClick={() => dispatch(setEditStatus(id, true))}
						>
							Edit
						</button>
						<button
							className={styles.todo_remove_btn}
							onClick={() => dispatch(removeTodo(id))}
							// onClick={() => dispatch({ type: "REMOVE_TODO", payload: id })}
						>
							Delete
						</button>
					</>
				)}
			</div>
			{isEditing && (
				<div>
					<button
						className={styles.saveBtn}
						onClick={() => dispatch(updateTodo(id, text))}
					>
						Save
					</button>
					{/* <button
						className={styles.todo_cancel_btn}
						onClick={() => dispatch(setEditStatus(id, false))}
					>
						Cancel
					</button> */}
				</div>
			)}
		</div>
	)
}
