import React, {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import DashboardRoutes from "../../routes/dashboard";
import RoutersRequireAuth from "../../../../JSScripts/services/RoutersRequireAuth";
import {Action_GetUserAltData} from "../../../../JSScripts/reducers/actions/Action_User";

const Dashboard = () => {
    const dispatch = useDispatch();
    const location = window.location.pathname;

    // Dispatch user alt data to dashnaord components
    useEffect(() => {
        dispatch(Action_GetUserAltData);
    }, []);

    // Redirect user to the index dashboard page if the user don't specified second path name
    if (location === "/dashboard") {
        return (
            <Redirect to={'/dashboard/index'}/>
        )
    }

    return (
        <Switch>
            <RoutersRequireAuth path={'/dashboard'}>
                {DashboardRoutes.map((route, key) => {
                    return route.component ? (
                        <Route
                            key={key}
                            exact={true}
                            path={`/dashboard${route.path}`}
                            render={props => <route.component {...props} />}
                        />

                    ) : null
                })}
            </RoutersRequireAuth>
        </Switch>
    )
}

export default Dashboard;
