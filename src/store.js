// import { configureStore, combineReducers } from "@reduxjs/toolkit"
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
// export const store = configureStore({ reducer: reducer })

const store = createStore(reducer, applyMiddleware(thunk))
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
// const store = configureStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export { store }
