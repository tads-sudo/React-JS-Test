import { createStore, compose, combineReducers } from "redux";
import { authReducer, todoReducer } from "./reducers";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  auth: authReducer,
  todos: todoReducer,
});

const store = createStore(reducer, storeEnhancers());

export default store;
