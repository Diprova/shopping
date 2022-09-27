import { combineReducers } from "redux";

import productReducer from "./Reducer";

const rootReducer = combineReducers({
  product: productReducer
});

export default rootReducer;
