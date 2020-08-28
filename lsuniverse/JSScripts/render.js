import ReactDOM from "react-dom";
import React from "react";

/*
* Use another theme example:
*
* import App from "../Themes/YourThemeName/components/MainFile [For example: App]"
*
* For any theme you'll make you can use `Default` theme for template.
* You can change all of the frontend logic and put your custom.
* "All Good Things are Wild and Free!"
* - KAPTEN & SON
*/

import App from "../Themes/Default/components/App";

if (document.getElementById("root")) {
    ReactDOM.render(<App/>, document.getElementById("root"));
}
