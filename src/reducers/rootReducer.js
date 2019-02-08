import {combineReducers} from "redux";

//reducers
import productosReducer from "./productosReducer";

export default combineReducers({
  productos: productosReducer
});
