import { createStore, applyMiddleware, combineReducers } from "redux";
import { cakeReducer, usersReducer } from "./reducer";
import customLogMiddleware from "./loggingMiddleware";
import confirmationMiddleware from "./confirmationMiddleware";
import promiseMiddleware from "./promiseMiddleware";

const store = createStore(
  combineReducers({
    cakes: cakeReducer,
    users: usersReducer,
  }),
  applyMiddleware(
    customLogMiddleware,
    promiseMiddleware,
    confirmationMiddleware
  )
);

export default store;
