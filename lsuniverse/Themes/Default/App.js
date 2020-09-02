import React, {lazy} from "react";
import {useTranslation} from "react-multi-lang";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

/*
* Pages
 */
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
    const t = useTranslation();


    return (
        <>
            <Router>
                <Switch>
                    <Route path={'/'} exact component={Home}/>

                    <Route path={'/login'} component={Login}/>
                    {/*<Route path={'/register'} component={''}/>*/}
                    {/*<Route path={'/forgot-password'} component={''}/>*/}

                    {/*<Route path={'/main'} component={''}/>*/}
                </Switch>
            </Router>
        </>
    );
};

export default App;

