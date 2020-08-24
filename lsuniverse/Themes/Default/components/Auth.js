import React, {useEffect} from "react";
import {useTranslation} from "react-multi-lang";
import Register from "./Register";
import Login from "./Login";
import Messages from "./Messages";

const Auth = props => {
    const t = useTranslation();
    const verified = localStorage.getItem("verified");

    useEffect(() => {
        if (verified !== null) {
            setTimeout(() => {
                localStorage.removeItem("verified");
            }, 5000);
        }
    });

    return (
        <main>
            <div
                className="unit-5 overlay"
                style={{backgroundImage: `url(images/hero_bg_1.jpg)`}}
            >
                <div className="container text-center">
                    <h2 className="mb-0">{t("home.auth")}</h2>
                </div>
            </div>
            <div className="site-section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {verified == "verified" && (
                                <Messages
                                    type="success"
                                    message={t("auth.account-verified")}
                                />
                            )}
                            {verified == "not_verified" && (
                                <Messages
                                    type="danger"
                                    message={t(
                                        "auth.account-verification-failed"
                                    )}
                                />
                            )}
                        </div>
                        <Register/>
                        <Login/>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Auth;
