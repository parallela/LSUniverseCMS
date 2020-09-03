import ReactDOM from "react-dom";
import React from "react";

/*
* Use another theme example:
*
* import App from "../Themes/YourThemeName/MainFile [For example: App]"
*
* For any theme you'll make you can use `Default` theme for template.
* You can change all of the frontend logic and put your custom.
* "All Good Things are Wild and Free!"
* - KAPTEN & SON
*/
// THEME:
import App from "../Themes/Default/App";

/*
* Our core imports to make app run with all of the data we needed from our api
*/
import {initTranslator} from "./translation/translate";
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from "redux-thunk";
import allReducers from "./reducers/index";
import {Provider} from "react-redux";
import {Action_User} from "./reducers/actions/Action_User";
import {Action_Categories} from "./reducers/actions/Action_Categories";
import {Action_Login} from "./reducers/actions/Action_Login";

if (document.getElementById("root")) {
    /*
    * Initialize the translator
    * Give ability to your application to be multilang
    * I think this is nice :)
    * - Lubomir Stankov
    */
    initTranslator();

    /*
     * Store reducer data and dispatch actions
     */
    const mainAppData = createStore(allReducers, applyMiddleware(ReduxThunk))
    mainAppData.dispatch(Action_User);
    mainAppData.dispatch(Action_Categories)
    /*
    *
    * Render the main element
    *
    */
    ReactDOM.render(
        <Provider store={mainAppData}>
            <App/>
        </Provider>
        , document.getElementById("root"));
}
