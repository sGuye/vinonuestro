import { legacy_createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducer/index";
//import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
