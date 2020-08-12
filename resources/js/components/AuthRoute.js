import React, { Component } from "react";
import { Authenticator } from "../services/Authenticator";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
    const auth = Authenticator();

    return (
        <Route
            {...rest}
            render={props =>
                auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
};
export default AuthRoute;
