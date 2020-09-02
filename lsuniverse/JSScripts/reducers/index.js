import {combineReducers} from "redux";
import UserReducer from "./Reducer_User"
import CategoriesReducer from "./Reducer_Categories";

const allReducers = combineReducers({
    user: UserReducer,
    categories: CategoriesReducer
});

export default allReducers;
