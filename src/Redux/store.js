import { createStore, combineReducers } from "redux";
import notes from "./reducers/notes";
import favorites from "./reducers/favorites"

const reducer = combineReducers({
  notes,
  favorites
})


export default createStore(reducer);
