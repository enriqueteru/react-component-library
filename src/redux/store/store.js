import { 
    applyMiddleware, 
    combineReducers, 
    compose, 
    createStore } from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//REDUCERS
import { uiReducer } from "../reducers";

const reducers = combineReducers({
  ui: uiReducer,
});

export const store = createStore(
  reducers,
  compose(
  applyMiddleware(thunk), 
  composeWithDevTools()
  )

);
