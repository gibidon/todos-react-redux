// import { useSelector } from "react-redux"
import styles from "./todoTemplate.module.scss"

export const TodoTemplate = ({ title, done, id, isEditing }) => {
	return (
		<div className={styles.todo}>
			<span className={styles.todo_text}>{title}</span>
			<input type="checkbox" checked={done} onChange={() => console.log(id)} />
			{/* onChange={({ target }) => onCompletedChange(target.checked)}  !!!*/}

			{/* <div className={styles.title}>
				{isEditing ? (
					<input
						type="text"
						value={title}
						onChange={({ target }) => onTitleChange(target.value)}
					/>
					LazyInput?
				) : (
					<div onClick={onEdit}>{title}</div>
				)}
			</div>
			<div>
				{isEditing ? (
					<Button onClick={onSave}>✎Save</Button>
				) : (
					<Button onClick={onRemove}>✖REmove</Button>
				)}
			</div> */}

			{/* <button className={styles.todo_edit_btn} onClick={() => setIsEditing(true)}>
				Edit
			</button>
			<button
				className={styles.todo_remove_btn}
				onClick={() => dispatch({ type: "REMOVE_TODO", payload: id })}
			>
				Delete
			</button> */}
		</div>
	)
}

// {
// 	isEditing && (
// 		<EditTemplate
// 			cancelTodoUpdate={() => setIsEditing(false)}
// 			update={(newText) => {
// 				dispatch({ type: "UPDATE_TODO", payload: { id, newText } })
// 				setIsEditing(false)
// 			}}
// 		/>
// 	)
// }
