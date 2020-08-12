import React from "react";
import Layout from "./Layout";
import { useTranslation } from "react-multi-lang";
import Register from "./Register";
import Login from "./Login";
import { Authenticator } from "../services/Authenticator";
import { Redirect } from "react-router-dom";

const Auth = props => {
    const t = useTranslation();
    const auth = Authenticator();

    if (auth) {
        return <Redirect to={"/"} />;
    }

    return (
        <Layout>
            <main>
                <div
                    className="unit-5 overlay"
                    style={{ backgroundImage: `url(images/hero_bg_1.jpg)` }}
                >
                    <div className="container text-center">
                        <h2 className="mb-0">{t("home.auth")}</h2>
                    </div>
                </div>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <Register />
                            <Login />
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};
export default Auth;
