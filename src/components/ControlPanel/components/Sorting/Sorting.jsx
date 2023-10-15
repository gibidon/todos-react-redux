import { useSelector, useDispatch } from "react-redux"
import { selectFilters } from "../../../../selectors"
import styles from "./sorting.module.scss"

export const Sorting = () => {
	const dispatch = useDispatch()
	const { sortingMode } = useSelector(selectFilters)

	return (
		<>
			<button
				className={styles.sortBtn}
				onClick={() => dispatch({ type: "CHANGE_SORTING_MODE" })}
			>
				{sortingMode ? "Cancel sorting by name" : "Sort by name"}
			</button>
		</>
	)
}
