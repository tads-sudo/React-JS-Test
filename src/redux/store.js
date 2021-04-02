import { createStore, compose } from "redux";
import { authReducer } from "./reducers/auth";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(authReducer, storeEnhancers());

export default store;
