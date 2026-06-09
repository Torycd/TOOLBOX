import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
