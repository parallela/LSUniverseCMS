import React, {useState, useEffect} from "react";
import {useTranslation} from "react-multi-lang";
import {BrowserRouter as Router, useLocation, Switch, Route, Redirect} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

/*
* Pages
 */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Register from "./pages/Register";
import ForgetPassword from "./pages/ForgetPassword";

const App = props => {
        const t = useTranslation();
        /*
        * Implementing Progress Fancy Progress Bar
        */
        const [progress, setProgress] = useState(0);

        useEffect(() => {
            setProgress(50);
            setTimeout(() => setProgress(100), 1200);
        }, []);

        return (
            <>
                <LoadingBar color={"#34406c"} progress={progress} onLoaderFinished={() => setProgress(0)}/>
                <Router>
                    <Switch>
                        <Route path={'/'} exact component={Home}/>

                        <Route path={'/login'} component={Login}/>
                        <Route path={'/register'} component={Register}/>
                        <Route path={'/forget-password'} component={ForgetPassword}/>

                        {/*<Route path={'/main'} component={''}/>*/}
                        <Route path={'/dashboard'} component={Dashboard}/>
                    </Switch>
                </Router>
            </>
        );
    }
;

export default App;

