import React from "react";
import {Redirect, Route} from "react-router-dom";
import decode from "jwt-decode";

export const AuthRouter = ({component: Component, ...rest}) => {
    const checkAuth = () => {
        const token = localStorage.getItem('token');
        const {exp} = decode(token);

        if (!token) {
            return false;
        }
        if (exp === undefined || exp === null) {
            return false;
        }
        if (exp < new Date().getTime()) {
            return false;
        }

        return true;
    }


    return (
        <Route {...rest} render={cond() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                path: "/login",
                state: {from: props.location}
            }}/>)}/>
    )
};

