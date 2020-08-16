import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import User from "./User";
import { useEffect, useState } from "react";
import en from "../lang/en.json";
import bg from "../lang/bg.json";
import { setDefaultLanguage, setTranslations } from "react-multi-lang";


const App = () => {
    useEffect(() => {
        setTranslations({ en, bg });

        const setLanguage = () => {
            try {
                if (localStorage.getItem("lang") === null) {
                    localStorage.setItem("lang", "en");
                }
                setDefaultLanguage(localStorage.getItem("lang"));
            } catch (e) {
                console.log(e);
            }
        };
        setLanguage();
    }, []);

    return (
        <main>
            <Router>
                <Route path={"/"} exact component={Home} />
                <Route path={"/auth"} component={Auth} />
                <Route path={'/my'} component={User} />
            </Router>
        </main>
    );
};

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
