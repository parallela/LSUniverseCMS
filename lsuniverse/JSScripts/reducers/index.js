import {combineReducers} from "redux";
import UserReducer from "./Reducer_User"
import CategoriesReducer from "./Reducer_Categories";
import LoginReducer from "./actions/Reducer_Login";

const allReducers = combineReducers({
    user: UserReducer,
    categories: CategoriesReducer,
    login: LoginReducer
});

export default allReducers;
