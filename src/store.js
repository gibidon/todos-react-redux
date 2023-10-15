import {
	combineReducers,
	applyMiddleware,
	compose,
	legacy_createStore as createStore,
} from "redux"
import {
	todoReducer,
	sortingModeReducer,
	searchPhraseReducer,
	filterReducer,
} from "./reducers"
import thunk from "redux-thunk"

const reducer = combineReducers({
	todoState: todoReducer,
	// sortingModeState: sortingModeReducer,
	// searchPhraseState: searchPhraseReducer,
	filterState: filterReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export { store }
