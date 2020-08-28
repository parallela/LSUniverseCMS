import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import Auth from "./Auth";
import {useEffect} from "react";
import en from "../../../Language/Frontend/lang/en.json";
import bg from "../../../Language/Frontend/lang/bg.json";
import {setDefaultLanguage, setTranslations} from "react-multi-lang";
// import {UserData} from "../../../JSScripts/services/Authenticator";
import {_networkUserGet} from "../../../JSScripts/network/Network_UserGet";
import {AnimatedSwitch, spring} from "react-router-transition";
import Layout from "./Layout";
import ChangePassword from "./ChangePassword";
import Verififaction from "./Verification";
import User from "./User";

const App = () => {

    useEffect(() => {
        setTranslations({en, bg});
        if (localStorage.getItem('token')) {
            _networkUserGet();
        }

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

    const mapStyles = styles => {
        return {
            opacity: styles.opacity,
            transform: `scale(${styles.scale})`
        };
    };

    const bounce = val => {
        return spring(val, {
            stiffness: 330,
            damping: 22
        });
    };

    const bounceTransition = {
        atEnter: {
            opacity: 0,
            scale: 1.2
        },
        atLeave: {
            opacity: bounce(0),
            scale: bounce(0.8)
        },
        atActive: {
            opacity: bounce(1),
            scale: bounce(1)
        }
    };

    return (
        <main>
            <Router>
                <Layout>
                    <AnimatedSwitch
                        atEnter={bounceTransition.atEnter}
                        atLeave={bounceTransition.atLeave}
                        atActive={bounceTransition.atActive}
                        mapStyles={mapStyles}
                        className="route-wrapper"
                    >
                        <Route path={"/"} exact component={Home}/>
                        <Route path={"/auth"} component={Auth}/>
                        <Route path={"/my"} component={User}/>
                        <Route path={"/password/reset"} component={ChangePassword}/>
                        <Route path={"/verify"} component={Verififaction}/>
                    </AnimatedSwitch>
                </Layout>
            </Router>
        </main>
    );
};

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App/>, document.getElementById("root"));
}
