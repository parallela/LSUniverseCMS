import React from "react";
import {Switch, Route, Redirect, useLocation} from "react-router-dom";
import DashboardRoutes from "../../routes/dashboard";
import RoutersRequireAuth from "../../../../JSScripts/services/RoutersRequireAuth";

const Dashboard = () => {
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
                <Redirect to={'/dashboard/index'} />
            </RoutersRequireAuth>
        </Switch>
    )
}

export default Dashboard;
