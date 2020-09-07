import {combineReducers} from "redux";
import UserReducer from "./Reducer_User"
import CategoriesReducer from "./Reducer_Categories";
import LoginReducer from "./Reducer_Login";
import RegisterReducer from "./Reducer_Register";
import ChangepasswordReducer from "./Reducer_Changepassword";

const allReducers = combineReducers({
    user: UserReducer,
    categories: CategoriesReducer,
    login: LoginReducer,
    register: RegisterReducer,
    changepassword: ChangepasswordReducer
});

export default allReducers;
