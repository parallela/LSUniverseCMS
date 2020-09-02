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
import {createStore} from "redux";
import allReducers from "./reducers/index";
import {Provider} from "react-redux";

if (document.getElementById("root")) {
    /*
    * Initialize the translator
    * Give ability to your application to be multilang
    * I think this is nice :)
    * - Lubomir Stankov
    */
    initTranslator();

    /*
     * Store all of the reducer data
     * Our main storage
     */
    const mainAppData = createStore(allReducers)


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
