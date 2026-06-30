import { combineReducers, createStore } from "redux";
import accountReducer from "./Features/accounts/accountsSlicer";
import userReducer from "./Features/users/userSlicer";

const rootReducer = combineReducers({
  account: accountReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;
