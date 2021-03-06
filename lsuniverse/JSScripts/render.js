import ReactDOM from "react-dom";
import React, {Suspense} from "react";

/*
* Use another theme example:
*
*
* For any theme you'll make, you can use `Default` for template.
* You can change all of the frontend logic and put your custom.
* "All Good Things are Wild and Free!"
* - KAPTEN & SON
*/
const App = React.lazy(() => import(/* webpackChunkName: "LSUniverseChunk" */`../Themes/${window._env['THEME']}/App`));

/*
* Our core imports to make app run with all of the data we need from our api
*/
import {initTranslator} from "./translation/translate";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/index";
import {Provider} from "react-redux";
import {Action_User} from "./reducers/actions/Action_User";
import {Action_Categories} from "./reducers/actions/Action_Categories";
import Loading from "../Themes/Default/components/Loading";

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
    const mainAppData = createStore(allReducers, applyMiddleware(thunk))
    mainAppData.dispatch(Action_User);
    mainAppData.dispatch(Action_Categories)
    /*
    *
    * Render the main element
    *
    */
    ReactDOM.render(
        <Suspense fallback={<Loading/>}>
            <Provider store={mainAppData}>
                <App/>
            </Provider>
        </Suspense>
        , document.getElementById("root"));
}
