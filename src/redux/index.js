import { applyMiddleware, legacy_createStore as creatoreStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import dogReducer from './reducers/dogReducer';
import thunk from "redux-thunk";

const store = creatoreStore(
  dogReducer,
  composeWithDevTools(applyMiddleware(thunk))
  );

export default store;
