import React, {cloneElement, Children} from "react";
import {Redirect, Route} from "react-router-dom";
import decode from "jwt-decode";

export const RoutersRequireAuth = ({children, authed, ...rest}) => {
    const checkAuth = () => {
        const token = localStorage.getItem('auth_token');

        try {
            const {exp} = decode(token);

            if (!token) {
                return false;
            }
            if (exp === undefined || exp === null) {
                localStorage.removeItem('auth_token');
                return false;
            }
            if (exp < new Date().getTime() / 1000) {
                localStorage.removeItem('auth_token');
                return false;
            }
        } catch (error) {
           window.location.href = `/login/?redirectTo=${window.location.pathname}`;
        }

        return true;
    }


    return (
        <Route
            {...rest}
            render={(props) => checkAuth() ?
                <div>
                    {Children.map(children, child => cloneElement(child, {...child.props}))}
                </div>
                :
                <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
        />

    )
};

export default RoutersRequireAuth;

