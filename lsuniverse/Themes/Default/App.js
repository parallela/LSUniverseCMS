import React from "react";
import {translator} from "../../JSScripts/translation/translate";


const App = () => {
    const t = translator();

    return (
        <div>{t("home.nav-home")}</div>
    );
};

export default App;

