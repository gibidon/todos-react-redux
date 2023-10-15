import { legacy_createStore as createStore } from "redux"
import { combineReducers, applyMiddleware, compose } from "redux"
import {
	todoReducer,
	sortingModeReducer,
	searchPhraseReducer,
} from "./reducers"
import thunk from "redux-thunk"

const reducer = combineReducers({
	todoState: todoReducer,
	sortingModeState: sortingModeReducer,
	searchPhraseState: searchPhraseReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

// const store = createStore(reducer, applyMiddleware(thunk))

export { store }
