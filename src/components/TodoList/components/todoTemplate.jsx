import styles from "./todoTemplate.module.scss"
import { useDispatch } from "react-redux"
import { removeTodo } from "../../../actions"
import { useState } from "react"
import { editTodo } from "../../../actions/edit-todo"
import { updateTodo } from "../../../actions"

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
							onClick={() => dispatch(editTodo(id))}
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
				<button onClick={() => dispatch(updateTodo(id, text))}>Save</button>
			)}
			{/* <div>
				{isEditing ? (
					<Button onClick={onSave}>✎Save</Button>
				) : (
					<Button onClick={onRemove}>✖REmove</Button>
				)}
			</div> */}

			{/* <button className={styles.todo_edit_btn} onClick={() => setIsEditing(true)}> */}
		</div>
	)
}
