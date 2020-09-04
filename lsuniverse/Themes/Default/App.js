import React, {useState, useEffect} from "react";
import {useTranslation} from "react-multi-lang";
import {BrowserRouter as Router, useLocation, Switch, Route, Redirect} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import DashboardRoutes from "./routes/dashboard";

/*
* Pages
 */
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";

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
                        {/*<Route path={'/register'} component={''}/>*/}
                        {/*<Route path={'/forgot-password'} component={''}/>*/}

                        {/*<Route path={'/main'} component={''}/>*/}
                        <Route path={'/dashboard'} component={Dashboard}/>
                    </Switch>
                </Router>
            </>
        );
    }
;

export default App;

