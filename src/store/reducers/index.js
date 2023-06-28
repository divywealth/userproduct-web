import counter from "./increment";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter
})

export default allReducers;