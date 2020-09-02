import {combineReducers} from "redux";
import UserReducer from "./Reducer_User"

const allReducers = combineReducers({
    user: UserReducer
});

export default allReducers;
